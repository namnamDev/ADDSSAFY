package com.add.ssafy.dto.request;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TeamUpdateRequest {
    @NotNull
    private Long teamPK;

    private String introduceTeam;

    private String webex;

    private List<Long> want;
}
