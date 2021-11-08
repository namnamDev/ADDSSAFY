package com.add.ssafy.Repository;

import com.add.ssafy.dto.HashTagDto;
import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.dto.TeamDto;
import com.add.ssafy.dto.UserDto;
import com.add.ssafy.entity.*;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.Tuple;
import com.querydsl.core.group.GroupBy;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class TeamHashtagRepoImpl implements TeamHashtagRepoCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<HashTagsDto> gethashtags(Long teamPK){
        QMember qMember = QMember.member;
        QHashTag qHashTag = QHashTag.hashTag;
        QTeamHashtag qTeamHashtag =QTeamHashtag.teamHashtag;
        List<HashTagsDto> aa = queryFactory
                .from(qTeamHashtag)
                .where(qTeamHashtag.team().id.eq(teamPK))
                .join(qHashTag).on(qTeamHashtag.hashTag().eq(qHashTag))
                .transform(GroupBy.groupBy(qHashTag.hashtagProps)
                        .list(Projections.constructor(HashTagsDto.class
                                        , qHashTag.hashtagProps
                                        , GroupBy.list(Projections.constructor(HashTagDto.class
                                                , qHashTag.id
                                                , qHashTag.name
                                                , qHashTag.hashtagProps)
                                        )
                                )
                        )
                );
        return aa;
    }
    @Override
    public List<TeamHashtag> getTeamHashtagByTeam(Long teamPK){
        QTeam qTeam = QTeam.team;
        QTeamHashtag qTeamHashtag = QTeamHashtag.teamHashtag;
        return queryFactory
                .selectFrom(qTeamHashtag)
                .where(qTeam.id.eq(teamPK))
                .join(qTeam).on(qTeamHashtag.team().eq(qTeam))
                .fetch();
    }
    @Override
    public List<TeamDto>searchTeamList(List<Long> can, int projectCode){
        QTeam qTeam= QTeam.team;
        QTeamMember qTeamMember = QTeamMember.teamMember;
        QTeamHashtag qTeamHashtag = QTeamHashtag.teamHashtag;
        QHashTag qHashTag = QHashTag.hashTag;

        QMember qMember = QMember.member;

        BooleanBuilder builder = new BooleanBuilder();
        builder.and(qTeam.type.eq(projectCode));
        System.out.println(can);
        if (can.size()>0){
            builder.and(qTeam.id
                    .in(
                            JPAExpressions.select(qTeamHashtag.team().id)
                                    .from(qTeamHashtag)
                                    .where(qTeamHashtag.hashTag().id.in(can))
                                    .groupBy(qTeamHashtag.team())
                                    .having(qTeamHashtag.team().count().eq(Long.valueOf(can.size())))
                                    .fetchAll()
                    ));
        }

        System.out.println(can);
        System.out.println(can.size());
        List<TeamDto> res = queryFactory
                .from(qTeam)
                .where(builder)
//                .where(qTeam.type.eq(projectCode))
//                .where(qTeam.id
//                        .in(
//                                JPAExpressions.select(qTeamHashtag.team().id)
//                                    .from(qTeamHashtag)
//                                    .where(qTeamHashtag.hashTag().id.in(can))
//                                    .groupBy(qTeamHashtag.team())
//                                    .having(qTeamHashtag.team().count().eq(Long.valueOf(can.size())))
//                                        .fetchAll()
//                            )
//                        )
                .join(qTeamMember).on(qTeam.eq(qTeamMember.team()))
                .join(qMember).on(qTeamMember.member().eq(qMember))
                .innerJoin(qTeamHashtag).on(qTeam.eq(qTeamHashtag.team()))
                .innerJoin(qHashTag).on(qTeamHashtag.hashTag().eq(qHashTag))
                .transform(GroupBy.groupBy(qTeam.id)
                        .list(
                                Projections.constructor(
                                        TeamDto.class
                                        , qTeam.id
                                        , qTeam.name
                                        , qTeam.introduce
                                        , qTeam.webexLink
                                        , qTeam.ppt
                                        , qTeam.mmChannel
                                        ,GroupBy.list(Projections.constructor(
                                                UserDto.class
                                                , qMember.id
                                                , qMember.name
                                                , qTeamMember.leader
                                                , qMember.profile
                                                , qMember.mmid
                                        ))
                                )
                        )
                );
        return res;
//        QTeam qTeam= QTeam.team;
//        QTeamMember qTeamMember = QTeamMember.teamMember;
//        QTeamHashtag qTeamHashtag = QTeamHashtag.teamHashtag;
//        QHashTag qHashTag = QHashTag.hashTag;
//
//        QMember qMember = QMember.member;
//
//        BooleanBuilder builder = new BooleanBuilder();
//        BooleanBuilder builderHashs = new BooleanBuilder();
//        for(int i =0;i<can.size();i++){
//            Long temp = can.get(i);
//            builderHashs.or(qTeamHashtag.hashTag().id.eq(temp));
//        }
//        builder.and(qTeam.type.eq(projectCode));
//        builder.and(builderHashs);
//        List<TeamDto> res = queryFactory
//                .from(qTeam)
//                .where(builder).in(
//                        ExpressionUtils
//                                .as(JPAExpressions
//                                        .selectFrom(qTeamHashtag)
//                                        .where(qTeamHashtag.team().id)
//                                        .in((TeamHashtag) can)))
//                .join(qTeamMember).on(qTeam.eq(qTeamMember.team()))
//                .join(qMember).on(qTeamMember.member().eq(qMember))
//                .innerJoin(qTeamHashtag).on(qTeam.eq(qTeamHashtag.team()))
//                .innerJoin(qHashTag).on(qTeamHashtag.hashTag().eq(qHashTag))
//                .transform(GroupBy.groupBy(qTeam.id)
//                        .list(
//                                Projections.constructor(
//                                        TeamDto.class
//                                        , qTeam.id
//                                        , qTeam.name
//                                        , qTeam.introduce
//                                        , qTeam.webexLink
//                                        , qTeam.ppt
//                                        , qTeam.mmChannel
//                                        ,GroupBy.list(Projections.constructor(
//                                                UserDto.class
//                                                , qMember.id
//                                                , qMember.name
//                                                , qTeamMember.leader
//                                                , qMember.profile
//                                                , qMember.mmid
//                                        ))
//                                )
//                        )
//                );
//        return res;
//        return null;
    }

    @Override
    public List<Tuple> test(List<Long> can){
        QTeam qTeam = QTeam.team;
        QTeamHashtag qTeamHashtag = QTeamHashtag.teamHashtag;

       List<Tuple> aa = queryFactory.select(qTeamHashtag.team().id, qTeamHashtag.team().count())
               .from(qTeamHashtag)
               .where(qTeamHashtag.hashTag().id.in(can))
               .groupBy(qTeamHashtag.team())
               .fetch();
       System.out.println(aa);

        return aa;

//                .having(qTeamHashtag.count())

    }
}