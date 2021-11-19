package com.add.ssafy.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberAddTagsDto {
    UserDetailDto userDetailDto;
    Map<String,Object> memberHashTags;
}
