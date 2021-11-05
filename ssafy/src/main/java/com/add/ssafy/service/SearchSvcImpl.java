package com.add.ssafy.service;

import com.add.ssafy.Repository.HashtagRepo;
import com.add.ssafy.Repository.TeamHashtagRepo;
import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.dto.TeamAddTagsDto;
import com.add.ssafy.dto.TeamDto;
import com.add.ssafy.dto.request.SearchTeamRequest;
import com.add.ssafy.dto.response.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class SearchSvcImpl implements SearchSvcInter{
    @Autowired
    HashtagRepo hashtagRepo;
    @Autowired
    TeamHashtagRepo teamHashtagRepo;
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
    @Override
    public BaseResponse searchTeam(SearchTeamRequest searchTeamRequest){
        int projectCode = searchTeamRequest.getProjectCode();
        List<Long>can = searchTeamRequest.getCan();

        List<TeamDto>teamList = teamHashtagRepo.searchTeamList(can,projectCode);
        List<TeamAddTagsDto> resTeam = new ArrayList<>();
        for (int i=0;i<teamList.size();i++){
            TeamAddTagsDto tempRes = new TeamAddTagsDto();
            TeamDto tempTeamDto = teamList.get(i);
            List<HashTagsDto> tempTags = teamHashtagRepo.gethashtags(tempTeamDto.getTeamPK());

            Map<String,Object> teamHashtags = new HashMap<>();
            for(int g = 0 ; g < tempTags.size();g++){
                HashTagsDto temp = tempTags.get(g);
                teamHashtags.put(temp.getHashTagProp().toString(), temp.getHashtags());
            }
            tempRes.setTeamDto(tempTeamDto);
            tempRes.setTeamHashTags(teamHashtags);
            resTeam.add(tempRes);
        }
        return BaseResponse.builder().status("200").msg("완료").data(resTeam).build();

    }
}
