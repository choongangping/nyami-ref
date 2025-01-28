package com.project.external;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.external.entity.StoreData;
import com.project.external.service.CrtfcUpsoService;
import com.project.external.service.StoreDataService;
import com.project.external.util.ParsingJsonHelper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.junit.jupiter.api.Assertions.assertNotNull;

/** 외부 api 테스트 클래스 */
@SpringBootTest
public class ExternalApiTest {
    @Value("${data_seoul_api_key}")
    private String apiKey;

    @Value("${base_url}")
    private String baseUrl;

    @Autowired
    private CrtfcUpsoService crtfcUpsoService;

    @Autowired
    private StoreDataService storeDataService;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private RestTemplate restTemplate;

    @Test
    @Transactional
    @DisplayName(value = "서울시 인증업소 데이터를 데이터베이스에 저장한다.")
    public void callAuthnRestaurantApi() throws JsonProcessingException {
        // 외부 API URL
        String apiUrl = String.format("%s/%s/json/CrtfcUpsoInfo/1/10", baseUrl, apiKey);

        // http 요청
        String response = restTemplate.getForObject(apiUrl, String.class);
        assertNotNull(response, "API 응답이 null입니다.");

        // JSON 데이터를 JsonNode로 변환
        JsonNode rootNode = objectMapper.readTree(response);

        // CrtfcUpsoInfo 노드 가져오기
        JsonNode crtfcUpsoInfo = rootNode.get("CrtfcUpsoInfo");
        assertNotNull(crtfcUpsoInfo, "CrtfcUpsoInfo 노드가 없습니다.");

        // row 데이터 저장 (특정 필드만 저장)
        JsonNode rows = crtfcUpsoInfo.get("row");
        crtfcUpsoService.savePartialData(rows);
    }

    @Test
    @Transactional
    @DisplayName(value = "서울시 음식점 인허가정보 데이터를 데이터베이스에 저장한다.")
    public void callAcceptRestaurantApi() throws JsonProcessingException {
        // 외부 API URL
        String apiUrl = String.format("%s/%s/json/LOCALDATA_072404/1/300/", baseUrl, apiKey);

        // http 요청
        String response = restTemplate.getForObject(apiUrl, String.class);
        assertNotNull(response, "API 응답이 null입니다.");

        // JSON 데이터를 JsonNode로 변환
        JsonNode rootNode = objectMapper.readTree(response);
        JsonNode rows = rootNode.get("LOCALDATA_072404").get("row");
        assertNotNull(rows, "row 데이터가 없습니다.");

        // row 데이터를 DTO로 매핑 및 엔티티로 변환
        List<StoreData> entities = StreamSupport.stream(rows.spliterator(), false)
                .map(ParsingJsonHelper::mapJsonToDTO)
                .map(storeDataRequestDTO -> storeDataService.toEntity(storeDataRequestDTO))
                .collect(Collectors.toList());

        // 데이터베이스에 저장
        storeDataService.saveAll(entities);
        System.out.println(entities.size() + "개의 데이터가 저장되었습니다.");
    }
}
