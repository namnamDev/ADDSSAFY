package com.add.ssafy.Repository;

import com.add.ssafy.dto.HashTagDto;
import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.entity.*;
import com.querydsl.core.group.GroupBy;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class MemberHashtagRepoImpl implements MemberHashtagRepoCustom {
    private final JPAQueryFactory queryFactory;
    @Override
    public List<HashTagsDto> gethashtags(Long memberPK){
        QMember qMember = QMember.member;
        QHashTag qHashTag = QHashTag.hashTag;
        QMemberHashtag qMemberHashtag = QMemberHashtag.memberHashtag;
        List<HashTagsDto> aa = queryFactory
                .from(qMemberHashtag)
                .where(qMemberHashtag.member().id.eq(memberPK))
                .join(qHashTag).on(qMemberHashtag.hashTag().eq(qHashTag))
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
    public List<MemberHashtag> getHashtagEntity(Long memberPK){
        QMember qMember = QMember.member;
        QHashTag qHashTag = QHashTag.hashTag;
        QMemberHashtag qMemberHashtag = QMemberHashtag.memberHashtag;
        return queryFactory.selectFrom(qMemberHashtag)
                .where(qMemberHashtag.member().id.eq(memberPK))
                .fetch();

    }

//
//    public void deleteByMemberId(Long memberPK){
//        QHashTag qHashTag = QHashTag.hashTag;
//        QMemberHashtag qMemberHashtag = QMemberHashtag.memberHashtag;
//        queryFactory.delete(qMemberHashtag).where(qMemberHashtag.member().id.eq(memberPK)).
//    }
}