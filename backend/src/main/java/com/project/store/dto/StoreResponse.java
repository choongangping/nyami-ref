package com.project.store.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "가게 응답 Dto")
public class StoreResponse {
    private int id;

    @Schema(example = "서초구")
    private String local;

    @Schema(example = "한식")
    private String foodCategory;

    @Schema(example = "데이트")
    private String theme;

    private String name;

    private String address;

    private String detailAddress;

    @Schema(example = "00-000-0000")
    private String tel;

    @Schema(example = "/images/image.png")
    private String image;

    @Schema(example = "10000000.000", type = "number", format = "decimal")
    private BigDecimal x;

    @Schema(example = "20000000.000", type = "number", format = "decimal")
    private BigDecimal y;

    private String description;

    private int views;
}
