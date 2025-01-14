package com.project.api.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "store_data")
public class StoreData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String trdStateGbn; // 영업상태코드 (01: 영업, 03: 폐업)
    private String trdStateNm; // 영업상태명
    private String siteTel; // 전화번호
    private String rdnWhlAddr; // 도로명주소
    private String bplcNm; // 사업장명
    private LocalDateTime lastModTs; // 마지막 수정시간
    private String uptaeNm; // 업태 구분명 (한식 등)
    private Double x; // X 좌표
    private Double y; // Y 좌표
}
