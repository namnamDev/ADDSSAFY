package com.add.ssafy.Repository;

import com.add.ssafy.dto.TeamDto;
import com.add.ssafy.dto.UserDto;

import java.util.List;

public interface TeamRepoCustom {
    List<UserDto> getTeamUserList(Long teamPK);

    List<TeamDto> getTeamList(int projectCode);
}
