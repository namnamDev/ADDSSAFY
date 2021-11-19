package com.add.ssafy.dto.request;
import com.add.ssafy.entity.Member;
import com.add.ssafy.enums.Authority;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.NotNull;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class UploadPPTRequest {
    @NotNull
    private Long teamPK;
    @NotNull
    private MultipartFile ppt;
}
