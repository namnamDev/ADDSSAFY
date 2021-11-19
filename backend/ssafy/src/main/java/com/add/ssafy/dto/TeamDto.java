package com.add.ssafy.dto;

import lombok.*;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamDto {
    private Long teamPK;
    private String name;
    private String introduce;
    private String webexLink;
    private String ppt;
    private String mmChannel;
//    private Long userQuanty;
    private List<UserDto> teamuser;
//    private Map<String,Object> need;
}
