package com.add.ssafy.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class UserDetailDto {
    private Long userPk;
    private String userName;
    private String email;
    private List<BadgeDto> badge;
    private List<HashTagDto> can;
    private List<HashTagDto> want;
    private String introduce;
    private boolean isTeam;
    private String blog;
    private String backjun;
    private String protfolio;
    private String git;
    private String mmid;
}
