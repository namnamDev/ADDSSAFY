package com.add.ssafy.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class TeamDto {
    private Long teamPK;
    private String sebexLink;
    private String ppt;
    private List<HashTagDto> want;
    private List<HashTagDto> need;
    private Long userQuanty;
}
