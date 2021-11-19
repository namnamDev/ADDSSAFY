package com.add.ssafy.entity;

import com.add.ssafy.enums.Division;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
// id, hashTagId, memberId
public class WantMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn
    private Member member;

    @ManyToOne
    @JoinColumn
    private HashTag hashTag;

    @Enumerated(EnumType.STRING)
    private Division division;
}
