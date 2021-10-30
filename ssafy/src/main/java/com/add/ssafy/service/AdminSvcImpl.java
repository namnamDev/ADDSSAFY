package com.add.ssafy.service;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.add.ssafy.Repository.*;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.entity.*;
import com.add.ssafy.enums.Authority;
import com.add.ssafy.enums.HashTagProps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
public class AdminSvcImpl implements AdminSvcInter{
    @Autowired
    MemberRepo memberRepo;
    @Autowired
    HashtagRepo hashtagRepo;
    @Autowired
    TeamRepo teamRepo;
    @Autowired
    TeamMemberRepo teamMemberRepo;
    @Autowired
    MemberHashtagRepo memberHashtagRepo;
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
    final String[] teamName = {
            "1조"
            , "2조"
            , "히사이시 조"
            , "어둠의 싸피단"
            , "그만해 이러다 다죽어"
            , "취준팀"
    };
    final String teamIntroduce = "팀 소개입니다.";
    final private String[][] allHashtags = new String[][]{ BEHashTags, FEHashTags, DEVOPSHashTags, FOURHashtags,ETCHashtags, BADBADGEHashTags, GOODBADGEHashTags};
    @Override
    public BaseResponse totalData() {
        List<BaseResponse> Responses = new ArrayList<BaseResponse>();
        Responses.add(InsertMember());
        Responses.add(InsertHashTag());
        Responses.add(InsertTeam());
        Responses.add(InsertMemberHashTag());
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

            String[] tempHashtag = allHashtags[i];
            for(int f = 0; f< tempHashtag.length; f++){
                HashTag hashTag = HashTag.builder().name(tempHashtag[f]).hashtagProps(hashTagProps[i]).build();
                HashTag saved = hashtagRepo.save(hashTag);
                Responses.add(saved);
            }

        }

        return BaseResponse.builder().status("200").msg("성공").data(Responses).build();
    };

    @Override
    public BaseResponse InsertTeam(){
        List<Member> allMembers = memberRepo.findAll();
        Map<String,Object>res = new HashMap<String,Object>();
        int cnt = 0;
        for(int i =0;i<teamName.length;i++){
            Map<String,Object> temp = new HashMap<String,Object>();
            Member leader = allMembers.get(cnt);
            Team tempTeam = Team.builder().name(teamName[i]).introduce(teamIntroduce + i).ppt(teamName[i]+".ppt").type(0).build();
            Team savedTeam = teamRepo.save(tempTeam);
            temp.put("team",savedTeam);
            TeamMember teamMemberLeader = TeamMember.builder().team(savedTeam).member(leader).leader(true).build();
            TeamMember savedTeamMemberLeader = teamMemberRepo.save(teamMemberLeader);
            temp.put("leader",savedTeamMemberLeader);
            cnt++;
            List<TeamMember> others = new ArrayList<>();
            for(int y = 0; y<4;y++){
                TeamMember teamMember = TeamMember.builder().team(savedTeam).member(allMembers.get(cnt)).leader(false).build();
                TeamMember savedTeamMember = teamMemberRepo.save(teamMember);
                others.add(savedTeamMember);
                cnt++;
            }
            temp.put("others",others);
            res.put("team"+(cnt-5),temp);
        }
        return BaseResponse.builder().status("200").msg("성공").data(res).build();
    }

    @Override
    public BaseResponse InsertMemberHashTag(){
        Random random = new Random();
        List<Member> allMembers = memberRepo.findAll();
        List<HashTag>allHashTags = hashtagRepo.findAll();
        Map<String,Object> res = new HashMap<>();
        for(int i =0;i<allMembers.size();i++){
            Map<String,Object> tempRes = new HashMap<>();
            List<HashTag> tempMembertag = new ArrayList<>();
            Member tempMember = allMembers.get(i);
            Collections.shuffle(allHashTags);
            int randomSize = 20+random.nextInt(5);
            for (int g = 0; g< 20;g++){
                MemberHashtag memberHashtag = MemberHashtag.builder().member(tempMember).hashTag(allHashTags.get(g)).build();
                MemberHashtag savedMemberHashtag = memberHashtagRepo.save(memberHashtag);
                tempMembertag.add(savedMemberHashtag.getHashTag());
            }
            res.put("member"+tempMember.getId(),tempMembertag);

        }
        return BaseResponse.builder().status("200").msg("성공").data(res).build();

    }


    //팀생성 실제 로직예상.
    public BaseResponse InsertTeamReal(){
        //회원조회
        //팀명중복여부
        //팀생성
        //해시태그여부
        return null;
    }



}
