package com.add.ssafy.Repository;

import com.add.ssafy.entity.Propose;
import com.add.ssafy.entity.QPropose;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

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
}
