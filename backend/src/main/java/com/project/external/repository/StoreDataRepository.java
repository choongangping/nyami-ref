package com.project.external.repository;

import com.project.external.entity.StoreData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreDataRepository extends JpaRepository<StoreData, Integer> {
}
