package com.add.ssafy.controller;

import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.service.ManageSvcInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/manage")
public class ManageController {
    @Autowired
    ManageSvcInter manageSvcInter;

    @GetMapping("/students")
    public ResponseEntity<BaseResponse> getStudentsByClass(){

        return ResponseEntity.ok(manageSvcInter.getStudentsByClass());
    }
}
