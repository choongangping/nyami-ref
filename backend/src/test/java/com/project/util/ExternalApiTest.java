package com.project.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.api.dto.StoreDataRequestDTO;
import com.project.api.entity.StoreData;
import com.project.api.repository.StoreDataRepository;
import com.project.api.service.CrtfcUpsoService;
import com.project.api.util.ParsingJsonHelper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferUtils;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.util.stream.StreamSupport;

import static org.junit.jupiter.api.Assertions.assertNotNull;

/** 외부 api 테스트 클래스 */
@SpringBootTest
public class ExternalApiTest {
    @Autowired
    private WebClient webClient;

    @Autowired
    private String dataSeoulApiKey;

    @Autowired
    private CrtfcUpsoService crtfcUpsoService;

    @Autowired
    private StoreDataRepository storeDataRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @DisplayName(value = "서울시 인증업소 데이터를 데이터베이스에 저장한다.")
    public void callAuthnRestaurantApi() throws JsonProcessingException {
        // 외부 API URL
        String apiUrl = String.format("/%s/json/CrtfcUpsoInfo/1/10", dataSeoulApiKey);

        // API 호출
        Mono<String> responseMono = webClient.get()
                .uri(apiUrl)
                .retrieve()
                .bodyToMono(String.class);

        // JSON 응답 데이터 가져오기
        String response = responseMono.block(); // 테스트용으로 block() 사용
        assertNotNull(response, "API 응답이 null입니다.");

        // JSON 데이터를 JsonNode로 변환
        JsonNode rootNode = objectMapper.readTree(response);

        // CrtfcUpsoInfo 노드 가져오기
        JsonNode crtfcUpsoInfo = rootNode.get("CrtfcUpsoInfo");
        assertNotNull(crtfcUpsoInfo, "CrtfcUpsoInfo 노드가 없습니다.");

        // row 데이터 저장 (특정 필드만 저장)
        JsonNode rows = crtfcUpsoInfo.get("row");
        crtfcUpsoService.savePartialData(rows);

        //// 데이터 출력
        //System.out.println("list_total_count: " + crtfcUpsoInfo.get("list_total_count").asInt());
        //System.out.println("RESULT: " + crtfcUpsoInfo.get("RESULT").toPrettyString());
        //System.out.println("데이터:");
        //JsonNode rows = crtfcUpsoInfo.get("row");
        //if (rows.isArray()) {
        //    for (JsonNode row : rows) {
        //        System.out.println(row.toPrettyString());
        //    }
        //}
    }

    @Test
    @DisplayName(value = "서울시 음식점 인허가정보 데이터를 데이터베이스에 저장한다.")
    public void callAcceptRestaurantApi() {
        // 외부 API URL
        String apiUrl = String.format("/%s/json/LOCALDATA_072404/1/3/", dataSeoulApiKey);

        // API 호출
        Flux<DataBuffer> responseFlux = webClient.get()
                .uri(apiUrl)
                .retrieve()
                .bodyToFlux(DataBuffer.class);

        // Flux<DataBuffer> 처리
        responseFlux
                .as(DataBufferUtils::join) // DataBuffer 병합
                .map(dataBuffer -> {
                    try {
                        // 병합된 JSON 데이터를 UTF-8 문자열로 변환
                        String json = dataBuffer.toString(StandardCharsets.UTF_8);
                        DataBufferUtils.release(dataBuffer); // DataBuffer 해제
                        return json;
                    } catch (Exception e) {
                        throw new RuntimeException("JSON 병합 중 에러 발생", e);
                    }
                })
                .flatMapMany(json -> {
                    try {
                        // JSON 데이터를 파싱하여 "row" 배열 가져오기
                        JsonNode rootNode = objectMapper.readTree(json);
                        JsonNode rows = rootNode.get("LOCALDATA_072404").get("row");
                        if (rows != null && rows.isArray()) {
                            System.out.println(rows.toPrettyString());
                            return Flux.fromStream(StreamSupport.stream(rows.spliterator(), false)
                                    .map(ParsingJsonHelper::mapJsonToDTO)); // 헬퍼 메서드 사용
                        }
                    } catch (Exception e) {
                        System.err.println("JSON 파싱 중 오류 발생: " + e.getMessage());
                        e.printStackTrace();
                    }
                    return Flux.empty();
                })
                .map(this::toEntity) // DTO -> Entity 변환
                .collectList() // Entity 리스트 수집
                .doOnNext(entities -> {
                    // 데이터베이스에 저장
                    storeDataRepository.saveAll(entities);
                    System.out.println(entities.size() + "개의 데이터가 저장되었습니다.");
                })
                .block(); // 테스트용 동기 실행
    }

    // 출력 결과를 JSON 형식으로 변환하는 메서드
    private void appendIndentedOutput(StringBuilder output, JsonToken token, String text, int indentLevel) {
        String indent = "  ".repeat(indentLevel); // 들여쓰기 생성
        if (token == JsonToken.FIELD_NAME) {
            output.append(indent).append("\"").append(text).append("\": ");
        } else if (token == JsonToken.VALUE_STRING || token == JsonToken.VALUE_NUMBER_INT || token == JsonToken.VALUE_NUMBER_FLOAT) {
            output.append("\"").append(text).append("\",\n");
        } else if (token == JsonToken.START_OBJECT || token == JsonToken.START_ARRAY) {
            output.append(indent).append(token == JsonToken.START_OBJECT ? "{\n" : "[\n");
        } else if (token == JsonToken.END_OBJECT || token == JsonToken.END_ARRAY) {
            output.append(indent).append(token == JsonToken.END_OBJECT ? "}\n" : "]\n");
        }
    }

    // DTO를 Entity로 변환하는 메서드
    private StoreData toEntity(StoreDataRequestDTO dto) {
        System.out.println(dto);
        StoreData entity = new StoreData();
        entity.setTrdStateGbn(dto.getTrdStateGbn());
        entity.setTrdStateNm(dto.getTrdStateNm());
        entity.setSiteTel(dto.getSiteTel());
        entity.setRdnWhlAddr(dto.getRdnWhlAddr());
        entity.setBplcNm(dto.getBplcNm());
        entity.setLastModTs(dto.getLastModTs());
        entity.setUptaeNm(dto.getUptaeNm());
        entity.setX(dto.getX());
        entity.setY(dto.getY());
        return entity;
    }
}
