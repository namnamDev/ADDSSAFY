package com.add.ssafy.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDto {

    private Long userPk;
    private String userName;
    private Boolean isLeader;
    private String profile;
}
