package com.add.ssafy.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class TeamToUserDto {
    private Long suggestPK;
    private Long teamPK;
    private String userName;
    private LocalDateTime suggestDate;

}
