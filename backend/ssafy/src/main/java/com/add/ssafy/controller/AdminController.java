package com.add.ssafy.controller;

import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.service.AdminSvcInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Map;

//초기데이터 입력용
@RestController
@RequestMapping("/api/Admin")
public class AdminController {
    @Autowired
    AdminSvcInter adminSvc;
    @PostMapping
    public BaseResponse firstData(){
        return adminSvc.totalData();

    }
}
