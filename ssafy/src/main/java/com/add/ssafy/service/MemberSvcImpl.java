package com.add.ssafy.service;

import com.add.ssafy.Repository.MemberRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MemberSvcImpl implements MemberSvcInter{
    @Autowired
    MemberRepo memberRepo;
}
