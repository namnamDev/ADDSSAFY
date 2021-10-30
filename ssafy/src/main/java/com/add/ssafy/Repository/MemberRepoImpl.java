package com.add.ssafy.Repository;

import com.add.ssafy.entity.Member;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class MemberRepoImpl implements MemberRepoCustom{
    private final JPAQueryFactory queryFactory;

}