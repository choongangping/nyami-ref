package com.project.store.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
@Schema(description = "가게 검색 Dto")
public class StoreSearchRequest {
    @Schema(example = "강남구")
    private String local;

    @Schema(example = "한식")
    private String foodCategory;

    @Schema(example = "혼밥하기 좋은")
    private String theme;

    @Schema(example = "views")
    private String sort;

    @Min(value = 1, message = "1 이하의 페이지 번호가 입력되었습니다.")
    private int page = 1;
}
