package com.add.ssafy.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder @NoArgsConstructor
@AllArgsConstructor
// id, 팀id, 팀장유무
public class TeamMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn
    private Team team;

    @ManyToOne
    @JoinColumn
    private Member member;
    private Boolean leader;
}
