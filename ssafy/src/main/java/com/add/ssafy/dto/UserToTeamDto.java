package com.add.ssafy.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserToTeamDto {
    private Long suggestPK;
    private Long teamPK;
    private String teamName;
    private LocalDateTime suggestDate;

}
