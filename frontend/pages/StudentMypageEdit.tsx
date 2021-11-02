import React, { ReactElement, useEffect, useState } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import { useRouter } from "next/router";
import { PaperClipIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import UserHashTag from "../components/hashtag/UserHashTag";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
interface Props {}

interface list {
  hashTagPK: number;
  title: string;
  prop: string;
  image: string;
}
function StudentMypage({}: Props): ReactElement {
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
  const router = useRouter();
  const PK = router.query.userPK;
  const [can, setCan] = useState<list[]>([]);
  const [want, setWant] = useState<list[]>([]);
  // 퇴소처리
  function leave(PK: number) {
    return;
  }
  const phoneChange = (value: String) => {
    console.log(value);
  };
  // 로그인정보 헤더 보내서 유저정보 가져오기
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <StudentNavbar />
      <div className="mx-48">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">내 정보 수정</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">연락처</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  defaultValue="010-1234-1234"
                  onChange={(e) => phoneChange(e.target.value)}
                />
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">GITHUB 주소</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  defaultValue="010-1234-1234"
                  onChange={(e) => phoneChange(e.target.value)}
                />
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">블로그 주소</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  defaultValue="010-1234-1234"
                  onChange={(e) => phoneChange(e.target.value)}
                />
              </div>
              {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">백준 티어</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">플레1</dd>
              </div> */}
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">자기 소개</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  defaultValue="010-1234-1234"
                  onChange={(e) => phoneChange(e.target.value)}
                />
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-4 font-bold text-lg">기술스택 등록</div>
        <DndProvider backend={HTML5Backend}>
          <UserHashTag onCanChanged={setCan} onWantChanged={setWant} />
        </DndProvider>

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
