package com.project.api.repository;

import com.project.api.entity.StoreData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreDataRepository extends JpaRepository<StoreData, Integer> {
}
