package com.add.ssafy.Repository;

import com.add.ssafy.dto.UserDetailDto;
import com.add.ssafy.dto.UserDto;
import com.add.ssafy.entity.Member;
import com.add.ssafy.entity.QMember;
import com.add.ssafy.entity.QTeam;
import com.add.ssafy.entity.QTeamMember;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
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
                                , qTeam.isNotNull()
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

        return  queryFactory.select(
                        Projections.constructor(
                                UserDetailDto.class
                                , qMember.id
                                , qMember.name
                                , qMember.email
                                , qMember.introduce
                                , qTeam.isNotNull()
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
                        )
                )
                .from(qMember)
                .leftJoin(qTeamMember).on(qMember.eq(qTeamMember.member()))
                .leftJoin(qTeam).on(qTeamMember.team().eq(qTeam))
                .where(qMember.id.eq(userPK))
                .fetchOne();
    }
}