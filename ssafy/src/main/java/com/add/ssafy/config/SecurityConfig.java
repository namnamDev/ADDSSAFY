package com.add.ssafy.config;

import com.add.ssafy.jwt.JwtAccessDeniedHandler;
import com.add.ssafy.jwt.JwtAuthenticationEntryPoint;
import com.add.ssafy.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true) // @PreAuthorize를 메소드 단위로 추가하기 위해 적용
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http.cors().configurationSource(corsConfigurationSource()).and().csrf().disable() // 토큰 방식이라서 사용한다고 함
//
//                // exception을 만든 것으로 추가
//                .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
//                .accessDeniedHandler(jwtAccessDeniedHandler)
//
//                // Session을 사용안하기 때문에 설정을 STATELESS 지정
//                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//
//                .and().authorizeRequests() // HttpServletReuqest를 사용하는 요청에 대한 접근 제한 설정하겠다.
//                .antMatchers("/user/**", "/auth/**", "/post/**", "/child/**", "/comment/**", "/likes/**",
//                        "/relation/**")
//                .permitAll()
//                // .hasRole("USER") // 특정 path 요청은 인증이 필요하지 않다.
//                .antMatchers("/api/**", "/auth/**").permitAll()
//                .antMatchers("/webcuration/**", "/v2/api-docs", "/configuration/**", "/swagger*/**", "/webjars/**")
//                .permitAll().anyRequest().authenticated()
//                // 나머지 요청은 모두 인증이 필요하다.
//
//                // JwtFilter를 addFilterBefore로 등록했던 JwtSecurityConfig 클래스도 적용
//                .and().apply(new JwtSecurityConfig(tokenProvider));

        http.csrf().disable() //csrf비활성화
                .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)
                .and().cors()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
//			.addFilter(corsFilter)
                .formLogin().disable()

                .httpBasic().disable()
                .authorizeRequests()
                .antMatchers("/user/**").authenticated()
                //.antMatchers("/Admin/**").hasRole("ADMIN")//어드민만 들어갈 수잇다.
                .anyRequest().permitAll()
                .and().apply(new JwtSecurityConfig(tokenProvider));//위에 걸어둔거 말고는 누구든 들어올 수 있다.

    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("http://localhost:3000");
        configuration.addAllowedOrigin("https://k5d204.p.ssafy.io");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
