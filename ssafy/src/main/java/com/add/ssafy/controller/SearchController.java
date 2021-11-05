package com.add.ssafy.controller;

import com.add.ssafy.dto.request.SearchTeamRequest;
import com.add.ssafy.dto.request.SearchUserRequest;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.service.SearchSvcInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
public class SearchController {
    @Autowired
    SearchSvcInter searchSvcInter;
    @GetMapping("/hashtag")
    public ResponseEntity<BaseResponse> getfilterHashtag(){

        return ResponseEntity.ok(searchSvcInter.loadHashtag());
    }

    @PostMapping("/team")
    public ResponseEntity<BaseResponse> searchTeam(@RequestBody SearchTeamRequest searchTeamRequest){

        return ResponseEntity.ok(searchSvcInter.searchTeam(searchTeamRequest));
    }
    @PostMapping("/user")
    public ResponseEntity<BaseResponse> searchUser(@RequestBody SearchUserRequest searchUserRequest){

        return ResponseEntity.ok(searchSvcInter.searchUser(searchUserRequest));
    }

}
