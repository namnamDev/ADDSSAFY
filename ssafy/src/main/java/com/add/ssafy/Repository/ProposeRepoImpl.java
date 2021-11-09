package com.add.ssafy.Repository;

import com.add.ssafy.dto.TeamToUserDto;
import com.add.ssafy.dto.UserToTeamDto;
import com.add.ssafy.entity.Propose;
import com.add.ssafy.entity.QPropose;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class ProposeRepoImpl implements ProposeRepoCustom{
    private final JPAQueryFactory queryFactory;
    @Override
    public Optional<Propose> findPropose(Long teamPK, Long memberPK, boolean direction){

        QPropose qPropose = QPropose.propose;
        BooleanBuilder builder = new BooleanBuilder();
        builder.and(qPropose.direction.eq(direction));
        builder.and(qPropose.team().id.eq(teamPK));
        builder.and(qPropose.member().id.eq(memberPK));
        Propose res = queryFactory.selectFrom(qPropose).where(builder).fetchOne();
        return Optional.ofNullable(res);
    }

    @Override
    public List<UserToTeamDto> userToTeamSuggested(Long memberPK, int projectCode,boolean direction){
        QPropose qPropose = QPropose.propose;

        return queryFactory.select(Projections.constructor(
                UserToTeamDto.class
                , qPropose.id
                , qPropose.team().id
                , qPropose.team().name
                , qPropose.proposeDate
                ))
                .from(qPropose)
                .where(qPropose.member().id.eq(memberPK))
                .where(qPropose.team().type.eq(projectCode))
                .where(qPropose.direction.eq(direction))
                .orderBy(qPropose.proposeDate.desc())
                .fetch();

    }
    //팀이 유저에게 받은 제안
    @Override
    public List<TeamToUserDto> teamToUserSuggested(Long teamPK, boolean direction){
        QPropose qPropose = QPropose.propose;

        return queryFactory.select(Projections.constructor(
                        TeamToUserDto.class
                        , qPropose.id
                        , qPropose.member().id
                        , qPropose.member().name
                        , qPropose.proposeDate
                ))
                .from(qPropose)
                .where(qPropose.team().id.eq(teamPK))
                .where(qPropose.direction.eq(direction))
                .orderBy(qPropose.proposeDate.desc())
                .fetch();
    }
}
