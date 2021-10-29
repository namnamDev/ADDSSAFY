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
  sigfiles: ["1월지원금", "2월지원금", "3월지원금", "5월지원금", "6월지원금"],
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
          <p className="mt-1 max-w-2xl text-sm text-gray-500">교육생 정보</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이름</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{person.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">생년월일</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">?</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이메일주소</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{person.address}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">퇴소유무</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">특이사항</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                이 학생은 수업을 너무 열심히 들으나 성적이 좋지못해 퇴소예정임
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">교육지원금 서명파일</dt>
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
