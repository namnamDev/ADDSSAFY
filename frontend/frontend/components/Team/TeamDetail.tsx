import React, { ReactElement } from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

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
  sigfiles: ["특화 ppt"],
};

interface Props {
  teamPK: number;
}

function TeamDetail({ teamPK }: Props): ReactElement {
  const router = useRouter();
  const PK = router.query.userPK;
  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mx-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">팀 정보</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">팀명</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">ADD SSAFY</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">프로젝트 구분</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                특화프로젝트 / 빅데이터 추천
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">기술스택</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">파이썬, 뷰, 자바</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">팀 소개</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                팀 빌딩 서비스와 교육생 관리 시스템의 결합 팀 빌딩 서비스와 교육생 관리 시스템의
                결합 팀 빌딩 서비스와 교육생 관리 시스템의 결합 팀 빌딩 서비스와 교육생 관리
                시스템의 결합 팀 빌딩 서비스와 교육생 관리 시스템의 결합
              </dd>
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

export default TeamDetail;
