package com.add.ssafy.Repository;

import com.add.ssafy.entity.Member;

public interface MemberRepoCustom {
    Member findByMmid(String mmid);

    Member findByEmail(String email);
}
