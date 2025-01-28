package com.project.store;

import com.project.store.entity.FoodCategory;
import com.project.store.entity.Local;
import com.project.store.entity.Store;
import com.project.store.entity.Theme;
import com.project.store.service.StoreService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class StoreServiceTest {
    @InjectMocks
    private StoreService storeService;

    private List<Store> mockStores;

    @BeforeEach
    void setUp() {
        // Given
        Local gangnam = new Local(1, "강남구");
        Local seocho = new Local(2, "서초구");
        FoodCategory korean = new FoodCategory(1, "한식");
        FoodCategory chinese = new FoodCategory(2, "중식");
        Theme soloTheme = new Theme(1, "혼밥하기 좋은");
        Theme dateTheme = new Theme(2, "데이트 코스");

        mockStores = Arrays.asList(
            new Store(1, gangnam, korean, dateTheme, "Store A", "Address A", "Detail Address A", "010-1234-5678", "image1.png", new BigDecimal("100.000"), new BigDecimal("200.000"), "Description A", 100),
            new Store(2, gangnam, chinese, soloTheme, "Store B", "Address B", "Detail Address B", "010-8765-4321", "image2.png", new BigDecimal("300.000"), new BigDecimal("400.000"), "Description B", 300),
            new Store(3, seocho, chinese, dateTheme, "Store C", "Address C", "Detail Address C", "010-5678-1234", "image3.png", new BigDecimal("500.000"), new BigDecimal("600.000"), "Description C", 400),
            new Store(4, seocho, korean, soloTheme, "Store D", "Address D", "Detail Address D", "010-4321-8765", "image4.png", new BigDecimal("700.000"), new BigDecimal("800.000"), "Description D", 200)
        );
    }

    // 필터 조건 없음
    @Test
    @DisplayName("모든 가게 목록을 조회합니다.")
    void getStores() {
        // When
        List<Store> stores = storeService.findAll(mockStores, null, null, null, null, 1);

        // Then
        assertNotNull(stores);
        assertEquals(4, stores.size());
        assertEquals("Store C", stores.get(0).getName());
    }

    // 지역 필터 적용
    @Test
    @DisplayName("지역이 \"강남구\"인 가게 목록을 조회합니다.")
    void getStoresByLocal() {
        // When
        List<Store> stores = storeService.findAll(mockStores, "강남구", null, null, null, 1);

        // Then
        assertNotNull(stores);
        assertEquals(2, stores.size());
        assertEquals("강남구", stores.get(0).getLocal().getLocal());
        assertEquals("강남구", stores.get(1).getLocal().getLocal());
    }

    // 지역 + 테마 필터 적용
    @Test
    @DisplayName("지역이 \"강남구\"이고 테마가 \"혼밥하기 좋은\"인 가게 목록을 조회합니다.")
    void getStoresByLocalAndTheme() {
        // When
        List<Store> stores = storeService.findAll(mockStores, "강남구", null, "혼밥하기 좋은", null, 1);

        // Then
        assertNotNull(stores);
        assertEquals(1, stores.size());
        assertEquals("강남구", stores.get(0).getLocal().getLocal());
        assertEquals("혼밥하기 좋은", stores.get(0).getTheme().getTheme());
    }

    // 업종 필터 적용
    @Test
    @DisplayName("업종이 \"한식\"인 가게 목록을 조회합니다.")
    void getStoresByFoodCategory() {
        // When
        List<Store> stores = storeService.findAll(mockStores, null, "한식", null, null, 1);

        // Then
        assertNotNull(stores);
        assertEquals(2, stores.size());
        assertEquals("한식", stores.get(0).getFoodCategory().getFoodCategory());
        assertEquals("한식", stores.get(1).getFoodCategory().getFoodCategory());
    }

    // 필터 조건 미적용 (잘못된 데이터)
    @Test
    @DisplayName("잘못된 데이터를 전달한 경우의 가게 목록을 조회합니다.")
    void getStoresWithWrongData() {
        // When
        List<Store> stores = storeService.findAll(mockStores, "test", "test", "test", "test", 1);

        // Then
        assertNotNull(stores);
        assertTrue(stores.isEmpty());
    }
}
