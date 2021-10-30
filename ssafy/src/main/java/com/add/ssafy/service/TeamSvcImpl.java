package com.add.ssafy.service;

import com.add.ssafy.Repository.TeamRepo;
import com.add.ssafy.dto.response.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TeamSvcImpl implements TeamSvcInter{
    @Autowired
    TeamRepo teamRepo;

    @Override
    public BaseResponse getTeamUserList(Long teamPK){


        return BaseResponse.builder().status("200").msg("완료").data(teamRepo.getTeamUserList(teamPK)).build();
    }
}
