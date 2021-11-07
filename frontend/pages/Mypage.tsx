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
      <div className="w-1/2 mx-auto text-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"></div>
          <h3 className="text-lg leading-6 font-bold text-gray-900">{userinfo.userName}님의 프로필</h3>
          <div className="px-4 py-2 sm:px-6">
          </div>
          <div className="text-center mb-10">
            <img
              className="rounded-full mx-auto"
              src={userinfo.profile}
              alt=""
              width="100"
              height="100"
            />
          </div>
          <div className="">
            <dl>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm  text-gray-500 font-bold">이름</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userinfo.userName}</dd>
              </div>
              {/* 프로젝트 */}
              {
                myteamhistory.length > 0
                  ? <div>
                    {Object.values(myteamhistory).map((team: any, i: any) => (
                      <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" key={i}>
                        {
                          team.projectCode === 0
                            ? <dt className="text-sm  text-gray-500 font-bold">공통프로젝트</dt>
                            : null
                        }                {
                          team.projectCode === 1
                            ? <dt className="text-sm  text-gray-500 font-bold">특화프로젝트</dt>
                            : null
                        }
                        {
                          team.projectCode === 2
                            ? <dt className="text-sm  text-gray-500 font-bold">자율프로젝트</dt>
                            : null
                        }
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{team.name}</dd>
                      </div>
                    ))}
                  </div>
                  : null
              }
              {/*  */}
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm  text-gray-500 font-bold">이메일주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userinfo.email}
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm  text-gray-500 font-bold">연락처</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userinfo.userPhone}</dd>
              </div>
              {/* 기술스택 */}
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm  text-gray-500 font-bold">기술스택</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {Object.keys(usertags).map((section: any, i: number) => (
                    <div key={i}>
                      {usertags[section].map((tag: any, j: any) =>
                        <div key={j}>
                          {
                            section === 'DEVOPS'
                              ?
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {tag.hashTagName}
                              </span>
                              : null
                          }
                          {
                            section === 'FE'
                              ?
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                {tag.hashTagName}
                              </span>
                              : null
                          }
                          {
                            section === 'BE'
                              ?
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                {tag.hashTagName}
                              </span>
                              : null
                          }
                          {
                            section === 'ETC'
                              ?
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                {tag.hashTagName}
                              </span>
                              : null
                          }
                          {
                            section === 'FOUR'
                              ?
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                {tag.hashTagName}
                              </span>
                              : null
                          }
                        </div>
                      )}
                    </div>
                  ))}
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm  text-gray-500 font-bold">GITHUB 주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                  <Link href="https://www.naver.com">
                    <a target="_blank">{userinfo.git}</a>
                  </Link>
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm  text-gray-500 font-bold">블로그 주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                  <Link href="https://www.naver.com">
                    <a target="_blank">{userinfo.blog}</a>
                  </Link>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm  text-gray-500 font-bold">자기 소개</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userinfo.introduce}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-5 text-right">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-blue-100 rounded-md shadow-sm text-sm  text-gray-700 hover:bg-blue-50"
              onClick={() =>
                router.push('/MypageEdit'
                )
              }
            >
              정보수정
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-white rounded-md shadow-sm text-sm  text-gray-700 hover:bg-gray-50"
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
