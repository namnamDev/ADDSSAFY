package com.add.ssafy.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class  ManageUserDto{
    private Long userPK;
    private String userName;
    private Long userClassNumber;
    private String userImage;
    private String userGender;
    private Long userExamResult;
    private String userReport;
//    private List<>
}
