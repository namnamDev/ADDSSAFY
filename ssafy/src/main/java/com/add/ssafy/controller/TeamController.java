package com.add.ssafy.controller;

import com.add.ssafy.dto.request.CreateTeamRequest;
import com.add.ssafy.dto.request.TeamUpdateRequest;
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

}
