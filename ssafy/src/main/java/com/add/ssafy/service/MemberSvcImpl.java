package com.add.ssafy.service;

import com.add.ssafy.Repository.MemberRepo;
import com.add.ssafy.dto.TokenDto;
import com.add.ssafy.dto.request.UserRequest;
import com.add.ssafy.dto.response.BaseResponse;
import com.add.ssafy.entity.Member;
import com.add.ssafy.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberSvcImpl implements MemberSvcInter {
    @Autowired
    MemberRepo memberRepo;

    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final TokenProvider tokenProvider;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Member loginOrSignup(UserRequest userRequest) {
        boolean check = false;
        //mmid가 먼저 존재하는지 조회
        Member signupMember = userRequest.toUser(passwordEncoder);
        Optional<Member> tempMember = Optional.ofNullable(memberRepo.findByMmid(signupMember.getMmid()));
        if (!tempMember.isPresent()) {
            //그게 없다면 회원가입
            Member savedMember = memberRepo.save(signupMember);
            return savedMember;
        } else {
            return tempMember.get();
        }
    }

    @Override
    public BaseResponse login(UserRequest userRequest) {

        // 유저 정보 검증

        // -------- 토큰 생성
        // 유저 id, password를 통해 UsernamePasswordAuthenticationToken객체 생성
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                userRequest.getEmail(), userRequest.getPassword());
        System.out.println(authenticationToken);
        System.out.println("svc.login"+ userRequest.getEmail() + " " + userRequest.getPassword());
        // authenticationToken를 이용해서 authenticate메소드가 실행이 될때
        // 아까만든 CustomUserDetailsService의 loadUserByUsername 메소드가 실행됨
        // 그 결과값을 가지고 Authentication객체가 생성됨
//        System.out.println(authenticationToken);
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
//        SecurityContextHolder.getContext().setAuthentication(authentication);//Authentication객체를 SecurityContext에 저장

        // memberName 가져와서 토큰만들때 집어넣음
        String memberEmail = userRequest.getEmail();
        // Authentication를 이용해 jwt토큰 생성
        TokenDto jwt = tokenProvider.createToken(authentication);
        System.out.println(jwt);
        // -------- 토큰 생성완료

        // RefreshToken 저장
//        RefreshToken refreshToken = RefreshToken.builder().key(authentication.getName()).value(jwt.getRefreshToken())
//                .build();
//        System.out.println(refreshToken);
//        refreshTokenRepository.save(refreshToken);

        return BaseResponse.builder().status("200").msg("login").data(jwt).build();


    }
}
