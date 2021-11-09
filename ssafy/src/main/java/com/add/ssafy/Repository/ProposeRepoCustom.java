package com.add.ssafy.Repository;

import com.add.ssafy.dto.TeamToUserDto;
import com.add.ssafy.dto.UserToTeamDto;
import com.add.ssafy.entity.Propose;

import java.util.List;
import java.util.Optional;

public interface ProposeRepoCustom {


    Optional<Propose> findPropose(Long teamPK, Long memberPK, boolean direction);

    List<UserToTeamDto> userToTeamSuggested(Long memberPK, int projectCode,boolean direction);

    List<TeamToUserDto> teamToUserSuggested(Long teamPK, boolean direction);
}
