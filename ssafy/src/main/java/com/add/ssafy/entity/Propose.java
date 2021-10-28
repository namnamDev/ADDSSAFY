package com.add.ssafy.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
// id, 팀id, 회원id, 제안 방향(팀 -> 회원, 회원 -> 팀), 제안 시간, 승낙 여부
public class Propose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long teamId;

    private Long memberId;

    private Boolean direction;

    private LocalDateTime proposeDate;

    private Boolean accept;
}
