package com.add.ssafy.dto.request;

import javax.validation.constraints.NotNull;

import com.add.ssafy.enums.Authority;
//import com.web.webcuration.Entity.Provide;
import com.add.ssafy.entity.Member;

import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserRequest {

    @NotNull
    private String email;

    @NotNull
    private String mmid;

    @NotNull
    private String password;

    @NotNull
    private String username;

    @NotNull
    private String nickname;

//    @NotNull
//    private MultipartFile image;

    public Member toUser(PasswordEncoder passwordEncoder) {
        return Member.builder().email(this.mmid).password(passwordEncoder.encode(this.password))
                .authority(Authority.ROLE_USER).build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(this.mmid, this.password);
    }
}
