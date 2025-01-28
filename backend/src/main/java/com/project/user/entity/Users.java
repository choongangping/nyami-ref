package com.project.user.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 255, nullable = false, unique = true)
    private String username;

    @Column(length = 255, nullable = false)
    private String password;

    @Column(length = 50, unique = true)
    private String naverId;

    @Column(length = 50, unique = true)
    private String googleId;

    @Column(length = 50, unique = true)
    private String kakaoId;

    @Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(length = 50, nullable = false, unique = true)
    private String nickname;

    @Column(length = 255)
    private String profileImage;

    @Column(length = 500)
    private String introduction;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
