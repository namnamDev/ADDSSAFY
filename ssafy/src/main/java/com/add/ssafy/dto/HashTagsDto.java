package com.add.ssafy.dto;

import com.add.ssafy.enums.HashTagProps;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HashTagsDto {
    private com.add.ssafy.enums.HashTagProps HashTagProp;
    private List<HashTagDto> hashtags;
}
