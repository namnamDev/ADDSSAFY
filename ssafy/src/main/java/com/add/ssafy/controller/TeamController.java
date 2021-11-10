package com.add.ssafy.controller;

import com.add.ssafy.dto.request.*;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.service.TeamSvcInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/team")
public class TeamController {
    @Autowired
    TeamSvcInter teamSvcInter;

    @GetMapping("/teamuser/{teamPK}")
    public ResponseEntity<BaseResponse> getTeamUserList(@PathVariable(name="teamPK") Long teamPK){
        return ResponseEntity.ok(teamSvcInter.getTeamUserList(teamPK));
    }

    @GetMapping("/{projectCode}")
    public ResponseEntity<BaseResponse> getTeamList(@PathVariable(name="projectCode")int projectCode){
        return ResponseEntity.ok(teamSvcInter.getTeamList(projectCode));
    }
    @PostMapping("/create")
    public ResponseEntity<BaseResponse> insertTeam(@RequestBody CreateTeamRequest createTeamRequest){
        return ResponseEntity.ok(teamSvcInter.insertTeam(createTeamRequest));
    }

    @PutMapping("/update")
    public ResponseEntity<BaseResponse>updateTeam(@RequestBody TeamUpdateRequest teamUpdateRequest){
        return ResponseEntity.ok(teamSvcInter.updateTeam(teamUpdateRequest));
    }
    @GetMapping("/detail/{teamPK}")
    public ResponseEntity<BaseResponse>getTeamDtoByTeamPK(@PathVariable(name="teamPK")Long teamPK){
        return ResponseEntity.ok(teamSvcInter.getTeamDtoByTeamPK(teamPK));
    }
    @GetMapping("/myteam/{projectCode}")
    public ResponseEntity<BaseResponse>ifUserHasTeam(@PathVariable(name="projectCode")int projectCode){
        return ResponseEntity.ok(teamSvcInter.ifUserHasTeam(projectCode));
    }

    @DeleteMapping("/exit")
    public ResponseEntity<BaseResponse>exitTeam(@RequestBody ExitTeamRequest exitTeamRequest){
        return ResponseEntity.ok(teamSvcInter.exitTeam(exitTeamRequest));
    }
    @GetMapping("/info/{teamPK}")
    public ResponseEntity<BaseResponse> teamTag(@PathVariable(name="teamPK")Long teamPK){
        return ResponseEntity.ok(teamSvcInter.teamTag(teamPK));
    }
    @GetMapping("teamButton/{teamPK}/{projectCode}")
    public ResponseEntity<BaseResponse>teamSignin(@PathVariable(name="teamPK")Long teamPK,@PathVariable(name="projectCode")int projectCode){
        return ResponseEntity.ok(teamSvcInter.teamSignin(teamPK,projectCode));
    }
    @GetMapping("userButton/{userPK}/{projectCode}")
    public ResponseEntity<BaseResponse>userSignin(@PathVariable(name="userPK")Long userPK,@PathVariable(name="projectCode")int projectCode){
        return ResponseEntity.ok(teamSvcInter.userSignin(userPK,projectCode));
    }

    @PostMapping("/applyteam")
    public ResponseEntity<BaseResponse>userToTeamSuggest(@RequestBody UserToTeamSuggest userToTeamSuggest){
        return ResponseEntity.ok(teamSvcInter.userToTeamSuggest(userToTeamSuggest));

    }

    @PostMapping("/applyuser")
    public ResponseEntity<BaseResponse>teamToUserSuggest(@RequestBody TeamToUserSuggest teamToUserSuggest){
        return ResponseEntity.ok(teamSvcInter.teamToUserSuggest(teamToUserSuggest));
    }

    //팀이 유저에게 받은 신청
    @GetMapping("/offered/{teamPK}")
    public ResponseEntity<BaseResponse>teamToUserSuggested(@PathVariable(name="teamPK")Long teamPK){
        return ResponseEntity.ok(teamSvcInter.teamToUserSuggested(teamPK,true));
    }

    //팀이 유저에게 보낸 신청
    @GetMapping("/offer/{teamPK}")
    public ResponseEntity<BaseResponse>teamOffered(@PathVariable(name="teamPK")Long teamPK){
        return ResponseEntity.ok(teamSvcInter.teamToUserSuggested(teamPK,false));
    }
    @DeleteMapping("/teamwithdraw")
    public ResponseEntity<BaseResponse>teamwithdraw(@RequestBody ProposeWithdrawRequest proposeWithdrawRequest){
        return ResponseEntity.ok(teamSvcInter.teamwithdraw(proposeWithdrawRequest));
    }
    @DeleteMapping("/userwithdraw")
    public ResponseEntity<BaseResponse>userwithdraw(@RequestBody ProposeWithdrawRequest proposeWithdrawRequest){
        return ResponseEntity.ok(teamSvcInter.userwithdraw(proposeWithdrawRequest));
    }
    @PostMapping("/recruit/team")
    public ResponseEntity<BaseResponse>recruitTeam(@RequestBody RecruitTeamRequest recruitTeamRequest){
        return ResponseEntity.ok(teamSvcInter.teamRecruit(recruitTeamRequest,true));
    }

    @PostMapping("/recruit/user")
    public ResponseEntity<BaseResponse>recruitUser(@RequestBody RecruitTeamRequest recruitTeamRequest){
        return ResponseEntity.ok(teamSvcInter.teamRecruit(recruitTeamRequest,false));
    }

    @PutMapping("/team/delegate")
    public ResponseEntity<BaseResponse>teamDelegate(@RequestBody DelegateRequest delegateRequest){
        return ResponseEntity.ok(teamSvcInter.teamDelegate(delegateRequest));
    }
    @GetMapping("/check/{userPK}/{teamPK}")
    public ResponseEntity<BaseResponse>teamSuggestedCheck(@PathVariable(name="userPK")Long userPK,@PathVariable(name="teamPK")Long teamPK){
        return ResponseEntity.ok(teamSvcInter.suggestedCheck(userPK,teamPK,false));

    }
}
