package com.project.store.service;

import com.project.store.mapper.StoreMapper;
import com.project.store.dto.StoreResponse;
import com.project.store.dto.StoreSearchRequest;
import com.project.store.entity.Store;
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
        Pageable pageable = PageRequest.of(request.getPage() - 1, 6, Sort.by("views").descending());
        Page<Store> stores = storeRepository.findStores(
                request.getLocal(),
                request.getFoodCategory(),
                request.getTheme(),
                request.getSortBy(),
                pageable
        );

        List<StoreResponse> responses = StoreMapper.STORE_MAPPER.toDto(stores.getContent());
        return new PageImpl<>(responses, pageable, stores.getTotalElements());
    }
}
