package com.project.user.controller;

import com.project.user.dto.MyInfoResponse;
import com.project.user.service.MypageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
public class MypageController {

    private final MypageService mypageService;

    @RequestMapping("/myinfo")
    public ResponseEntity<MyInfoResponse> getMyinfo() {
        // jwt 토큰 적용 후, CustomUserDetail 추가하여 수정 예정(임시 userId=1)
        int userId = 1;

        MyInfoResponse myProfile = mypageService.getProfile(1);

        return ResponseEntity.ok(myProfile);
    }
}
