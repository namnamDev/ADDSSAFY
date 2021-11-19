package com.add.ssafy.dto.request;

import com.add.ssafy.entity.Member;
import com.add.ssafy.enums.Authority;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class DelegateRequest {

    @NotNull
    private Long teamPK;
    @NotNull
    private Long userPK;
}
