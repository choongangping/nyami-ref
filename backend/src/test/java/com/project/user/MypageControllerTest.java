package com.project.user;

import com.project.user.controller.MypageController;
import com.project.user.dto.MyInfoResponse;
import com.project.user.service.MypageService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@ExtendWith(MockitoExtension.class)
class MypageControllerTest {

    @InjectMocks
    private MypageController mypageController;

    @Mock
    private MypageService mypageService;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(mypageController).build();
    }

    @Test
    void getMyinfo_ShouldReturnOk() throws Exception {
        // Given
        MyInfoResponse myInfoResponse = new MyInfoResponse("nickname", "introduction");
        when(mypageService.getProfile(1)).thenReturn(myInfoResponse);

        // When & Then
        mockMvc.perform(get("/myinfo"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nickname").value("nickname"))
                .andExpect(jsonPath("$.introduction").value("introduction"));
    }
}
