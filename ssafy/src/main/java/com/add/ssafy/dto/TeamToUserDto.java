package com.add.ssafy.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamToUserDto {
    private Long suggestPK;
    private Long userPK;
    private String userName;
    private LocalDateTime suggestDate;

}
