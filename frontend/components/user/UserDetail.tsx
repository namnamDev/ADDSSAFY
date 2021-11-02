import React, { ReactElement, useEffect } from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
const person = {
  name: "Jane Cooper",
  userId: 1,
  title: "Regional Paradigm Technician",
  department: "Optimization",
  role: "Admin",
  email: "jane.cooper@example.com",
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  address: "ssafy@ssafy.com",
  sigfiles: ["공통프로젝트", "특화프로젝트"],
};

interface Props {}

function UserDetail({}: Props): ReactElement {
  const router = useRouter();
  const PK = router.query.userPK;
  const Router = useRouter();
  // 퇴소처리
  function leave(PK: number) {
    return;
  }
  const goGitHub = () => {
    Router.push("www.github.com", "_blank");
  };
  const goBlog = () => {
    Router.push("www.naver.com", "_blank");
  };
  return (
    <div className="">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">교육생 정보</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">팀 정보</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1팀 / 무소속</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">사진</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {" "}
                <Image
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이름</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{person.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이메일주소</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{person.address}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">연락처</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">010-1234-5678</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">기술스택 (할 수 있어요)</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">파이썬</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">기술스택 (하고 싶어요)</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">자바</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">뱃지</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">지각교육생</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">GITHUB 주소</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                <Link href="https://www.naver.com">
                  <a target="_blank">About</a>
                </Link>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">블로그 주소</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                <Link href="https://www.naver.com">
                  <a target="_blank">About</a>
                </Link>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">백준 티어</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">플레1</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">자기 소개</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">하이</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">팀 프로젝트 ppt</dt>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  {person.sigfiles.map((month, i) => (
                    <li
                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                      key="i"
                    >
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" />
                        <span className="ml-2 flex-1 w-0 truncate">{month}.jpg</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
