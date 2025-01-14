package com.project.api.repository;

import com.project.api.entity.CrtfcUpso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrtfcUpsoRepository extends JpaRepository<CrtfcUpso, Long> {
}
