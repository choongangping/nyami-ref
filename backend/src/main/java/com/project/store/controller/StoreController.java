package com.project.store.controller;

import com.project.store.dto.StoreRequest;
import com.project.store.dto.StoreResponse;
import com.project.store.service.StoreService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api")
@Tag(name = "가게 API", description = "가게 API 명세서")
public class StoreController {
    @Operation(
        summary = "가게 목록",
        description = "가게 목록을 쿼리 파라미터에 따라 페이징 처리 후 반환합니다."
    )
    @GetMapping("/stores")
    public List<StoreResponse> getStores() {
        List<StoreResponse> storeResponses = new ArrayList<>();
        StoreResponse storeResponse1 = new StoreResponse();
        StoreResponse storeResponse2 = new StoreResponse();

        storeResponses.add(storeResponse1);
        storeResponses.add(storeResponse2);

        return storeResponses;
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
