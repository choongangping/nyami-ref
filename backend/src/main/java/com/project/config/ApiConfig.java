package com.project.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
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
}