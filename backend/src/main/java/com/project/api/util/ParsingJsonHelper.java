package com.project.api.util;

import com.fasterxml.jackson.databind.JsonNode;
import com.project.api.dto.StoreDataRequestDTO;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.List;

public class ParsingJsonHelper {
    // JSON 데이터를 DTO 필드로 매핑
    public static StoreDataRequestDTO mapJsonToDTO(JsonNode node) {
        StoreDataRequestDTO dto = new StoreDataRequestDTO();

        dto.setOpnsfTeamCode(getStringValue(node, "OPNSFTEAMCODE"));
        dto.setMgtNo(getStringValue(node, "MGTNO"));
        dto.setApvPermYmd(getLocalDateValue(node, "APVPERMYMD"));
        dto.setApvCancelYmd(getLocalDateValue(node, "APVCANCELYMD"));
        dto.setTrdStateGbn(getStringValue(node, "TRDSTATEGBN"));
        dto.setTrdStateNm(getStringValue(node, "TRDSTATENM"));
        dto.setDtlStateGbn(getStringValue(node, "DTLSTATEGBN"));
        dto.setDtlStateNm(getStringValue(node, "DTLSTATENM"));
        dto.setDcByYmd(getLocalDateValue(node, "DCBYMD"));
        dto.setClgStDt(getLocalDateValue(node, "CLGSTDT"));
        dto.setClgEndDt(getLocalDateValue(node, "CLGENDDT"));
        dto.setRopnYmd(getLocalDateValue(node, "ROPNYMD"));
        dto.setSiteTel(getStringValue(node, "SITETEL"));
        dto.setSiteArea(getDoubleValue(node, "SITEAREA"));
        dto.setSitePostNo(getStringValue(node, "SITEPOSTNO"));
        dto.setSiteWhlAddr(getStringValue(node, "SITEWHLADDR"));
        dto.setRdnWhlAddr(getStringValue(node, "RDNWHLADDR"));
        dto.setRdnPostNo(getStringValue(node, "RDNPOSTNO"));
        dto.setBplcNm(getStringValue(node, "BPLCNM"));
        dto.setLastModTs(getLocalDateTimeValue(node, "LASTMODTS"));
        dto.setUpdateGbn(getStringValue(node, "UPDATEGBN"));
        dto.setUpdateDt(getLocalDateTimeValue(node, "UPDATEDT"));
        dto.setUptaeNm(getStringValue(node, "UPTAENM"));
        dto.setX(getDoubleValue(node, "X"));
        dto.setY(getDoubleValue(node, "Y"));

        return dto;
    }

    // JSON 노드에서 문자열 값 가져오기
    private static String getStringValue(JsonNode node, String fieldName) {
        return node.has(fieldName) && !node.get(fieldName).isNull() ? node.get(fieldName).asText() : null;
    }

    // JSON 노드에서 Double 값 가져오기
    private static Double getDoubleValue(JsonNode node, String fieldName) {
        try {
            return node.has(fieldName) && !node.get(fieldName).isNull() ? node.get(fieldName).asDouble() : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    // JSON 노드에서 LocalDate 값 가져오기
    private static LocalDate getLocalDateValue(JsonNode node, String fieldName) {
        try {
            String dateValue = getStringValue(node, fieldName);
            if (dateValue != null && !dateValue.isEmpty()) {
                return LocalDate.parse(dateValue, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            }
        } catch (DateTimeParseException e) {
            System.err.println("Invalid LocalDate format for field: " + fieldName);
        }
        return null;
    }

    // JSON 노드에서 LocalDateTime 값 가져오기
    private static LocalDateTime getLocalDateTimeValue(JsonNode node, String fieldName) {
        String dateTimeValue = getStringValue(node, fieldName); // 기존 헬퍼 메서드를 활용
        if (dateTimeValue != null && !dateTimeValue.isEmpty()) {
            return parseLocalDateTime(dateTimeValue); // 다중 형식 지원 메서드 호출
        }
        return null; // 값이 없거나 비어 있는 경우 null 반환
    }

    // LocalDateTime의 다중 형식 지원 메서드
    private static LocalDateTime parseLocalDateTime(String dateTimeValue) {
        for (DateTimeFormatter formatter : SUPPORTED_FORMATTERS) {
            try {
                return LocalDateTime.parse(dateTimeValue, formatter);
            } catch (DateTimeParseException e) {
                // 현재 포매터가 맞지 않는 경우 무시하고 다음 포매터 시도
            }
        }
        System.err.println("Unsupported LocalDateTime format: " + dateTimeValue);
        return null; // 유효하지 않은 값은 null 반환
    }

    // LocalDateTime의 다중 형식 구분을 위한 리스트
    private static final List<DateTimeFormatter> SUPPORTED_FORMATTERS = Arrays.asList(
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.S"),
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
    );
}
