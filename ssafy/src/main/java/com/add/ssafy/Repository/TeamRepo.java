package com.add.ssafy.Repository;

import com.add.ssafy.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepo extends JpaRepository<Team, Long>,TeamRepoCustom {
}