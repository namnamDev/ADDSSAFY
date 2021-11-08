package com.add.ssafy.Repository;

import com.add.ssafy.dto.TeamDto;
import com.add.ssafy.dto.UserDto;
import com.add.ssafy.entity.Team;
import com.add.ssafy.entity.TeamMember;

import java.util.List;
import java.util.Optional;

public interface TeamRepoCustom {
    List<UserDto> getTeamUserList(Long teamPK);

    List<TeamDto> getTeamList(int projectCode);

    Optional<TeamMember> ifUsrHasTeam(Long memberPK, int projectCode);

    TeamDto getTeamDtoByTeamPK(Long teamPK);

    Team findByMemberPjtCode(Long memberPK, int projectCode);
}
