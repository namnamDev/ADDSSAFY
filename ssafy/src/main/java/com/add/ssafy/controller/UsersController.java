package com.add.ssafy.controller;

import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.service.MemberSvcInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UsersController {
    @Autowired
    MemberSvcInter memberSvcInter;

    @PostMapping("/signin")
    public BaseResponse login(){
        return null;
    }
}
