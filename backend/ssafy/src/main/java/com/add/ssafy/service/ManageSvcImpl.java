package com.add.ssafy.service;

import com.add.ssafy.Repository.MemberHashtagRepo;
import com.add.ssafy.Repository.MemberRepo;
import com.add.ssafy.config.SecurityUtil;
import com.add.ssafy.dto.HashTagsDto;
import com.add.ssafy.dto.MemberAddTagsDto;
import com.add.ssafy.dto.UserDetailDto;
import com.add.ssafy.dto.UserDto;
import com.add.ssafy.dto.response.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.add.ssafy.entity.Member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class ManageSvcImpl implements ManageSvcInter{
    @Autowired
    MemberRepo memberRepo;
    @Autowired
    MemberHashtagRepo memberHashtagRepo;
    static final int PORJECTCODE = 0;
    @Override
    public BaseResponse getStudentsByClass(){
        String msg = "";
        String status="";
        List<MemberAddTagsDto> resMember = new ArrayList<>();

            Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
            status="200";
            msg = "성공";
            List<UserDetailDto> tempMembers= memberRepo.findUserDetailDTOByClass(member.getClassNumber());

            for (int i =0;i<tempMembers.size();i++){
                MemberAddTagsDto tempRes = new MemberAddTagsDto();
                Map<String,Object> memberHashtags = new HashMap<>();
                Long memberPK = tempMembers.get(i).getUserPk();

                List<HashTagsDto> tempTags = memberHashtagRepo.gethashtags(memberPK);
                for(int g = 0 ; g < tempTags.size();g++){
                    HashTagsDto temp = tempTags.get(g);
                    memberHashtags.put(temp.getHashTagProp().toString(), temp.getHashtags());
                }
                tempRes.setMemberHashTags(memberHashtags);
                tempRes.setUserDetailDto(tempMembers.get(i));

                resMember.add(tempRes);
        }
        return BaseResponse.builder().status(status).msg(msg).data(resMember).build();
    }
}
