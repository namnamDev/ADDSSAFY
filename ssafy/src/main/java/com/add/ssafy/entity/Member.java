package com.add.ssafy.entity;

import com.add.ssafy.enums.Authority;
import lombok.*;

import javax.persistence.*;


@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
// id, 이름, 학번, 이메일, 패스워드, 블로그, 백준id, 자기소개, MBTI, 과목평균, 월말평균, 프로필, 지역, 반, 주소, 권한
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String studentNumber;

    private String email;

    private String password;

    private String blog;

    private String github;

    private String baekjoonId;

    private String introduce;

    private String MBTI;

    private Double subjectAvg;

    private Double monthLastAvg;

    private String profile;

    private String region;

    private String classNumber;

    private String address;

    private String mmid;

    private boolean isLeave;

    private String userPhone;

    private String userName;

    private String userNick;

    private String mmToken;
    @Enumerated(EnumType.STRING)
    private Authority authority;

}
