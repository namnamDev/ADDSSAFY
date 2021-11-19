package com.add.ssafy.dto;

import com.add.ssafy.enums.HashTagProps;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HashTagDto {
    private Long HashTagPK;
    private String HashTagName;
    private com.add.ssafy.enums.HashTagProps HashTagProp;

}
