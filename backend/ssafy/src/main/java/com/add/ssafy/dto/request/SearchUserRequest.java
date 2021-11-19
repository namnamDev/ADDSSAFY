package com.add.ssafy.dto.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SearchUserRequest {
    private List<Long> can;
    private int projectCode;
}
