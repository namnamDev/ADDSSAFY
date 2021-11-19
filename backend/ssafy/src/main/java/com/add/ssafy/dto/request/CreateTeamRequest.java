package com.add.ssafy.dto.request;

import com.add.ssafy.entity.Member;
import com.add.ssafy.enums.Authority;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateTeamRequest {

    @NotNull
    private String introduceTeam;
    @NotNull
    private String name;
    @NotNull
    private String webex;

    @NotNull
    private List<Long> want;

    @NotNull
    private String mmChannel;
    @NotNull
    private int projectCode;
}
