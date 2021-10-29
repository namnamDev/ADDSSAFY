package com.add.ssafy.Repository;

import com.add.ssafy.entity.Badge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BadgeRepo extends JpaRepository<Badge, Long> ,BadgeRepoCustom{
}