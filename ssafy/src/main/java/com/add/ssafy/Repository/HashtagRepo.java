package com.add.ssafy.Repository;

import com.add.ssafy.entity.Badge;
import com.add.ssafy.entity.HashTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HashtagRepo extends JpaRepository<HashTag, Long> , HashtagRepoCustom {
}