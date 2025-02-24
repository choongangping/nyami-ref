package com.project.user;

import com.project.user.dto.MyInfoResponse;
import com.project.user.entity.Users;
import com.project.user.repository.MypageRepository;
import com.project.user.service.MypageService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MypageServiceTest {

    @InjectMocks
    private MypageService mypageService;

    @Mock
    private MypageRepository mypageRepository;

    private Users user;

    @BeforeEach
    void setUp() {
        // setup Users 객체 (id는 이제 필요 없음)
        user = new Users();
        user.setId(1);  // id는 그대로 설정하지만, 테스트에서 사용할 필요는 없음
        user.setNickname("nickname");
        user.setIntroduction("introduction");
    }

    @Test
    void getProfile_ShouldReturnCorrectMyInfoResponse() {
        // Given
        when(mypageRepository.getProfile(1)).thenReturn(user);

        // When
        MyInfoResponse result = mypageService.getProfile(1);

        // Then
        assertEquals("nickname", result.getNickname());
        assertEquals("introduction", result.getIntroduction());
    }
}
