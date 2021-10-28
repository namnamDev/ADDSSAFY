import React, { ReactElement, useEffect } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import { useRouter } from "next/router";
interface Props {}

function StudentMypage({}: Props): ReactElement {
  const person = {
    userId: 1,
    userName: "김철수",
    email: "a@a.com",
    status: "string",
    classRegion: "구미",
    classNumber: 1,
    userPhone: "010-0000-0000",
    userAddress: "구미 진평동 구미대로 11-111",
    profile: "",
    userClassNumber: 1234,
  };
  const router = useRouter();
  const PK = router.query.userPK;
  // 퇴소처리
  function leave(PK: number) {
    return;
  }
  // 로그인정보 헤더 보내서 유저정보 가져오기
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <ProNavbar />
      <div className="mx-48">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              내정보
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">사진</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.profile}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">이름</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.userName}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  학번(지역, 기수)
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.userClassNumber} ({person.classRegion},
                  {person.classNumber}반)
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.userAddress}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">연락처</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.userPhone}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  이메일주소
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.email}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-5 text-right">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-blue-100 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-blue-50"
              //   onClick={() =>
              //     router.push(
              //     )
              //   }
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
    </div>
  );
}

export default StudentMypage;
