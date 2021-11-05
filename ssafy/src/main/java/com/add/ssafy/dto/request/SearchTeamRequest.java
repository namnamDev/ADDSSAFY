package com.add.ssafy.dto.request;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SearchTeamRequest {
    private List<Long> can;
    private int projectCode;
}
