package com.add.ssafy.service;

import com.add.ssafy.Repository.MemberRepo;
import com.add.ssafy.Repository.TeamHashtagRepo;
import com.add.ssafy.Repository.TeamMemberRepo;
import com.add.ssafy.Repository.TeamRepo;
import com.add.ssafy.config.SecurityUtil;
import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.dto.TeamAddTagsDto;
import com.add.ssafy.dto.TeamDto;
import com.add.ssafy.dto.request.CreateTeamRequest;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.entity.Member;
import com.add.ssafy.entity.Team;
import com.add.ssafy.entity.TeamMember;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class TeamSvcImpl implements TeamSvcInter{
    @Autowired
    TeamRepo teamRepo;
    @Autowired
    TeamHashtagRepo teamHashtagRepo;
    @Autowired
    MemberRepo memberRepo;
    @Autowired
    TeamMemberRepo teamMemberRepo;
    @Override
    public BaseResponse getTeamUserList(Long teamPK){


        return BaseResponse.builder().status("200").msg("완료").data(teamRepo.getTeamUserList(teamPK)).build();
    }

    @Override
    public BaseResponse getTeamList(int projectCode){
        List<TeamDto> teamList= teamRepo.getTeamList(projectCode);
        List<TeamAddTagsDto> resTeam = new ArrayList<>();
        for (int i=0;i<teamList.size();i++){
            TeamAddTagsDto tempRes = new TeamAddTagsDto();
            TeamDto tempTeamDto = teamList.get(i);
            List<HashTagsDto> tempTags = teamHashtagRepo.gethashtags(tempTeamDto.getTeamPK());

            Map<String,Object> teamHashtags = new HashMap<>();
            for(int g = 0 ; g < tempTags.size();g++){
                HashTagsDto temp = tempTags.get(g);
                teamHashtags.put(temp.getHashTagProp().toString(), temp.getHashtags());
            }
            tempRes.setTeamDto(tempTeamDto);
            tempRes.setTeamHashTags(teamHashtags);
            resTeam.add(tempRes);
        }
        return BaseResponse.builder().status("200").msg("완료").data(resTeam).build();
    }

    @Override
    public BaseResponse InsertTeam(CreateTeamRequest createTeamRequest){
        String msg ="";
        String status = "";
        try{
        Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
        //팀 있는지 체크
        teamRepo.ifUsrHasTeam(member.getId(), createTeamRequest.getProjectCode()).ifPresent(m -> {throw new IllegalStateException("이미 가입된 팀이 있습니다.");});

        //팀생성

        Team insertTeam = Team.builder()
                .name(createTeamRequest.getName())
                .introduce(createTeamRequest.getIntroduceTeam())
                .webexLink(createTeamRequest.getWebex())
                .type(createTeamRequest.getProjectCode())
                .build();
        Team savedTeam=teamRepo.save(insertTeam);
        teamRepo.flush();
        //팀 멤버등록(리더로 등록)
        TeamMember insertTeamMember = TeamMember.builder().team(savedTeam).member(member).leader(true).build();
        TeamMember savedTeamMember = teamMemberRepo.save(insertTeamMember);
        //모든 팀 제의 제거
        msg= "성공";
        status="200";
        }catch (IllegalStateException e){
            status="500";
            msg = e.getMessage();
            return BaseResponse.builder().status(status).msg(msg).build();
        }
            return BaseResponse.builder().status(status).msg(msg).build();


    }
}
