package com.project.store.service;

import com.project.store.dto.StoreResponse;
import com.project.store.dto.StoreSearchRequest;
import com.project.store.entity.Store;
import com.project.store.mapper.StoreMapper;
import com.project.store.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class StoreService {
    private final StoreRepository storeRepository;
    int size = 6;

    public Page<StoreResponse> findStores(StoreSearchRequest request) {
        try {
            Pageable pageable = PageRequest.of(request.getPage() - 1, size, Sort.by("views").descending());
            Page<Store> stores = storeRepository.findStores(
                    request.getLocal(),
                    request.getFoodCategory(),
                    request.getTheme(),
                    request.getSort(),
                    pageable
            );
            List<StoreResponse> responses = StoreMapper.STORE_MAPPER.toDto(stores.getContent());

            return new PageImpl<>(responses, pageable, stores.getTotalElements());
        } catch (IllegalArgumentException e) {
            log.error("잘못된 파라미터 입력: local={}, foodCategory={}, theme={}, sort={}, page={}",
                request.getLocal(), request.getFoodCategory(), request.getTheme(), request.getSort(), request.getPage(), e);
            throw e;
        } catch (Exception e) {
            log.error("가게 조회 중 예외가 발생하였습니다:", e);
            throw new RuntimeException("매장 검색 중 오류가 발생했습니다.", e);
        }
    }
}
