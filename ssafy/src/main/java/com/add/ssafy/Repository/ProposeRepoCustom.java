package com.add.ssafy.Repository;

import com.add.ssafy.entity.Propose;

import java.util.Optional;

public interface ProposeRepoCustom {


    Optional<Propose> findPropose(Long teamPK, Long memberPK, boolean direction);
}
