import React, { ReactElement, useEffect, useState } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import { PaperClipIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Footer from "../components/basic/Footer";
import Image from "next/image";
import axios from "axios";
interface Props {}

function StudentMypage({}: Props): ReactElement {
  const person = {
    name: "Jane Cooper",
    userId: 1,
    userName: "김철수",
    email: "a@a.com",
    status: "string",
    classRegion: "구미",
    classNumber: 1,
    userPhone: "010-0000-0000",
    userAddress: "구미 진평동 구미대로 11-111",
    profile: "",
    studentNumber: 1234,
  };
  const router = useRouter();
  const PK = router.query.userPK;

  // 로그인정보 헤더 보내서 유저정보 가져오기
  useEffect(() => {
    return () => {};
  }, []);
  // 정보수정
  const [editinfo, seteditinfo] = useState<boolean>(false);
  const [editemail, seteditemail] = useState(person.email);
  const [editphone, seteditphone] = useState(person.userPhone);
  const [useraddress, setuseraddress] = useState(person.userAddress);
  //   axios.put('',{

  //   },
  //     {
  //       headers: { Authorization: localStorage.getItem("token") },
  // })
  return (
    <div>
      <ProNavbar />
      <div className="w-1/2 mx-auto">
        <div className="shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">내정보</h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="text-center mt-10">
              <Image src="/images/ExampleImage.jpg" alt="" height="150" width="150"></Image>
            </div>
            <dl>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">이름</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{person.name}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">이메일주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.userAddress}
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">지역</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.classRegion}
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">반</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {person.classNumber}
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">주소</dt>
                {editinfo ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      defaultValue={person.userAddress}
                      className="w-full"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </dd>
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {person.userAddress}
                  </dd>
                )}
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">연락처</dt>
                {editinfo ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      defaultValue={person.userPhone}
                      className="w-full"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </dd>
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {person.userPhone}
                  </dd>
                )}
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">이메일주소</dt>
                {editinfo ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      defaultValue={person.email}
                      className="w-full"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </dd>
                ) : (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {person.email}
                  </dd>
                )}
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-5 text-right">
          <span className="hidden sm:block">
            {editinfo ? (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border bg-green-700 rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-50 hover:text-black mr-3"
                onClick={() => seteditinfo(false)}
              >
                수정완료
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border bg-blue-700 rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-50 hover:text-black mr-3"
                onClick={() => seteditinfo(true)}
              >
                정보수정
              </button>
            )}
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-red-400"
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

export default StudentMypage;
