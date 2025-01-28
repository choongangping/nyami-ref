package com.project.store.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "가게 등록 요청 Dto")
public class StoreRequest {
    @Schema(description = "가게 이름", example = "좋은 가게")
    private String name;

    @Schema(description = "장소", example = "강남구")
    private String address;

    @Schema(description = "가게 번호", example = "02-123-1234")
    private String tel;
}
