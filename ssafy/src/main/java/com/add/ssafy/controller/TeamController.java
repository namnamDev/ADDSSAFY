package com.add.ssafy.controller;

import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.service.TeamSvcInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
