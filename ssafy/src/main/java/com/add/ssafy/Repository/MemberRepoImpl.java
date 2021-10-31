package com.add.ssafy.Repository;

import com.add.ssafy.entity.Member;
import com.add.ssafy.entity.QMember;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


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

}