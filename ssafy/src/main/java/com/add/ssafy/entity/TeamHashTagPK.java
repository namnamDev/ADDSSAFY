package com.add.ssafy.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class TeamHashTagPK implements Serializable {
    private Long team;
    private Long hashTag;
}
