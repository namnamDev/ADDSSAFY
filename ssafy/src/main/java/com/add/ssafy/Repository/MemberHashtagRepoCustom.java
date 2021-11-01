package com.add.ssafy.Repository;

import com.add.ssafy.dto.HashTagsDto;

import java.util.List;

public interface MemberHashtagRepoCustom {
    List<HashTagsDto> gethashtags(Long memberPK);
}
