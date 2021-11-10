package com.add.ssafy.service;

import com.add.ssafy.dto.request.UpdateMemberRequest;
import com.add.ssafy.dto.request.UserRequest;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.entity.Member;

public interface MemberSvcInter {
    Member loginOrSignup(UserRequest userRequest);

    BaseResponse login(UserRequest userRequest);

    BaseResponse getUserDetail(Long userPK);

    BaseResponse updateMember(UpdateMemberRequest updateMemberRequest);

    BaseResponse myPage();

    //유저가 팀에 보냇던 제안들
    BaseResponse userToTeamSuggested(int projectCode, boolean direction);

    BaseResponse suggestedCheck(Long teamPK, boolean direction);
}
