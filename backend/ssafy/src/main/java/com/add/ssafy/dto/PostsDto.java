package com.add.ssafy.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class PostsDto {
    private Long postPK;
    private String subject;
    private String content;
    private LocalDateTime createdAt;
    private String postType;
    private Long userPK;
    private String userName;

}
