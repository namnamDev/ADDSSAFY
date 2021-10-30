package com.add.ssafy.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class TeamMemberRepoImpl implements TeamMemberRepoCustom {
    private final JPAQueryFactory queryFactory;

}