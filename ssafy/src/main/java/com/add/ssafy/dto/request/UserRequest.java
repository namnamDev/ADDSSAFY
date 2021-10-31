package com.add.ssafy.dto.request;

import javax.validation.constraints.NotNull;

import com.add.ssafy.enums.Authority;
//import com.web.webcuration.Entity.Provide;
import com.add.ssafy.entity.Member;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {

    @NotNull
    private String email;

    @NotNull
    private String mmid;

    @NotNull
    private String password;
    public Member toUser(PasswordEncoder passwordEncoder) {
        return Member.builder().email(this.email).password(passwordEncoder.encode(this.password)).mmid(this.mmid)
                .authority(Authority.ROLE_USER).build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(this.email, this.password);
    }
}
