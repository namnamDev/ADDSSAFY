package com.add.ssafy.Repository;

import com.add.ssafy.dto.TeamForUserDetailDto;
import com.add.ssafy.dto.UserDetailDto;
import com.add.ssafy.dto.UserDto;
import com.add.ssafy.entity.*;
import com.add.ssafy.enums.Authority;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.group.GroupBy;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@RequiredArgsConstructor
@Repository
public class MemberRepoImpl implements MemberRepoCustom{
    private final JPAQueryFactory queryFactory;

    @Override
    public Member findByMmid(String mmid){
        QMember qMember = QMember.member;
        return queryFactory.selectFrom(qMember)
                .where(qMember.mmid.eq(mmid))
                .fetchOne();
    }
    @Override
    public Member findByEmail(String email){
        QMember qMember = QMember.member;
        return queryFactory.selectFrom(qMember)
                .where(qMember.email.eq(email))
                .fetchOne();
    }
    @Override
    public Optional<List<UserDto>> findByClass(String ban){
        QMember qMember = QMember.member;
        QTeam qTeam= QTeam.team;
        QTeamMember qTeamMember = QTeamMember.teamMember;

        return Optional.ofNullable(queryFactory.select(Projections.constructor(
                UserDto.class
                , qMember.id
                , qMember.name
                , qTeamMember.leader
                , qMember.profile
                , qMember.mmid
                ))
                .from(qMember)
                .join(qTeamMember).on(qMember.eq(qTeamMember.member()))
                .join(qTeam).on(qTeamMember.team().eq(qTeam))
                .where(qMember.classNumber.eq(ban))
                .fetch());
    }

    @Override
    public List<Member> findMemberByClass(String ban){
        QMember qMember = QMember.member;
        QTeam qTeam= QTeam.team;
        QTeamMember qTeamMember = QTeamMember.teamMember;

        return queryFactory.selectFrom(qMember)
                .where(qMember.classNumber.eq(ban))
                .fetch();
    }
    @Override
    public List<UserDetailDto> findUserDetailDTOByClass(String ban){
        QMember qMember = QMember.member;
        QTeam qTeam= QTeam.team;
        QTeamMember qTeamMember = QTeamMember.teamMember;
        System.out.println("here? " + ban);
        return  queryFactory.select(
                        Projections.constructor(
                                UserDetailDto.class
                                , qMember.id
                                , qMember.name
                                , qMember.email
                                , qMember.introduce
                                , GroupBy.list(Projections.constructor(
                                        TeamForUserDetailDto.class
                                        , qTeam.id
                                        , qTeam.name
                                        , qTeamMember.leader
                                        , qTeam.type))
                                , qMember.blog
                                , qMember.baekjoonId
                                , qMember.blog
                                , qMember.blog
                                , qMember.mmid

                                , qMember.authority
                                , qMember.region
                                , qMember.classNumber
                                , qMember.userPhone
                                , qMember.address
                                , qMember.studentNumber
                                , qMember.isLeave
                                , qMember.profile
                        )
                )
                .from(qMember)
                .leftJoin(qTeamMember).on(qMember.eq(qTeamMember.member()))
                .leftJoin(qTeam).on(qTeamMember.team().eq(qTeam))
                .where(qMember.classNumber.eq(ban))
                .fetch();
    }

