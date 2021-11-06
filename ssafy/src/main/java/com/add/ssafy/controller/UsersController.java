package com.add.ssafy.controller;

import com.add.ssafy.dto.request.UpdateMemberRequest;
import com.add.ssafy.dto.request.UserRequest;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.entity.Member;
import com.add.ssafy.service.MemberSvcInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UsersController {
    @Autowired
    MemberSvcInter memberSvcInter;

//    @PostMapping("/login")
//    public ResponseEntity login(@RequestBody UserRequest userRequest){
//        return ResponseEntity.ok(memberSvcInter.login(userRequest));
//    }
    @PostMapping("/login")
    public ResponseEntity login(UserRequest userRequest){
        return ResponseEntity.ok(memberSvcInter.login(userRequest));
    }

    @GetMapping("/detail/{userPK}")
    public ResponseEntity getUserDetail(@PathVariable(name="userPK")Long userPK ){
        return ResponseEntity.ok(memberSvcInter.getUserDetail(userPK));
    }
    @PutMapping("/update")
    public ResponseEntity updateUser(@RequestBody UpdateMemberRequest updateMemberRequest){
        return ResponseEntity.ok(memberSvcInter.updateMember(updateMemberRequest));
    }
    @GetMapping("mypage")
    public ResponseEntity myPage() {
        return ResponseEntity.ok(memberSvcInter.myPage());
    }
}