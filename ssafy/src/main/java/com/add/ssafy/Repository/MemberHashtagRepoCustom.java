package com.add.ssafy.Repository;

import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.entity.MemberHashtag;

import java.util.List;

public interface MemberHashtagRepoCustom {
    List<HashTagsDto> gethashtags(Long memberPK);

    List<MemberHashtag> getHashtagEntity(Long memberPK);
}
