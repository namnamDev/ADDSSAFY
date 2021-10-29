package com.add.ssafy.service;

import com.add.ssafy.Repository.BadgeRepo;
import com.add.ssafy.Repository.MemberRepo;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.entity.Badge;
import com.add.ssafy.entity.HashTag;
import com.add.ssafy.enums.Authority;
import com.add.ssafy.enums.HashTagProps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.add.ssafy.entity.Member;

@Service
@Transactional
public class AdminSvcImpl implements AdminSvcInter{
    @Autowired
    MemberRepo memberRepo;
    @Autowired
    BadgeRepo badgeRepo;


    //member
    final String[] firstNname = {"김","박","이","조","임"};
    final String[] studentsM = {"민준","서준","예준","도윤","시우","주원","하준","지호","지훈","준서"};
    final String[] studentsW = {"서연","서윤","지우","서현","민서","하은","하윤","윤서","지유","지민"};
    final String emailPre = "test";
    final String emailSub = "@test.com";
    final String password = "test";
    final String blogAddress = "http://www.testBlog.com";
    final String introduce = "잘 부탁드립니다.";
    final String profileImg = ".jpg";
    final int baseTestScore = 60;
    final String baseRegion = "구미";
    private String baseAddress = "삼성시 싸피길 ";
    private String[] baseClass = {"1반","2반","3반","4반"};

    //HashTags
    final String[] BADBADGEHashTags={
            "무단결석 1회"
            , "무단결석 2회"
            , "지각으로 결석한사람"
    };
    final String[] GOODBADGEHashTags = {
            "과목평가 70점 이상"
            , "과목평가 80점 이상"
            , "과목평가 90점 이상"
            , "과목평가 95점 이상"
            , "월말평가 70점 이상"
            , "월말평가 80점 이상"
            , "월말평가 90점 이상"
            , "월말평가 95점 이상"
            , "반장 했던 교육생"
            , "부반장 했던 교육생"
            , "CA였던 교육생"
            , "팀장이였던 교육생"
    };
    //HashTag
    final String[] BEHashTags = {
            "Spring"
            , "Django"
            , "OracleDB"
            , "MySQL"
            , "MariaDB"
            , "JPA"
            , "QueryDSL"
            , "Mybatis"
            , "STS"
            , "Intellij"
    };

    final String[] FEHashTags = {
            "Vue"
            , "React"
            , "TypeScript"
            , "Angular"
            , "JavaScript"
            , "Node.Js"
    };

    final String[] DEVOPSHashTags = {
            "Jenkins"
            , "Docker"
            , "AWS"
            , "Firebase"
    };
    final String[] FOURHashtags={
            "AI"
            , "BigData"
            , "BlockChain"
            , "IOT"

    };
    final String[] ETCHashtags={
            "UCC"
            , "PPT"
            , "Presentation"
            , "9 to 6"
            , "취업 위주"
            , "프로젝트 위주"

    };
    @Override
    public BaseResponse totalData() {
        List<BaseResponse> Responses = new ArrayList<BaseResponse>();
        Responses.add(InsertMember());
        Responses.add(InsertHashTag());
        return BaseResponse.builder().status("200").msg("성공").data(Responses).build();
    }

    @Override
    public BaseResponse InsertMember(){
        int cnt = 0;
        List<Member>memberList = new ArrayList<Member>();
        for(int x =0;x<firstNname.length;x++ ){
            for(int y =0; y<studentsM.length;y++){
                String tempName= firstNname[x]+studentsM[y];
                Random random = new Random();
                double subjectAVG = baseTestScore + random.nextInt(8)*5;
                double monthAVG = baseTestScore + random.nextInt(8)*5;
                Member member = Member.builder()
                        .name(tempName)
                        .studentNumber(Integer.toString(cnt*11))
                        .email(emailPre+cnt+emailSub)
                        .password(password)
                        .blog(blogAddress)
                        .baekjoonId(null)
                        .introduce(introduce)
                        .MBTI(null)
                        .subjectAvg(subjectAVG)
                        .monthLastAvg(monthAVG)
                        .profile(tempName+profileImg)
                        .region(baseRegion)
                        .classNumber(baseClass[cnt%4])
                        .address(baseAddress)
                        .authority(Authority.ROLE_USER)
                        .build();
                Member saved = memberRepo.save(member);
                memberList.add(saved);
                cnt++;
            }
            for(int z = 0; z<studentsW.length;z++){
                String tempName= firstNname[x]+studentsW[z];
                Random random = new Random();
                double subjectAVG = baseTestScore + random.nextInt(8)*5;
                double monthAVG = baseTestScore + random.nextInt(8)*5;
                Member member = Member.builder()
                        .name(tempName)
                        .studentNumber(Integer.toString(cnt*11))
                        .email(emailPre+cnt+emailSub)
                        .password(password)
                        .blog(blogAddress)
                        .baekjoonId(null)
                        .introduce(introduce)
                        .MBTI(null)
                        .subjectAvg(subjectAVG)
                        .monthLastAvg(monthAVG)
                        .profile(tempName+profileImg)
                        .region(baseRegion)
                        .classNumber(baseClass[cnt%4])
                        .address(baseAddress)
                        .authority(Authority.ROLE_USER)
                        .build();
                Member saved = memberRepo.save(member);
                memberList.add(saved);
                cnt++;
            }
        }
        return BaseResponse.builder().status("200").msg("성공").data(memberList).build();
    };

    @Override
    public BaseResponse InsertHashTag(){
        List<HashTag> Responses = new ArrayList<HashTag>();

        HashTagProps[] hashTagProps = HashTagProps.values();
        for(int i =0; i<hashTagProps.length;i++){

        }
//        for(int i =0;i<badBadge.length;i++){
//            Badge entityBadBage = Badge.builder().name(badBadge[i]).build();
//            Badge saved = badgeRepo.save(entityBadBage);
//            Responses.add(saved);
//        }
//        for(int i =0;i<sosoBadge.length;i++){
//            Badge entitysosoBage = Badge.builder().name(sosoBadge[i]).build();
//            Badge saved = badgeRepo.save(entitysosoBage);
//            Responses.add(saved);
//        }

        return BaseResponse.builder().status("200").msg("성공").data(Responses).build();
    };


}
