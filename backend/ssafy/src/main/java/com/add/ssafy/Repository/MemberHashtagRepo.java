package com.add.ssafy.Repository;

import com.add.ssafy.entity.Member;
import com.add.ssafy.entity.MemberHashtag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberHashtagRepo extends JpaRepository<MemberHashtag, Long>,MemberHashtagRepoCustom {
}