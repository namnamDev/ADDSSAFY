package com.add.ssafy.dto.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateMemberRequest {
    private String blog;
    private String introduce;
    private String github;
    private String phone;

    private List<Long> can;
    private List<Long> want;
}
