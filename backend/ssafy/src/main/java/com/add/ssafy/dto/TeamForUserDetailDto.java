package com.add.ssafy.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamForUserDetailDto {
    private Long teamPK;
    private String name;
    private boolean isLeader;
    private int projectCode;
    private String ppt;
}
