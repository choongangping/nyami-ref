package com.project.external.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class CrtfcUpsoRequestDTO {
    private Double crtfcUpsoMgtSno;
    private String upsoSno;
    private String upsoNm;
    private String cggCode;
    private String cggCodeNm;
    private String cobCodeNm;
    private String bizcndCodeNm;
    private String ownerNm;
    private String crtfcGbn;
    private String crtfcGbnNm;
    private String crtfcChrNm;
    private String crtfcChrId;
    private LocalDate crtfcYmd;
    private String useYn;
    private String mapIndictYn;
    private String crtfcClass;
    private Double yDnts;
    private Double xCnts;
    private String telNo;
    private String rdnDetailAddr;
    private String rdnAddrCode;
    private String rdnCodeNm;
    private String bizcndCode;
    private String cobCode;
    private String crtfcSno;
    private LocalDateTime crtTime;
    private String crtUsr;
    private LocalDateTime updTime;
    private String foodMenu;
    private String gntNo;
    private String crtfcYn;
}
