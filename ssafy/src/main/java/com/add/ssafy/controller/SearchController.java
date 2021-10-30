package com.add.ssafy.controller;

import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.service.SearchSvcInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/search")
public class SearchController {
    @Autowired
    SearchSvcInter searchSvcInter;
    @GetMapping("/hashtag")
    public ResponseEntity<BaseResponse> getfilterHashtag(){

        return ResponseEntity.ok(searchSvcInter.loadHashtag());
    }
}
