package com.project.external.repository;

import com.project.external.entity.CrtfcUpso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrtfcUpsoRepository extends JpaRepository<CrtfcUpso, Long> {
}
