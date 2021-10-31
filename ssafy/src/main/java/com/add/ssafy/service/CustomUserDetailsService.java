package com.add.ssafy.service;

import java.util.Collections;
import java.util.Optional;

import com.add.ssafy.Repository.MemberRepo;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.add.ssafy.entity.Member;

import lombok.RequiredArgsConstructor;

// spring security에서 쓰는 서비스
@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepo memberRepository;

    @Override
    @Transactional//여기서 username은 UsernamePasswordAuthenticationToken 에서의 username임 우리 서비스에서는 email임
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> tempMember = Optional.ofNullable(memberRepository.findByEmail(username));
        System.out.println(tempMember.get().getEmail()+" "+tempMember.get().getMmid() + " "+tempMember.get().getPassword());
        System.out.println("loadUserByUsername!!!!");
        return tempMember
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException(username + " -> 데이터베이스에서 찾을 수 없습니다."));
    }

    // DB 에 User 값이 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(Member member) {
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(member.getAuthority().toString());
        System.out.println(member.getAuthority().toString());
        return new User(
                String.valueOf(member.getId()),// 여기서 username을 member의 pk로 지정
                member.getPassword(),
                Collections.singleton(grantedAuthority)
        );
    }
}