package com.add.ssafy.Repository;

import com.add.ssafy.dto.HashTagDto;
import com.add.ssafy.dto.TeamDto;
import com.add.ssafy.dto.UserDto;
import com.add.ssafy.entity.*;
import com.querydsl.core.group.GroupBy;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.querydsl.core.types.ExpressionUtils.count;

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

    @Override
    public List<TeamDto> getTeamList(int projectCode){
        QTeam qTeam= QTeam.team;
        QTeamMember qTeamMember = QTeamMember.teamMember;
        QTeamHashtag qTeamHashtag = QTeamHashtag.teamHashtag;
        QHashTag qHashTag = QHashTag.hashTag;

        QMember qMember = QMember.member;
        List<TeamDto> res = queryFactory
                .from(qTeam)
                .where(qTeam.type.eq(projectCode))
                .join(qTeamMember).on(qTeam.eq(qTeamMember.team()))
                .join(qMember).on(qTeamMember.member().eq(qMember))
                .leftJoin(qTeamHashtag).on(qTeam.eq(qTeamHashtag.team()))
                .leftJoin(qHashTag).on(qTeamHashtag.hashTag().eq(qHashTag))
                .transform(GroupBy.groupBy(qTeam.id)
                        .list(
                                Projections.constructor(
                                TeamDto.class
                                , qTeam.id
                                , qTeam.name
                                , qTeam.introduce
                                , qTeam.webexLink
                                , qTeam.ppt
                                ,GroupBy.list(Projections.constructor(
                                                UserDto.class
                                                , qMember.id
                                                , qMember.name
                                                , qTeamMember.leader
                                                , qMember.profile
                                        ))
//                                , null
//                                , GroupBy.list(Projections.constructor(HashTagDto.class
//                                        , qHashTag.id
//                                        , qHashTag.name
//                                        , qHashTag.hashtagProps))
                                )
                        )
                );

//        QTeam qTeam= QTeam.team;
//        QTeamMember qTeamMember = QTeamMember.teamMember;
//        QTeamHashtag qTeamHashtag = QTeamHashtag.teamHashtag;
//        QHashTag qHashTag = QHashTag.hashTag;
//        List<TeamDto> res = queryFactory
//                .from(qTeam)
//                .where(qTeam.type.eq(projectCode))
//                .join(qTeamMember).on(qTeam.eq(qTeamMember.team()))
//                .join(qTeamHashtag).on(qTeam.eq(qTeamHashtag.team()))
//                .join(qHashTag).on(qTeamHashtag.hashTag().eq(qHashTag))
//                .select(Projections.constructor(
//                                        TeamDto.class
//                                        , qTeam.id
//                                        , qTeam.name
//                                        , qTeam.introduce
//                                        , qTeam.webexLink
//                                        , qTeam.ppt
//                                        , qTeam.id
//                                        , GroupBy.list(Projections.constructor(HashTagDto.class
//                                                , qHashTag.id
//                                                , qHashTag.name
//                                                , qHashTag.hashtagProps))
//                                )
//                        ).fetch()
//                ;
        return res;
    }
}