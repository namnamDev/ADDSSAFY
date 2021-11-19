package com.add.ssafy.Repository;

import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.dto.TeamDto;
import com.add.ssafy.entity.TeamHashtag;
import com.querydsl.core.Tuple;

import java.util.List;

public interface TeamHashtagRepoCustom {
    List<HashTagsDto> gethashtags(Long teamPK);

    List<TeamHashtag> getTeamHashtagByTeam(Long teamPK);

    List<TeamDto>searchTeamList(List<Long> can, int projectCode);

    List<Tuple> test(List<Long> can);
}
