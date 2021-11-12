import React, { ReactElement, useState, Fragment, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import SendMMmodal from "./SendMMmodal";
import { MailIcon } from "@heroicons/react/solid";

interface Props {
  userPk: number;
  mmid?: string;
}

function UserDetail({ userPk, mmid }: Props): ReactElement {
  const router = useRouter();
  const [userinfo, setuserinfo] = useState<any>({});
  const [usertags, setusertags] = useState<any>({});
  const [myteamhistory, setmyteamhistory] = useState<any>({});
  const [checkMMid, setCheckMMid] = useState<boolean>(false);
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    const myMMid: string | null = localStorage.getItem("mmid");
    if (userPk === undefined) return;
    if (typeof token === "string" && myMMid) {
      axios
        .get(`/api/users/detail/${userPk}`, {
          headers: { Authorization: token },
        })
        .then((res: any) => {
          setuserinfo(res.data.data.userDetailDto);
          setusertags(res.data.data.memberHashTags);
          setmyteamhistory(res.data.data.userDetailDto.teamList);
        });
      if (myMMid !== mmid) {
        setCheckMMid(true);
      }
    }
  }, [userPk]);
  const goGitHub = () => {
    router.push("www.github.com", "_blank");
  };
  const goBlog = () => {
    router.push("www.naver.com", "_blank");
  };
  //
  const [flagMM, setflagMM] = useState<boolean>(false);
  console.log(userinfo);
  return (
    <div className="text-center">
      <div className=" shadow overflow-hidden sm:rounded-lg mt-5">
        <div className="px-4 py-5 sm:px-6">
          <div className="text-lg leading-6 font-medium text-gray-900">교육생 정보</div>
        </div>
        <div className="border-t border-gray-200">
          <div className="text-center my-10">
            <img
              className="rounded-full mx-auto"
              src={userinfo.profile}
              alt=""
              width="100"
              height="100"
            />
          </div>
          <dl>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm  text-gray-500 font-bold">공통프로젝트</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {
                  myteamhistory.length > 0 && myteamhistory[0].name !== null
                    ? <div>{myteamhistory[0].name}</div>
                    : <div>없음</div>
                }
              </dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm  text-gray-500 font-bold">특화프로젝트</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {
                  myteamhistory.length > 1 && myteamhistory[1].name !== null
                    ? <div>{myteamhistory[1].name}</div>
                    : <div>없음</div>
                }
              </dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm  text-gray-500 font-bold">자율프로젝트</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {
                  myteamhistory.length > 2 && myteamhistory[2].name !== null
                    ? <div>{myteamhistory[2].name}</div>
                    : <div>없음</div>
                }
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이름</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userinfo.userName}
              </dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이메일주소</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userinfo.email}</dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">연락처</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userinfo.userPhone}
              </dd>
            </div>
            {/* 기술스택 */}
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">기술스택 (할 수 있어요)</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {Object.keys(usertags).map((section: any, i: number) => (
                  <div key={i}>
                    {usertags[section].map((tag: any, j: any) => (
                      <div key={j}>
                        {section === "DEVOPS" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {tag.hashTagName}
                          </span>
                        ) : null}
                        {section === "FE" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {tag.hashTagName}
                          </span>
                        ) : null}
                        {section === "BE" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {tag.hashTagName}
                          </span>
                        ) : null}
                        {section === "ETC" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            {tag.hashTagName}
                          </span>
                        ) : null}
                        {section === "FOUR" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {tag.hashTagName}
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ))}
              </dd>
            </div>
            {/*  */}
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">GITHUB 주소</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                <Link href="#">
                  <a target="_blank">{userinfo.git}</a>
                </Link>
              </dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">블로그 주소</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                <Link href="https://www.naver.com">
                  <a target="_blank">About</a>
                </Link>
              </dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">자기 소개</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userinfo.introduce}
              </dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이전 프로젝트 소개자료</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userinfo.introduce}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-5">
        {checkMMid ? (
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={() => setflagMM(true)}
          >
            <MailIcon className="h-6 w-6 text-blue-800 mr-2" aria-hidden="true" />
            매터모스트 메시지 보내기
          </button>
        ) : null}
        {/* MM */}
        {/* 조건추가, */}
        <SendMMmodal flagMM={flagMM} setflagMM={setflagMM} mmid={userinfo.mmid} />
      </div>
    </div>
  );
}

export default UserDetail;
