package com.project.external;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;

import java.io.File;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class JsonFileReadingTest {

    // restaurant.json 파일 테스트 (적은 데이터)
    // @Test
    @DisplayName(value = ".json 파일을 로드한다.")
    public void testJsonNodeParsing() throws Exception {
        String filePath = "C:\\restaurant.json";
        File file = new File(filePath);

        // 파일 존재 확인
        assertTrue(file.exists(), "JSON 파일이 존재하지 않습니다: " + file.getAbsolutePath());
        assertTrue(file.canRead(), "JSON 파일을 읽을 수 없습니다: " + file.getAbsolutePath());

        // ObjectMapper로 JSON 파싱
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(file);

        // DESCRIPTION 속성 확인
        System.out.println("DESCRIPTION 속성을 검사합니다.");
        JsonNode descriptionNode = rootNode.get("DESCRIPTION");
        if (descriptionNode != null && descriptionNode.isObject()) {
            checkMissingFields(descriptionNode, getDescriptionFields(), "DESCRIPTION");
        } else {
            System.out.println("DESCRIPTION 노드가 없거나 객체 형식이 아닙니다.");
        }

        // DATA 배열 속성 확인
        System.out.println("\nDATA 속성을 검사합니다.");
        JsonNode dataArray = rootNode.get("DATA");
        if (dataArray != null && dataArray.isArray()) {
            for (int i = 0; i < dataArray.size(); i++) {
                JsonNode dataNode = dataArray.get(i);
                checkMissingFields(dataNode, getDataExpectedFields(), "DATA[" + i + "]");
            }
        } else {
            System.out.println("DATA 노드가 없거나 배열 형식이 아닙니다.");
        }

        // JSON 데이터 출력
        System.out.println("\nJSON 데이터를 출력합니다:");
        printJsonNode(rootNode, "");
    }

    // accept_restaurant.json 테스트 (대용량 데이터)
    // @Test
    @DisplayName(value = "대용량 .json 파일을 스트리밍 처리한다.")
    public void testJsonStreaming() throws Exception {
        String filePath = "C:\\accept_restaurant.json";
        File file = new File(filePath);

        // 파일 존재 확인
        assertTrue(file.exists(), "JSON 파일이 존재하지 않습니다: " + file.getAbsolutePath());
        assertTrue(file.canRead(), "JSON 파일을 읽을 수 없습니다: " + file.getAbsolutePath());

        // JsonFactory와 JsonParser 사용
        JsonFactory factory = new JsonFactory();
        boolean matchFound = false;

        try (JsonParser parser = factory.createParser(file)) {
            System.out.println("JSON 데이터 스트리밍 시작:");

            // JSON 토큰을 순차적으로 읽기
            while (!parser.isClosed()) {
                JsonToken token = parser.nextToken();

                if (token == null) break;

                // 필드 이름 출력
                if (token == JsonToken.FIELD_NAME && "trdstatenm".equals(parser.getCurrentName())) {
                    parser.nextToken(); // 다음 토큰으로 이동하여 값 확인
                    String value = parser.getValueAsString();

                    if (!value.equals("폐업") && !value.isBlank()) {
                        printCurrentObject(parser, 1);
                        matchFound = true;
                    }
                }
            }
        }

        if (!matchFound) {
            System.out.println("조건에 맞는 데이터가 없습니다.");
        }

    }

    // 현재 위치에서 전체 JSON 객체를 출력하는 유틸리티 메서드
    private void printCurrentObject(JsonParser parser, int depth) throws Exception {
        while (true) {
            JsonToken token = parser.nextToken();

            if (token == null) break;

            if (token == JsonToken.START_OBJECT || token == JsonToken.START_ARRAY) {
                // 시작 토큰: 깊이를 증가시키며 출력
                printIndented(token.asString(), depth);
                printCurrentObject(parser, depth + 1); // 재귀 호출로 내부 구조 탐색
            } else if (token == JsonToken.END_OBJECT || token == JsonToken.END_ARRAY) {
                // 끝 토큰: 현재 깊이를 기준으로 출력하고 종료
                printIndented(token.asString(), depth - 1);
                break;
            } else if (token == JsonToken.FIELD_NAME) {
                // 필드 이름과 값을 출력
                String fieldName = parser.getCurrentName();
                parser.nextToken(); // 값으로 이동
                String value = parser.getValueAsString();
                printIndented(fieldName + ": " + value, depth);
            }
        }
    }

    // 들여쓰기를 추가하여 데이터를 출력하는 메서드
    private void printIndented(String text, int depth) {
        String indent = "  ".repeat(depth); // 깊이에 따라 들여쓰기 추가
        System.out.println(indent + text);
    }

    // 계층 구조에 따른 데이터 출력 메서드
    private void printJsonNode(JsonNode node, String indent) {
        if (node.isObject()) {
            node.fields().forEachRemaining(entry -> {
                System.out.println(indent + entry.getKey() + ":");
                printJsonNode(entry.getValue(), indent + "  ");
            });
        } else if (node.isArray()) {
            for (JsonNode item : node) {
                printJsonNode(item, indent + "  ");
            }
        } else {
            System.out.println(indent + node.asText());
        }
    }

    // DESCRIPTION 필드 목록
    private Set<String> getDescriptionFields() {
        return new HashSet<>(Arrays.asList(
                "CGG_CODE", "CRTFC_YN", "GNT_NO", "Y_DNTS", "RDN_DETAIL_ADDR",
                "CRTFC_GBN_NM", "CRTFC_SNO", "MAP_INDICT_YN", "COB_CODE_NM",
                "BIZCND_CODE", "CRTFC_GBN", "CRTFC_CLASS", "USE_YN",
                "CRTFC_UPSO_MGT_SNO", "CRTFC_YMD", "X_CNTS", "OWNER_NM",
                "CGG_CODE_NM", "RDN_ADDR_CODE", "TEL_NO", "BIZCND_CODE_NM",
                "COB_CODE", "UPSO_SNO", "FOOD_MENU", "UPD_TIME", "CRT_TIME", "UPSO_NM"
        ));
    }

    // 예상 DATA 필드 목록
    private Set<String> getDataExpectedFields() {
        return new HashSet<>(Arrays.asList(
                "tel_no", "crtfc_gbn", "upd_time", "cob_code_nm", "crtfc_class",
                "rdn_detail_addr", "upso_sno", "bizcnd_code_nm", "upso_nm", "gnt_no",
                "map_indict_yn", "y_dnts", "cob_code", "x_cnts", "owner_nm",
                "bizcnd_code", "crtfc_ymd", "crt_time", "crtfc_sno", "crtfc_yn",
                "rdn_addr_code", "rdn_code_nm", "cgg_code", "cgg_code_nm",
                "crtfc_upso_mgt_sno", "use_yn", "crtfc_gbn_nm", "food_menu"
        ));
    }

    // 누락된 필드 확인
    private void checkMissingFields(JsonNode node, Set<String> expectedFields, String nodeName) {
        Set<String> missingFields = new HashSet<>(expectedFields);
        node.fieldNames().forEachRemaining(missingFields::remove);

        if (!missingFields.isEmpty()) {
            System.out.println(nodeName + "에 누락된 필드: " + missingFields);
        }
    }
}
