package com.project.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor // 모든 필드를 매개변수로 받는 생성자
@NoArgsConstructor //매개변수가 없는 기본 생성자
@Schema(description = "마이페이지 내 정보 Dto")
public class MyInfoResponse {

    private String nickname;
    private String introduction;




}
