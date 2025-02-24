package com.project.user.service;

import com.project.user.dto.MyInfoResponse;
import com.project.user.entity.Users;
import com.project.user.repository.MypageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MypageService {

    private final MypageRepository mypageRepository;


    public MyInfoResponse getProfile(int userId) {

        //엔티티 받아오기(DB에서)
        Users users = mypageRepository.getProfile(1);
        MyInfoResponse myInfoResponse = new MyInfoResponse( users.getNickname(), users.getIntroduction());

        return myInfoResponse;
        //엔티티를 dto로 변환

    }


}
