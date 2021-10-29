package com.add.ssafy.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class BadgeRepoImpl implements BadgeRepoCustom{
    private final JPAQueryFactory queryFactory;

}