package com.add.ssafy.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
public class MemberHashTagPK implements Serializable {
    private Long member;
    private Long hashTag;
}
