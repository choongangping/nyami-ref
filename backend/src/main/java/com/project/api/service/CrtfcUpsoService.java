package com.project.api.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.project.api.entity.CrtfcUpso;
import com.project.api.repository.CrtfcUpsoRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@Data
@RequiredArgsConstructor
@Slf4j
public class CrtfcUpsoService {
    private final CrtfcUpsoRepository crtfcUpsoRepository;

    public void savePartialData(JsonNode rows) {
        for (JsonNode row : rows) {
            CrtfcUpso crtfcUpso = new CrtfcUpso();

            // 필드 매핑
            crtfcUpso.setUpsoNm(getTextValue(row, "UPSO_NM")); // 업소명
            crtfcUpso.setCggCodeNm(getTextValue(row, "CGG_CODE_NM")); // 자치구명
            crtfcUpso.setCobCodeNm(getTextValue(row, "COB_CODE_NM")); // 업종명
            crtfcUpso.setBizcndCodeNm(getTextValue(row, "BIZCND_CODE_NM")); // 업태명

            // 인증일자 (필드가 존재하지 않거나 파싱 실패 시 null로 설정)
            crtfcUpso.setCrtfcYmd(getLocalDateValue(row, "CRTFC_YMD"));

            // 좌표 정보
            crtfcUpso.setYDnts(getDoubleValue(row, "Y_DNTS")); // Y 좌표
            crtfcUpso.setXCnts(getDoubleValue(row, "X_CNTS")); // X 좌표

            // 연락처 및 주소 정보
            crtfcUpso.setTelNo(getTextValue(row, "TEL_NO")); // 전화번호
            crtfcUpso.setRdnDetailAddr(getTextValue(row, "RDN_DETAIL_ADDR")); // 도로명 상세주소
            crtfcUpso.setRdnCodeNm(getTextValue(row, "RDN_CODE_NM")); // 도로명주소

            // 저장
            crtfcUpsoRepository.save(crtfcUpso);
        }
    }

    // 유틸리티 메서드: JSON 노드에서 문자열 값 가져오기
    private String getTextValue (JsonNode node, String fieldName){
        return node.hasNonNull(fieldName) ? node.get(fieldName).asText() : null;
    }

    // 유틸리티 메서드: JSON 노드에서 Double 값 가져오기
    private Double getDoubleValue (JsonNode node, String fieldName){
        return node.hasNonNull(fieldName) ? node.get(fieldName).asDouble() : null;
    }

    // 유틸리티 메서드: JSON 노드에서 LocalDate 값 가져오기
    private LocalDate getLocalDateValue (JsonNode node, String fieldName){
        if (node.hasNonNull(fieldName)) {
            try {
                return LocalDate.parse(node.get(fieldName).asText());
            } catch (Exception e) {
                log.error("Invalid date format for field: {}", e.getMessage());
            }
        }
        return null;
    }
}
