package com.project.store;

import com.project.store.mapper.StoreMapper;
import com.project.store.controller.StoreController;
import com.project.store.dto.StoreResponse;
import com.project.store.dto.StoreSearchRequest;
import com.project.store.entity.FoodCategory;
import com.project.store.entity.Local;
import com.project.store.entity.Store;
import com.project.store.entity.Theme;
import com.project.store.service.StoreService;
import org.junit.jupiter.api.BeforeEach;
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
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(StoreController.class)
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser(username = "testUser", roles = "USER")
@ActiveProfiles("test")
public class StoreControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StoreService storeService;

    @Autowired
    private WebApplicationContext context;

    @BeforeEach
    void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context) // WebApplicationContext 사용
                .apply(springSecurity()) // Spring Security 적용
                .addFilter(new CharacterEncodingFilter("UTF-8", true)) // UTF-8 설정
                .alwaysDo(print()) // 요청/응답 로그 출력
                .build();
    }

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

        List<StoreResponse> responses = StoreMapper.STORE_MAPPER.toDto(mockStores);

        Pageable pageable = PageRequest.of(0, 6, Sort.by("views").descending());

        when(storeService.findStores(any(StoreSearchRequest.class)))
                .thenReturn(new PageImpl<>(responses, pageable, mockStores.size()));

        // When & Then
        mockMvc.perform(get("/api/stores")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isArray())
                .andExpect(jsonPath("$.content.length()").value(mockStores.size()))
                .andExpect(jsonPath("$.content[0].name").value(mockStores.get(0).getName()))
                .andExpect(jsonPath("$.content[0].address").value(mockStores.get(0).getAddress()))
                .andExpect(jsonPath("$.content[1].name").value(mockStores.get(1).getName()))
                .andExpect(jsonPath("$.content[1].address").value(mockStores.get(1).getAddress()))
                .andDo(print());
    }

    @Test
    @DisplayName("GET /api/stores?local=강남구 요청을 보냅니다.")
    void getStoresByLocal() throws Exception {
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

        List<Store> filteredStores = mockStores.stream()
                .filter(store -> store.getLocal().getLocal().equals("서초구"))
                .toList();

        List<StoreResponse> responses = StoreMapper.STORE_MAPPER.toDto(filteredStores);

        Pageable pageable = PageRequest.of(0, 6, Sort.by("views").descending());

        when(storeService.findStores(argThat(request -> "서초구".equals(request.getLocal()))))
                .thenReturn(new PageImpl<>(responses, pageable, mockStores.size()));

        // When & Then
        mockMvc.perform(get("/api/stores")
                .contentType(MediaType.APPLICATION_JSON)
                .param("local", "서초구"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isArray())
                .andExpect(jsonPath("$.content.length()").value(filteredStores.size()))
                .andExpect(jsonPath("$.content[0].local").value("서초구"))
                .andExpect(jsonPath("$.content[1].local").value("서초구"))
                .andDo(print());
    }

    @Test
    @DisplayName("GET /api/stores에 음수의 페이지를 요청하면 400 상태 코드를 반환합니다.")
    void getStoresWithWrongParam() throws Exception {
        mockMvc.perform(get("/api/stores")
                .param("page", "-1")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isBadRequest());
    }
}
