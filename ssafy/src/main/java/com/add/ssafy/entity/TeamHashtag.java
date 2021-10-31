package com.add.ssafy.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@Builder @NoArgsConstructor @AllArgsConstructor
@IdClass(TeamHashTagPK.class)
public class TeamHashtag {

    @Id
    @ManyToOne
    @JoinColumn
    private Team team;

    @Id
    @ManyToOne
    @JoinColumn
    private HashTag hashTag;
}