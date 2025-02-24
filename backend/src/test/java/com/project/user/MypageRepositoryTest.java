package com.project.user;

import com.project.common.config.QuerydslConfig;
import com.project.user.entity.Users;
import com.project.user.repository.MypageRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@DataJpaTest
@Import(QuerydslConfig.class)
class MypageRepositoryTest {

    @Autowired
    private MypageRepository mypageRepository;

    private Users user;

    @BeforeEach
    void setUp() {
        user = new Users();
        user.setUsername("username");
        user.setPassword("password");
        user.setNickname("nickname");
        user.setEmail("email@test.com");
        user.setIntroduction("introduction");
    }

    @Test
    void getProfile_ShouldReturnUser() {
        // Given
        mypageRepository.save(user);

        // When
        Users foundUser = mypageRepository.getProfile(user.getId());

        // Then
        assertNotNull(foundUser);
        assertEquals(user.getNickname(), foundUser.getNickname());
    }
}
