package com.add.ssafy.Repository;

import com.add.ssafy.entity.TeamMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamMemberRepo extends JpaRepository<TeamMember, Long> ,TeamMemberRepoCustom{
}