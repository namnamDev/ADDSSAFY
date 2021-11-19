package com.add.ssafy.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class SignDto {
    private String fileTitle;
    private String fileURL;
    private String userName;
    private String userArea;
    private Long userClass;
}
