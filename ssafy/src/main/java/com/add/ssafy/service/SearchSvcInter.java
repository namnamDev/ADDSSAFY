package com.add.ssafy.service;

import com.add.ssafy.dto.request.SearchTeamRequest;
import com.add.ssafy.dto.response.BaseResponse;

public interface SearchSvcInter {
    BaseResponse loadHashtag();

    BaseResponse searchTeam(SearchTeamRequest searchTeamRequest);
}
