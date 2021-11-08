package com.add.ssafy.Repository;

import com.add.ssafy.entity.QMember;
import com.add.ssafy.entity.QTeam;
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
                where(qTeamMember.team().id.eq(teamPK)
                        .and(qTeamMember.member().id.eq(memberPK)))
                .fetchOne();
    }

    @Override
    public Optional<TeamMember> findByTeamsltOne(Long teamPK){
        QTeamMember qTeamMember = QTeamMember.teamMember;
        return Optional.ofNullable(queryFactory.selectFrom(qTeamMember)
                .where(qTeamMember.team().id.eq(teamPK))
                .fetchFirst());
    }

    @Override
    public Optional<TeamMember> findByMemberPjtCode(Long memberPK, int projectCode){
        QTeamMember qTeamMember = QTeamMember.teamMember;
        QTeam qTeam = QTeam.team;
        QMember qMember = QMember.member;
        return Optional.ofNullable(queryFactory.selectFrom(qTeamMember)
                .where(qMember.id.eq(memberPK)
                        .and(qTeam.type.eq(projectCode)))
                .join(qMember).on(qTeamMember.member().eq(qMember))
                .join(qTeam).on(qTeamMember.team().eq(qTeam))
                .fetchOne());

    }

    @Override
    public Long countTeamMember(Long teamPK){
        QTeamMember qTeamMember = QTeamMember.teamMember;
        return queryFactory.selectFrom(qTeamMember)
                .where(qTeamMember.team().id.eq(teamPK))
                .fetchCount();


    }
}