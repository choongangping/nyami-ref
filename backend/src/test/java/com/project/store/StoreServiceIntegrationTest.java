package com.project.store;

import com.project.store.entity.FoodCategory;
import com.project.store.entity.Local;
import com.project.store.entity.Store;
import com.project.store.entity.Theme;
import com.project.store.repository.StoreRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@Transactional
@AutoConfigureMockMvc
@ActiveProfiles("test")
class StoreIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private StoreRepository storeRepository;

    @Test
    @DisplayName("가게 ID로 특정 가게를 조회하는 통합 테스트")
    void getStoreById() throws Exception {
        // Given
        Local gangnam = new Local(1, "강남구");
        FoodCategory korean = new FoodCategory(1, "한식");
        Theme soloTheme = new Theme(1, "혼밥하기 좋은");
        Store store = new Store(10, gangnam, korean, soloTheme, "Store A", "Address A", "Detail Address A", "010-1234-5678", "image1.png", new BigDecimal("100.000"), new BigDecimal("200.000"), "Description A", 100);
        storeRepository.save(store);

        // When & Then (API 호출 및 검증)
        mockMvc.perform(get("/api/stores/10"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(10))
                .andExpect(jsonPath("$.local").value("강남구"))
                .andExpect(jsonPath("$.name").value("Store A"));
    }

    @Test
    @DisplayName("존재하지 않는 ID로 가게를 조회하는 통합 테스트")
    void getStoreByNonId() throws Exception {
        // When & Then (API 호출 및 검증)
        mockMvc.perform(get("/api/stores/99999"))
                .andExpect(status().isNotFound());
    }

    @Test
    @DisplayName("잘못된 ID로 가게를 조회하는 통합 테스트")
    void getStoreByWrongId() throws Exception {
        // When & Then (API 호출 및 검증)
        mockMvc.perform(get("/api/stores/0"))
                .andExpect(status().isBadRequest());
    }
}

