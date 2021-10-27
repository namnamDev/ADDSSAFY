package com.example.backend.entity

import lombok.Builder
import lombok.Getter
import lombok.Setter
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
@Getter
@Setter
@Builder
class Member(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val name: String,
    val number: String,
    val email: String,
    val password: String,
    val blog: String,
    val baekjoonId: String,
    val introduce: String,
    val role: String,
    val state: Boolean,
    val subjectAvg: Double,
    val endMonthAvg: Double,
    val profile: String,
    val region: String,
    val classNum: Int,
    val address: String,
    val phone: String
)
// 고유번호, 이름, 학번, 이메일, 패스워드, 블로그주소, 백준ID, 자기소개, 회원등급, 회원상태, 과목평균, 월말평균, 프로필URI, 지역, 반, 주소, 전화번호호
