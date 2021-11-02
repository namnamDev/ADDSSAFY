package com.add.ssafy.entity;

import com.add.ssafy.enums.HashTagProps;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
// id, 해시태그 Props, 해시태그 이름
public class HashTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private HashTagProps hashtagProps;

    private String name;
}
