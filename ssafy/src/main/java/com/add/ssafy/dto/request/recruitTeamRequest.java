package com.add.ssafy.dto.request;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class recruitTeamRequest {
    private Long teamPK;
    private int projectCode;
    private Long suggestPK;
    private Boolean suggest;
}
