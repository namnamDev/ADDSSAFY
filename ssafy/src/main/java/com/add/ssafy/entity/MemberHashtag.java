package com.add.ssafy.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@Builder @NoArgsConstructor @AllArgsConstructor
@IdClass(MemberHashTagPK.class)
public class MemberHashtag {

    @Id
    @ManyToOne
    @JoinColumn
    private Member member;

    @Id
    @ManyToOne
    @JoinColumn
    private HashTag hashTag;

    @Column(updatable = false, columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    private LocalDateTime createDate;
}