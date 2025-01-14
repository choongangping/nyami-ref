package com.project.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class StoreDataRequestDTO {
    private String opnsfTeamCode; // 운영부서코드
    private String mgtNo; // 관리번호
    private LocalDate apvPermYmd; // 인허가일
    private LocalDate apvCancelYmd; // 취소일
    private String trdStateGbn; // 영업상태구분
    private String trdStateNm; // 영업상태명
    private String dtlStateGbn; // 상세상태구분
    private String dtlStateNm; // 상세상태명
    private LocalDate dcByYmd; // 직권말소일
    private LocalDate clgStDt; // 폐업시작일
    private LocalDate clgEndDt; // 폐업종료일
    private LocalDate ropnYmd; // 재개업일
    private String siteTel; // 전화번호
    private Double siteArea; // 면적
    private String sitePostNo; // 지번 우편번호
    private String siteWhlAddr; // 지번 주소
    private String rdnWhlAddr; // 도로명 주소
    private String rdnPostNo; // 도로명 우편번호
    private String bplcNm; // 사업장명
    private LocalDateTime lastModTs; // 마지막 수정시간
    private String updateGbn; // 갱신 구분
    private LocalDateTime updateDt; // 갱신 일자
    private String uptaeNm; // 업태 구분명
    private Double x; // X 좌표
    private Double y; // Y 좌표
}
