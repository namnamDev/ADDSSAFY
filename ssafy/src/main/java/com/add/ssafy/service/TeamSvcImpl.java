package com.add.ssafy.service;

import com.add.ssafy.Repository.*;
import com.add.ssafy.config.SecurityUtil;
import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.dto.TeamAddTagsDto;
import com.add.ssafy.dto.TeamDto;
import com.add.ssafy.dto.request.*;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

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
    @Autowired
    HashtagRepo hashtagRepo;
    @Autowired
    ProposeRepo proposeRepo;
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
    public BaseResponse insertTeam(CreateTeamRequest createTeamRequest){
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
                .mmChannel(createTeamRequest.getMmChannel())
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

    @Override
    public BaseResponse updateTeam(TeamUpdateRequest teamUpdateRequest){
        String msg = "";
        Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
        Team team = teamRepo.findById(teamUpdateRequest.getTeamPK()).orElseThrow(()->new IllegalStateException("해당 팀이 존재하지 않습니다."));
        team.setIntroduce(teamUpdateRequest.getIntroduceTeam());
        team.setWebexLink(teamUpdateRequest.getWebex());
        teamRepo.save(team);
//        Team tempTeam = Team.builder().introduce(teamUpdateRequest.getIntroduceTeam())
//                .webexLink(teamUpdateRequest.getWebex())
//                .build();
//        teamRepo.save(tempTeam);
        List<Long>want = teamUpdateRequest.getWant();
        List<TeamHashtag>beforeUpdate = teamHashtagRepo.getTeamHashtagByTeam(team.getId());

        for(int i = 0; i < beforeUpdate.size();i++){
            teamHashtagRepo.delete(beforeUpdate.get(i));
        }

        for(int i =0;i< want.size();i++){
            Optional<HashTag> hashTag= hashtagRepo.findById(want.get(i));
            teamHashtagRepo.save(TeamHashtag.builder().team(team).hashTag(hashTag.get()).build());
        }
        return BaseResponse.builder().status("200").msg("성공").data(true).build();
    }

    @Override
    public BaseResponse getTeamDtoByTeamPK(Long teamPK){
        return BaseResponse.builder().status("200").msg("성공").data(teamRepo.getTeamDtoByTeamPK(teamPK)).build();
    }
    @Override
    public BaseResponse ifUserHasTeam(int projectCode){
        Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
        Long ifUserHasTeam = 0L;
        Optional<TeamMember> teamMember = teamRepo.ifUsrHasTeam(member.getId(),projectCode);
        if (teamMember.isPresent()){
            ifUserHasTeam = teamMember.get().getTeam().getId();
        }
        return BaseResponse.builder().status("200").msg("성공").data(ifUserHasTeam).build();
    }

    @Override
    public BaseResponse exitTeam(ExitTeamRequest exitTeamRequest){
        Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
        Long teamPK = exitTeamRequest.getTeamPK();
        TeamMember teamMember = teamMemberRepo.findByTeamMember(teamPK,member.getId());
//        teamMemberRepo.delete(teamMember);
        teamMemberRepo.deleteById(teamMember.getId());
//        teamMemberRepo.delete
        teamMemberRepo.flush();
        String msg = "";
        if (teamMember.getLeader()){
            Optional<TeamMember> tempTeamMember = teamMemberRepo.findByTeamsltOne(teamPK);
            if (tempTeamMember.isPresent()) {
                TeamMember tt = tempTeamMember.get();
                tt.setLeader(true);
                teamMemberRepo.save(tt);
                msg = "팀장이" + tt.getMember().getId() + "로 변경되었습니다.";
            }else{
                System.out.println(teamPK+"22222222222222222222");
//                Optional<Team> tempTeam = teamRepo.findById(teamPK);
                Team tempTeam = teamRepo.findByTeamPK(teamPK);
                System.out.println(tempTeam);
                System.out.println(tempTeam);
//                Team tts = tempTeam;
                teamRepo.delete(tempTeam);
                msg = "남은 조원이 없어 팀이 삭제되었습니다.";
            }
        }

        return BaseResponse.builder().status("200").msg(msg).data(true).build();
    }
    @Override
    public BaseResponse teamTag(Long teamPK){
        Team team = teamRepo.findById(teamPK).orElseThrow(() -> new IllegalStateException("팀이 존재하지 않습니다."));
        List<HashTagsDto> can = teamHashtagRepo.gethashtags(teamPK);

        Map<String,Object> teamHashtags = new HashMap<>();
        for(int g = 0 ; g < can.size();g++){
            HashTagsDto temp = can.get(g);
            teamHashtags.put(temp.getHashTagProp().toString(), temp.getHashtags());
        }
        return BaseResponse.builder().msg("성공").status("200").data(teamHashtags).build();
    }

    @Override
    public BaseResponse teamSignin(Long teamPK, int projectCode){
        Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
        //내가 팀이 있는경우 팀이 자리가 꽉찬경우 (노버튼)
        Long countTeamMember = teamMemberRepo.countTeamMember(teamPK);
        Optional<TeamMember> ifUserhaveTeam = teamMemberRepo.findByMemberPjtCode(member.getId(),projectCode);
        if(countTeamMember >= 5L || ifUserhaveTeam.isPresent()){
            return BaseResponse.builder().msg("유저가 팀이 있거나 팀의 자리가 꽉찼습니다").data(0).status("200").build();
        }

        //해당 팀으로 유저가 가입제안 한경우 (가입 철회버튼)
        Optional<Propose> ifUserSuggest = proposeRepo.findPropose(teamPK, member.getId(), true);
        if(ifUserSuggest.isPresent()){
            return BaseResponse.builder().msg("팀이 유저에게 제안을 하였습니다.").data(1).build();
        }

        //해당 팀에서 유저에게 이미 가입 제안 한 경우 (제안받기버튼)
        Optional<Propose> ifTeamSuggest = proposeRepo.findPropose(teamPK, member.getId(), false);
        if(ifTeamSuggest.isPresent()){
            return BaseResponse.builder().msg("유저가 팀에 가입신청했습니다.").data(2).status("200").build();
        }


        return BaseResponse.builder().msg("가입신청 가능함").data(3).status("200").build();
    }
    @Override
    public BaseResponse userSignin(Long userPK, int projectCode){
        Member teamOfMember = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
        Team team = teamRepo.findByMemberPjtCode(teamOfMember.getId(),projectCode);//로그인한 유저의 팀 찾기
        Long teamPK = team.getId();
        Member toUser = memberRepo.findById(userPK).orElseThrow(() -> new IllegalStateException("해당 유저 유저정보가 없습니다"));
        //팀에 자리가 없는경우, 유저가 팀이 있는 경우
        Long countTeamMember = teamMemberRepo.countTeamMember(teamPK);
        Optional<TeamMember> ifUserhaveTeam = teamMemberRepo.findByMemberPjtCode(userPK,projectCode);
        if(countTeamMember >= 5L || ifUserhaveTeam.isPresent()){
            return BaseResponse.builder().msg("유저가 팀이 있거나 팀의 자리가 꽉찼습니다").data(0).status("200").build();
        }
        //팀이 유저에게 이미 제안 한경우 ( 철회버튼)
        Optional<Propose> ifUserSuggest = proposeRepo.findPropose(teamPK, userPK, true);
        if(ifUserSuggest.isPresent()){
            return BaseResponse.builder().msg("팀이 유저에게 제안을 하였습니다.").data(1).build();
        }
        //유저가 팀에 가입신청 한경우(신청받기 버튼)
        Optional<Propose> ifTeamSuggest = proposeRepo.findPropose(teamPK, userPK, false);
        if(ifTeamSuggest.isPresent()){
            return BaseResponse.builder().msg("유저가 팀에 가입신청했습니다.").data(2).status("200").build();
        }
        //제안하기
        return BaseResponse.builder().msg("가입신청 가능함").data(3).status("200").build();
    }
    //유저가 팀에 가입신청하기
    @Override
    public BaseResponse userToTeamSuggest(UserToTeamSuggest userToTeamSuggest){
        Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
        Team team = teamRepo.findById(userToTeamSuggest.getTeamPK()).orElseThrow(()->new IllegalStateException("팀이 존재하지않습니다."));
        Long teamPK = team.getId();
        int projectCode = team.getType();
        Long userPK = member.getId();

        BaseResponse baseResponse = teamSignin(teamPK,projectCode);
        if (baseResponse.getData().equals(3)){
            proposeRepo.save(Propose.builder().team(team).member(member).msg(userToTeamSuggest.getMsg()).direction(true).build());
            return BaseResponse.builder().msg("가입신청 완료").status("200").data(true).build();
        }else{
            return baseResponse;
        }
    }
    @Override
    public BaseResponse teamToUserSuggest(TeamToUserSuggest teamToUserSuggest){
        Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
        Team team = teamRepo.findById(teamToUserSuggest.getTeamPK()).orElseThrow(()->new IllegalStateException("팀이 존재하지않습니다."));
        Long teamPK = team.getId();
        int projectCode = team.getType();

        BaseResponse baseResponse = userSignin(teamToUserSuggest.getUserPK(),projectCode);
        if (baseResponse.getData().equals(3)){
            proposeRepo.save(Propose.builder().team(team).member(member).msg(teamToUserSuggest.getMsg()).direction(false).build());
            return BaseResponse.builder().msg("영입제안 완료").status("200").data(true).build();
        }else{
            return baseResponse;
        }
    }
}
