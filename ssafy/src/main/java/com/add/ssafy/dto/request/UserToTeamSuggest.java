package com.add.ssafy.dto.request;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserToTeamSuggest {
    private Long teamPK;
    private String msg;
}
