import React, { ReactElement, useEffect, useState } from "react";
import Navbar from "../components/basic/Navbar";
import { useRouter } from "next/router";
import { PaperClipIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/basic/Footer";
import axios from "axios";

interface Props { }

function Mypage({ }: Props): ReactElement {
  const router = useRouter();
  const PK = router.query.userPK;

  // 내정보
  const [userinfo, setuserinfo] = useState<any>({})
  const [usertags, setusertags] = useState<any>({})
  const [myteamhistory, setmyteamhistory] = useState<any>({})
  useEffect(() => {
    const token: string | null = localStorage.getItem('token')
    if (typeof token === 'string') {
      axios.get('/api/users/mypage',
        {
          headers: { Authorization: token }
        })
        .then((res: any) => {
          console.log(res);
          setuserinfo(res.data.data.userDetailDto)
          setusertags(res.data.data.memberHashTags)
          setmyteamhistory(res.data.data.userDetailDto.teamList)
        })
        .catch(() => alert('회원님의 정보를 가져올 수 없습니다, 다시 로그인해주세요'))
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-2/3 mx-auto text-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"></div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">{userinfo.userName}님의 프로필</h3>
          <div className="px-4 py-5 sm:px-6">
          </div>
          <div className="text-center">
            <Image
              className="h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt=""
              width="150%"
              height="150%"
            />
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">이름</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userinfo.userName}</dd>
              </div>
              {/* 프로젝트 */}
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">공통 프로젝트 팀 정보</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1팀 / 무소속</dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">특화 프로젝트 팀 정보</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1팀 / 무소속</dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">자율프로젝트 팀 정보</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1팀 / 무소속</dd>
              </div>
              {/*  */}
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">이메일주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userinfo.email}
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">연락처</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userinfo.userPhone}</dd>
              </div>
              {/* 기술스택 */}
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">기술스택 (할 수 있어요)</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">파이썬</dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">기술스택 (하고 싶어요)</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">자바</dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">뱃지</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">지각교육생</dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">GITHUB 주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                  <Link href="https://www.naver.com">
                    <a target="_blank">{userinfo.git}</a>
                  </Link>
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">블로그 주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                  <Link href="https://www.naver.com">
                    <a target="_blank">{userinfo.blog}</a>
                  </Link>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">자기 소개</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userinfo.introduce}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-5 text-right">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-blue-100 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-blue-50"
              onClick={() =>
                router.push('/MypageEdit'
                )
              }
            >
              정보수정
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-white rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => history.go(-1)}
            >
              나가기
            </button>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mypage;
