package com.add.ssafy.Repository;

import com.add.ssafy.entity.Propose;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProposeRepo extends JpaRepository<Propose, Long>,ProposeRepoCustom {
}