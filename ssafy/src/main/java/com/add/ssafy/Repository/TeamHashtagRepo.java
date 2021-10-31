package com.add.ssafy.Repository;

import com.add.ssafy.entity.Team;
import com.add.ssafy.entity.TeamHashtag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamHashtagRepo extends JpaRepository<TeamHashtag, Team>,TeamHashtagRepoCustom {
}