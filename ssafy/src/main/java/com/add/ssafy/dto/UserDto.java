package com.add.ssafy.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private Long userPk;
    private String userName;
    private Boolean isLeader;
    private String profile;
    private String mmid;
}
