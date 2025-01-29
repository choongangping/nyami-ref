package com.project.store.service;

import com.project.store.entity.Store;
import com.project.store.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class StoreService {
    private final StoreRepository storeRepository;
    int size = 6;

    public List<Store> findAll(List<Store> stores, String local, String foodCategory, String theme, String sortBy, int page) {
        // return storeRepository.findStores();
        return stores.stream()
                .filter(store -> local == null || local.equals(store.getLocal().getLocal()))
                .filter(store -> foodCategory == null || foodCategory.equals(store.getFoodCategory().getFoodCategory()))
                .filter(store -> theme == null || theme.equals(store.getTheme().getTheme()))
                .sorted(Comparator.comparingInt(Store::getViews).reversed())
                .skip((long) (page - 1) * size)
                .limit(size)
                .toList();
    }

    public Page<Store> findStores(String local, String foodCategory, String theme, String sortBy, int page) {
        Pageable pageable = PageRequest.of(page - 1, 6, Sort.by("views").descending());
        return storeRepository.findStores(local, foodCategory, theme, sortBy, pageable);
    }
}
