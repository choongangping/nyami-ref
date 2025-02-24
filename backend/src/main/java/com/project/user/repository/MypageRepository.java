package com.project.user.repository;

import com.project.user.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

@Repository
public interface MypageRepository extends JpaRepository<Users, Integer> {

    @Query("SELECT u FROM Users u WHERE u.id = :userId")
    Users getProfile(@Param("userId") int userId);

}
