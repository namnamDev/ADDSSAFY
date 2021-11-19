package com.add.ssafy.dto.request;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TeamToUserSuggest {
    private Long teamPK;
    private Long userPK;
    private String msg;
}
