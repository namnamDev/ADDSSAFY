package com.add.ssafy.Repository;

import com.add.ssafy.dto.HashTagDto;
import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.entity.QHashTag;
import com.add.ssafy.entity.QMember;
import com.querydsl.core.group.GroupBy;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class HashtagRepoImpl implements HashtagRepoCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<HashTagsDto> gethashtags(){
        QMember qMember = QMember.member;
        QHashTag qHashTag = QHashTag.hashTag;
        List<HashTagsDto> aa = queryFactory
                .from(qHashTag)
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

}