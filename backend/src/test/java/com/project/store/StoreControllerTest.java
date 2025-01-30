package com.project.store;

import com.project.store.controller.StoreController;
import com.project.store.entity.FoodCategory;
import com.project.store.entity.Local;
import com.project.store.entity.Store;
import com.project.store.entity.Theme;
import com.project.store.service.StoreService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StoreController.class)
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser(username = "testUser", roles = "USER")
public class StoreControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StoreService storeService;

    @Test
    @DisplayName("GET /api/stores 요청을 보냅니다.")
    void getStores() throws Exception {
        // Given
        Local gangnam = new Local(1, "강남구");
        Local seocho = new Local(2, "서초구");
        FoodCategory korean = new FoodCategory(1, "한식");
        FoodCategory chinese = new FoodCategory(2, "중식");
        Theme soloTheme = new Theme(1, "혼밥하기 좋은");
        Theme dateTheme = new Theme(2, "데이트 코스");

        List<Store> mockStores = Arrays.asList(
            new Store(1, gangnam, korean, dateTheme, "Store A", "Address A", "Detail Address A", "010-1234-5678", "image1.png", new BigDecimal("100.000"), new BigDecimal("200.000"), "Description A", 100),
            new Store(2, gangnam, chinese, soloTheme, "Store B", "Address B", "Detail Address B", "010-8765-4321", "image2.png", new BigDecimal("300.000"), new BigDecimal("400.000"), "Description B", 300),
            new Store(3, seocho, chinese, dateTheme, "Store C", "Address C", "Detail Address C", "010-5678-1234", "image3.png", new BigDecimal("500.000"), new BigDecimal("600.000"), "Description C", 400),
            new Store(4, seocho, korean, soloTheme, "Store D", "Address D", "Detail Address D", "010-4321-8765", "image4.png", new BigDecimal("700.000"), new BigDecimal("800.000"), "Description D", 200)
        );

        Pageable pageable = PageRequest.of(0, 6, Sort.by("views").descending());

        when(storeService.findStores(any(), any(), any(), any(), anyInt()))
                .thenReturn(new PageImpl<>(mockStores, pageable, mockStores.size()));

        // When & Then
        mockMvc.perform(get("/api/stores")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content.length()").value(mockStores.size()))
                .andExpect(jsonPath("$.content[0].id").value(1))
                .andExpect(jsonPath("$.content[0].name").value("Store A"))
                .andExpect(jsonPath("$.content[0].address").value("Address A"))
                .andExpect(jsonPath("$.content[1].id").value(2))
                .andExpect(jsonPath("$.content[1].name").value("Store B"))
                .andExpect(jsonPath("$.content[1].address").value("Address B"))
                .andDo(print());
    }
}
