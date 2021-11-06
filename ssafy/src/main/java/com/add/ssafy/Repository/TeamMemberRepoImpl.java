package com.add.ssafy.Repository;

import com.add.ssafy.entity.QTeamMember;
import com.add.ssafy.entity.TeamMember;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class TeamMemberRepoImpl implements TeamMemberRepoCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public TeamMember findByTeamMember(Long teamPK, Long memberPK){
        QTeamMember qTeamMember = QTeamMember.teamMember;
        return queryFactory.selectFrom(qTeamMember).
                where(qTeamMember.team().id.eq(teamPK).and(qTeamMember.member().id.eq(memberPK)))
                .fetchOne();
    }

    @Override
    public Optional<TeamMember> findByTeamsltOne(Long teamPK){
        QTeamMember qTeamMember = QTeamMember.teamMember;
        return Optional.ofNullable(queryFactory.selectFrom(qTeamMember)
                .where(qTeamMember.team().id.eq(teamPK))
                .fetchFirst());
    }
}