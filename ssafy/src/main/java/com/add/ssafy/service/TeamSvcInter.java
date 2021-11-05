package com.add.ssafy.service;

import com.add.ssafy.dto.request.CreateTeamRequest;
import com.add.ssafy.dto.request.ExitTeamRequest;
import com.add.ssafy.dto.request.TeamUpdateRequest;
import com.add.ssafy.dto.response.BaseResponse;

public interface TeamSvcInter {
    BaseResponse getTeamUserList(Long teamPK);

    BaseResponse getTeamList(int projectCode);

    BaseResponse insertTeam(CreateTeamRequest createTeamRequest);

    BaseResponse updateTeam(TeamUpdateRequest teamUpdateRequest);

    BaseResponse getTeamDtoByTeamPK(Long teamPK);

    BaseResponse ifUserHasTeam(int projectCode);

    BaseResponse exitTeam(ExitTeamRequest exitTeamRequest);

    BaseResponse teamTag(Long teamPK);
}
