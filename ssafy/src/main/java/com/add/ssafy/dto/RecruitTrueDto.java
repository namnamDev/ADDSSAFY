package com.add.ssafy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecruitTrueDto {
    private boolean succecs;
    private String leaderMMToken;
    private String mmChannelId;
    private String userNickname;
}
