package com.project.api.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "crtfc_upso")
public class CrtfcUpso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String upsoNm; // 업소명
    private String cggCodeNm; // 자치구명 (지역명)
    private String cobCodeNm; // 업종명 (일반음식점 or 휴게음식점)
    private String bizcndCodeNm; // 업태명 (한식 등)
    private LocalDate crtfcYmd; // 인증일자 (필요?)
    private Double yDnts; // Y좌표
    private Double xCnts; // X좌표
    private String telNo; // 전화번호
    private String rdnDetailAddr; // 도로명 상세주소
    private String rdnCodeNm; // 도로명주소
}

