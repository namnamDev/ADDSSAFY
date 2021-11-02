import React, { ReactElement } from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
import ProNavbar from "../components/basic/ProNavbar";
import { useRouter } from "next/router";
import Footer from "../components/basic/Footer";

interface Props { }

function ManageUserDetailEdit({ }: Props): ReactElement {
  const router = useRouter();
  const PK = router.query.userPK;
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
  function edit(params: number) {
    return;
  }
  return (
    <div>
      <ProNavbar />
      <div className="mx-48">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">교육생 정보</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">이름</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">생년월일</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  ?
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input type="text" value={person.address} />
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">연락처</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input value="01000000000" />
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  1학기 월말평가 점수평균
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  100
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  1학기 과목평가 점수평균
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  0
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  이메일주소
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.address}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">퇴소유무</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  O
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">특이사항</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  이 학생은 수업을 너무 열심히 들으나 성적이 좋지못해 퇴소예정임
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  교육지원금 서명파일
                </dt>
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
                          <span className="ml-2 flex-1 w-0 truncate">
                            {month}.jpg
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-blue-600 hover:text-blue-500"
                          >
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
        <div className="mt-5 text-right">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-red-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-red-50"
              onClick={() => edit(person.userId)}
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

export default ManageUserDetailEdit;
