package com.project;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferUtils;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

/** 외부 api 테스트 클래스 */
@SpringBootTest
public class ExternalApiTest {
    @Autowired
    private WebClient webClient;

    @Autowired
    private String dataSeoulApiKey;

    @Test
    @DisplayName(value = "서울시 인증업소 외부 api를 호출한다.")
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
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(response);

        // CrtfcUpsoInfo 노드 가져오기
        JsonNode crtfcUpsoInfo = rootNode.get("CrtfcUpsoInfo");
        assertNotNull(crtfcUpsoInfo, "CrtfcUpsoInfo 노드가 없습니다.");

        // 데이터 출력
        System.out.println("list_total_count: " + crtfcUpsoInfo.get("list_total_count").asInt());
        System.out.println("RESULT: " + crtfcUpsoInfo.get("RESULT").toPrettyString());
        System.out.println("데이터:");
        JsonNode rows = crtfcUpsoInfo.get("row");
        if (rows.isArray()) {
            for (JsonNode row : rows) {
                System.out.println(row.toPrettyString());
            }
        }
    }

    @Test
    @DisplayName(value = "서울시 음식점 인허가정보 외부 api를 호출한다.")
    public void callAcceptRestaurantApi() {
        // 외부 API URL
        String apiUrl = String.format("/%s/json/LOCALDATA_072404/1/100/", dataSeoulApiKey);

        // API 호출
        Mono<DataBuffer> responseMono = webClient.get()
                .uri(apiUrl)
                .retrieve()
                .bodyToMono(DataBuffer.class);

        // DataBuffer를 동기적으로 처리
        DataBuffer dataBuffer = responseMono.block();
        assertNotNull(dataBuffer, "API 응답이 null입니다.");

        // DataBuffer 스트리밍 및 JSON 파싱
        try (JsonParser parser = new JsonFactory().createParser(dataBuffer.asInputStream())) {
            StringBuilder output = new StringBuilder();
            boolean excludeObject = false; // 현재 객체를 제외할지 여부
            int indentLevel = 0; // 객체 중첩 수준

            while (!parser.isClosed()) {
                JsonToken token = parser.nextToken();

                if (token == JsonToken.START_OBJECT || token == JsonToken.START_ARRAY) {
                    appendIndentedOutput(output, token, "", indentLevel);
                    indentLevel++;
                } else if (token == JsonToken.END_OBJECT || token == JsonToken.END_ARRAY) {
                    indentLevel--;
                    appendIndentedOutput(output, token, "", indentLevel);
                } else {
                    appendIndentedOutput(output, token, parser.getText(), indentLevel);
                }

                //if (!excludeObject) {
                //    if (token == JsonToken.FIELD_NAME && "TRDSTATENM".equals(parser.getCurrentName())) {
                //        parser.nextToken(); // 다음 토큰으로 이동하여 값 확인
                //        String value = parser.getValueAsString();
                //        if ("폐업".equals(value)) {
                //            excludeObject = true; // 해당 객체 제외
                //        } else {
                //            output.append("\"TRDSTATENM\": ").append(value).append("\n");
                //        }
                //    } else {
                //        output.append(token).append(": ").append(parser.getText()).append("\n");
                //    }
                //}
            }

            System.out.println("output 길이: " + output.length());
            System.out.println(output);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // DataBuffer 해제
            DataBufferUtils.release(dataBuffer);
        }
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
}
