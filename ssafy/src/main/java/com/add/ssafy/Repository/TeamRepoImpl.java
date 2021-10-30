package com.add.ssafy.Repository;

import com.add.ssafy.dto.UserDto;
import com.add.ssafy.entity.QMember;
import com.add.ssafy.entity.QTeam;
import com.add.ssafy.entity.QTeamMember;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class TeamRepoImpl implements TeamRepoCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<UserDto> getTeamUserList(Long teamPK){
        QTeam qTeam= QTeam.team;
        QMember qMember = QMember.member;
        QTeamMember qTeamMember = QTeamMember.teamMember;
        List<UserDto> res = queryFactory.select(
                Projections.constructor(
                        UserDto.class
                        , qMember.id
                        , qMember.name
                        , qTeamMember.leader
                        , qMember.profile
                )).from(qTeamMember)
                .where(qTeam.id.eq(teamPK))
                .join(qTeam).on(qTeamMember.team().eq(qTeam))
                .join(qMember).on(qTeamMember.member().eq(qMember))
                .fetch();
        return res;
    }
}