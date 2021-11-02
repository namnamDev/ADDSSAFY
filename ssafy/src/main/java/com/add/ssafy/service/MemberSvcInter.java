package com.add.ssafy.service;

import com.add.ssafy.dto.request.UpdateMemberRequest;
import com.add.ssafy.dto.request.UserRequest;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.entity.Member;

public interface MemberSvcInter {
    Member loginOrSignup(UserRequest userRequest);

    BaseResponse login(UserRequest userRequest);

    BaseResponse getUserDetail(Long userPK);

    BaseResponse updateMember(Long userPK, UpdateMemberRequest updateMemberRequest);
}
