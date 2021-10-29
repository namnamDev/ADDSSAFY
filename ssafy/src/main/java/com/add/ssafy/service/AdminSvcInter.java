package com.add.ssafy.service;

import com.add.ssafy.dto.response.BaseResponse;

public interface AdminSvcInter {
    BaseResponse totalData();
    BaseResponse InsertMember();

    BaseResponse InsertHashTag();
}
