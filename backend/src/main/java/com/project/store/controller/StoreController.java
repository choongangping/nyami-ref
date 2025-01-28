package com.project.store.controller;

import com.project.store.dto.StoreRequest;
import com.project.store.dto.StoreResponse;
import com.project.store.service.StoreService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api")
@Tag(name = "가게 API", description = "가게 API 명세서")
public class StoreController {
    private final StoreService storeService;

    @Operation(
        summary = "가게 목록",
        description = "가게 목록을 쿼리 파라미터에 따라 페이징 처리 후 반환합니다.",
        responses = {
            @ApiResponse(
                responseCode = "200",
                description = "가게 목록 조회 성공",
                content = @Content(mediaType = "application/json", schema = @Schema(type = "array", implementation = StoreResponse.class))
            ),
            @ApiResponse(
                responseCode = "500",
                description = "가게 목록 조회 실패",
                content = @Content(mediaType = "application/json", schema = @Schema(type = "string", example = "서버에 문제가 발생하였습니다."))
            )
        }
    )
    @GetMapping("/stores")
    public ResponseEntity<?> getStores() {
        return ResponseEntity.ok(new ArrayList<StoreResponse>());
    }

    @Operation(
        summary = "가게 등록",
        description = "가게 정보를 입력받아 데이터베이스에 저장합니다."
    )
    @PostMapping("/stores")
    public String createStores(@RequestBody StoreRequest storeRequest) {
        return "가게가 등록되었습니다.";
    }
}
