package com.project.store.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "가게 응답 Dto")
public class StoreResponse {
    @Schema(description = "가게 ID", example = "1")
    private int id;

    @Schema(description = "가게 이름", example = "Best Store")
    private String name;

    @Schema(description = "장소", example = "서초구")
    private String address;

    @Schema(description = "가게 번호", example = "00-000-0000")
    private String tel;
}
