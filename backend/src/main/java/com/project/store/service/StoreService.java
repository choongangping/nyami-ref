package com.project.store.service;

import com.project.store.entity.Store;
import com.project.store.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class StoreService {
    private final StoreRepository storeRepository;

    public List<Store> findStores(List<Store> stores, String local, String foodCategory, String theme, String sortBy) {
        return stores.stream()
                .filter(store -> local == null || local.equals(store.getLocal().getLocal()))
                .filter(store -> foodCategory == null || foodCategory.equals(store.getFoodCategory().getFoodCategory()))
                .filter(store -> theme == null || theme.equals(store.getTheme().getTheme()))
                .sorted(Comparator.comparingInt(Store::getViews).reversed())
                .toList();
    }
}
