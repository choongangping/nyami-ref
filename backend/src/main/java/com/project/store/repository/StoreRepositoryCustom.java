package com.project.store.repository;

import com.project.store.entity.Store;

import java.util.List;

// 동적 쿼리 작성을 위한 Querydsl 인터페이스
public interface StoreRepositoryCustom {
    List<Store> findStores(String local, String foodCategory, String theme, String sortBy, int page, int size);
}
