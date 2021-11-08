package com.add.ssafy.Repository;

import com.add.ssafy.entity.TeamMember;

import java.util.Optional;

public interface TeamMemberRepoCustom {
    TeamMember findByTeamMember(Long teamPK, Long memberPK);

    Optional<TeamMember> findByTeamsltOne(Long teamPK);

    Optional<TeamMember> findByMemberPjtCode(Long memberPK, int projectCode);

    Long countTeamMember(Long teamPK);
}
