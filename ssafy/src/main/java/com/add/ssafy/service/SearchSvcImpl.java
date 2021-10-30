package com.add.ssafy.service;

import com.add.ssafy.Repository.HashtagRepo;
import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.dto.response.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class SearchSvcImpl implements SearchSvcInter{
    @Autowired
    HashtagRepo hashtagRepo;

    @Override
    public BaseResponse loadHashtag(){
        List<HashTagsDto> tempTags =  hashtagRepo.gethashtags();
        Map<String,Object> res = new HashMap<>();
        for(int i = 0 ; i < tempTags.size();i++){
            HashTagsDto temp = tempTags.get(i);
            res.put(temp.getHashTagProp().toString(), temp.getHashtags());
        }
        return BaseResponse.builder().status("200").msg("성공").data(res).build();
    }
}
