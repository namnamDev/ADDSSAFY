package com.add.ssafy.service;

import com.add.ssafy.dto.request.CreateTeamRequest;
import com.add.ssafy.dto.response.BaseResponse;

public interface TeamSvcInter {
    BaseResponse getTeamUserList(Long teamPK);

    BaseResponse getTeamList(int projectCode);

    BaseResponse InsertTeam(CreateTeamRequest createTeamRequest);
}
