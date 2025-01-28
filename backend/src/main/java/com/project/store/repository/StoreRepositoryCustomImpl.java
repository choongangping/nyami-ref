package com.project.store.repository;

import com.project.store.entity.Store;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.project.store.entity.QStore.store;

// Querydsl 인터페이스의 구현체 (구현체에 동적 쿼리 작성)
@Repository
@RequiredArgsConstructor
public class StoreRepositoryCustomImpl implements StoreRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Store> findStores(String local, String foodCategory, String theme, String sortBy, int page, int size) {
        return queryFactory
                .selectFrom(store) // Store 테이블을 select
                .where(
                        local != null ? store.local.local.eq(local) : null,
                        foodCategory != null ? store.foodCategory.foodCategory.eq(foodCategory) : null,
                        theme != null ? store.theme.theme.eq(theme) : null
                ) // 필터링 조건의 null 여부에 따라 쿼리를 동적으로 추가
                .orderBy(store.views.asc()) // 조회수순 정렬 (수정 필요)
                .offset((long) (page - 1) * size) // 값만큼 데이터를 건너뜀
                .limit(size) // size개의 데이터 조회
                .fetch();
    }
}
