package com.example.backend.config;


import com.example.backend.jwt.JwtFilter;
import com.example.backend.jwt.TokenProvider;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

// JwtFilter를 Security로직에 필터를 등록
@RequiredArgsConstructor
public class JwtSecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

    private final TokenProvider tokenProvider;

    @Override
    public void configure(HttpSecurity http) {
        JwtFilter customFilter = new JwtFilter(tokenProvider);
        // http.addFilterBefore(filter, beforeFilter)
        http.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);

    }
}
