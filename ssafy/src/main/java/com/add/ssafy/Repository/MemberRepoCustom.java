package com.add.ssafy.Repository;

import com.add.ssafy.dto.UserDetailDto;
import com.add.ssafy.dto.UserDto;
import com.add.ssafy.entity.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepoCustom {
    Member findByMmid(String mmid);

    Member findByEmail(String email);

    Optional<List<UserDto>> findByClass(String ban);

    List<Member> findMemberByClass(String ban);

    List<UserDetailDto> findUserDetailDTOByClass(String ban);
}