    @Override
    public UserDetailDto findUserDetailDTOById(Long userPK){
        QMember qMember = QMember.member;
        QTeam qTeam= QTeam.team;
        QTeamMember qTeamMember = QTeamMember.teamMember;

        Map<Long, UserDetailDto> transform = queryFactory.from(qMember)
                .leftJoin(qTeamMember).on(qMember.eq(qTeamMember.member()))
                .leftJoin(qTeam).on(qTeamMember.team().eq(qTeam))
                .where(qMember.id.eq(userPK).and(qMember.authority.eq(Authority.ROLE_USER)))
                .transform(GroupBy.groupBy(qMember.id)
                        .as(
                                Projections.constructor(
                                        UserDetailDto.class
                                        , qMember.id
                                        , qMember.name
                                        , qMember.email
                                        , qMember.introduce
                                        , GroupBy.list(Projections.constructor(
                                                TeamForUserDetailDto.class
                                                , qTeam.id
                                                , qTeam.name
                                                , qTeamMember.leader
                                                , qTeam.type))
                                        , qMember.blog
                                        , qMember.baekjoonId
                                        , qMember.blog
                                        , qMember.blog
                                        , qMember.mmid

                                        , qMember.authority
                                        , qMember.region
                                        , qMember.classNumber
                                        , qMember.userPhone
                                        , qMember.address
                                        , qMember.studentNumber
                                        , qMember.isLeave
                                        , qMember.profile
                                )
                        )
                );
        System.out.println(transform);
        return transform.get(userPK);
//                .groupBy(qMember.id)
//                .leftJoin(qTeamMember).on(qMember.eq(qTeamMember.member()))
//                .leftJoin(qTeam).on(qTeamMember.team().eq(qTeam))
//                .where(qMember.id.eq(userPK).and(qMember.authority.eq(Authority.ROLE_USER)))
//                .fetchOne();
    }

//    public long ifUserHasTeam(int projectCode, Long memberPK){
//        QMember qMember = QMember.member;
//        QTeam qTeam= QTeam.team;
//        QTeamMember qTeamMember = QTeamMember.teamMember;
//        return queryFactory.selectFrom(qTeam)
//                .where(qTeam.type.eq(projectCode).and(qMember.id.eq(memberPK)))
//                .join(qTeamMember).on(qTeam.eq(qTeamMember.team()))
//                .join(qMember).on(qTeamMember.member().eq(qMember))
//                .fetchCount();
////                .where(qMember.id.eq(memberPK))
//    }

    @Override
    public List<UserDetailDto> searchUserList(List<Long> can, int projectCode){
        QMember qMember = QMember.member;
        QMemberHashtag qMemberHashtag = QMemberHashtag.memberHashtag;
        QTeam qTeam = QTeam.team;
        QTeamMember qTeamMember = QTeamMember.teamMember;
        BooleanBuilder builder = new BooleanBuilder();
//        builder.and(qTeam.type.eq(projectCode));
        if (can.size()>0){
            builder.and(qMember.id
                    .in(
                            JPAExpressions.select(qMemberHashtag.member().id)
                                    .from(qMemberHashtag)
                                    .where(qMemberHashtag.hashTag().id.in(can))
                                    .groupBy(qMemberHashtag.member())
                                    .having(qMemberHashtag.member().count().eq(Long.valueOf(can.size())))
                                    .fetchAll()
                    )
            );
            System.out.println("no can here");
        }
        List<UserDetailDto> res = queryFactory
                .from(qMember)
                .leftJoin(qTeamMember).on(qMember.eq(qTeamMember.member()))
                .leftJoin(qTeam).on(qTeamMember.team().eq(qTeam))
                .where(builder)
//               .select(
                .transform(GroupBy.groupBy(qMember.id).list(
                       Projections.constructor(
                               UserDetailDto.class
                               , qMember.id
                               , qMember.name
                               , qMember.email
                               , qMember.introduce
                               , GroupBy.list(Projections.constructor(
                                       TeamForUserDetailDto.class
                                       , qTeam.id
                                       , qTeam.name
                                       , qTeamMember.leader
                                       , qTeam.type))
                               , qMember.blog
                               , qMember.baekjoonId
                               , qMember.blog
                               , qMember.blog
                               , qMember.mmid

                               , qMember.authority
                               , qMember.region
                               , qMember.classNumber
                               , qMember.userPhone
                               , qMember.address
                               , qMember.studentNumber
                               , qMember.isLeave
                               , qMember.profile
                       )
                    )
                );
//               .fetch();

        return res;
    }
}