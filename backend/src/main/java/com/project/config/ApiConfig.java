package com.project.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.web.reactive.function.client.WebClient;

/** api 환경 설정 클래스 */
@Configuration
@PropertySource("classpath:config.properties")
public class ApiConfig {
    @Value("${data_seoul_api_key}")
    private String dataSeoulApiKey;

    @Bean
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl("http://openapi.seoul.go.kr:8088/") // 초기 url 지정
                .build();
    }

    @Bean
    public String getApiKey() {
        return dataSeoulApiKey;
    }

    @Bean
    public ObjectMapper customObjectMapper() {
        // 대문자 표기법 데이터를 자바 객체의 카멜 케이스와 매핑
        return Jackson2ObjectMapperBuilder.json()
                .propertyNamingStrategy(PropertyNamingStrategies.UPPER_CAMEL_CASE)
                .build();
    }
}