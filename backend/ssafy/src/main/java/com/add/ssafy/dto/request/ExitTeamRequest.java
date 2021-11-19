package com.add.ssafy.dto.request;

import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ExitTeamRequest {
    @NotNull
    private Long teamPK;
}
