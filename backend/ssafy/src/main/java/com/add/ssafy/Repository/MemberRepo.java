package com.add.ssafy.Repository;

import com.add.ssafy.entity.Member;
import com.add.ssafy.service.MemberSvcInter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepo extends JpaRepository<Member, Long>, MemberRepoCustom {
}