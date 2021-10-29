package com.add.ssafy.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
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


    @ManyToOne
    @JoinColumn
    private Team team;

    @ManyToOne
    @JoinColumn
    private Member member;

    private Boolean direction;

    @Column(updatable = false, columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private LocalDateTime proposeDate;

    private Boolean accept;
}
