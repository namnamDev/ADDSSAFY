import React, { ReactElement, useEffect, useState } from "react";
import Navbar from "../components/basic/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import UserCreateHashTag from "../components/hashtag/UserCreateHashTag";
import Footer from "../components/basic/Footer";
import axios from "axios";
interface Props { }

interface list {
  hashTagPK: number;
  title: string;
  prop: string;
  image: string;
}
function Mypage({ }: Props): ReactElement {
  const router = useRouter();
  const PK = router.query.userPK;
  const [can, setCan] = useState<number[]>([]);

  // 로그인정보 헤더 보내서 유저정보 가져오기
  const [userinfo, setuserinfo] = useState<any>({});
  const [usertags, setusertags] = useState<any>({});
  const [myteamhistory, setmyteamhistory] = useState<any>({});
  const [mytoken, setmytoken] = useState<string>("");
  // 정보수정을 위한 변수들
  const [changePhone, setchangePhone] = useState<string>("");
  const [changeGit, setchangeGit] = useState<string>("");
  const [changeBlog, setchangeBlog] = useState<string>("");
  const [changeIntroduce, setchangeIntroduce] = useState<string>("");
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    if (typeof token === "string") {
      setmytoken(token);
      axios
        .get("/api/users/mypage", {
          headers: { Authorization: token },
        })
        .then((res: any) => {
          console.log(res);
          setuserinfo(res.data.data.userDetailDto);
          setusertags(res.data.data.memberHashTags);
          setmyteamhistory(res.data.data.userDetailDto.teamList);
          setchangePhone(res.data.data.userDetailDto.userPhone);
          setchangeGit(res.data.data.userDetailDto.git);
          setchangeBlog(res.data.data.userDetailDto.blog);
          setchangeIntroduce(res.data.data.userDetailDto.introduce);
        })
        .catch(() => alert("회원님의 정보를 가져올 수 없습니다, 다시 로그인해주세요"));
    }
  }, []);
  // 정보수정

  function editmydata() {
    axios
      .put(
        "/api/users/update",
        {
          blog: changeBlog,
          introduce: changeIntroduce,
          github: changeGit,
          phone: changePhone,
          can: can,
        },
        { headers: { Authorization: mytoken } }
      )
      .then(() => {
        alert("회원정보수정 완료했습니다.");
        setTimeout(() => {
          router.push("/Mypage");
        }, 1000);
      })
      .catch(() => {
        alert("정보수정에 실패했습니다, 다시 시도해주세요");
      });
  }
  return (
    <div>
      <Navbar />
      <div className="w-3/5 mx-auto text-center">
        <div className=" shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-bold text-gray-900">내 정보 수정</h3>
          </div>
          <div className="">
            <dl>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-500">이름</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userinfo.userName}
                </dd>
              </div>
              {/* 프로젝트 */}
              {myteamhistory.length > 0 ? (
                <div>
                  {Object.values(myteamhistory).map((team: any, i: any) => (
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" key={i}>
                      {team.projectCode === 0 ? (
                        <dt className="text-sm font-bold text-gray-500">공통프로젝트</dt>
                      ) : null}{" "}
                      {team.projectCode === 1 ? (
                        <dt className="text-sm font-bold text-gray-500">특화프로젝트</dt>
                      ) : null}
                      {team.projectCode === 2 ? (
                        <dt className="text-sm font-bold text-gray-500">자율프로젝트</dt>
                      ) : null}
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {team.name}
                      </dd>
                    </div>
                  ))}
                </div>
              ) : null}
              {/*  */}
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-500">이메일주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    defaultValue={userinfo.email}
                    disabled
                  />
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-500">연락처</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    defaultValue={userinfo.userPhone}
                    onChange={(e) => setchangePhone(e.target.value)}
                  />
                </dd>
              </div>
              {/* 기술스택 */}
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-500">GITHUB 주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                  <input
                    type="text"
                    defaultValue={userinfo.git}
                    onChange={(e) => setchangeGit(e.target.value)}
                  />
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-500">블로그 주소</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer hover:underline">
                  <input
                    type="text"
                    defaultValue={userinfo.blog}
                    onChange={(e) => setchangeBlog(e.target.value)}
                  />
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-500">자기 소개</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    defaultValue={userinfo.introduce}
                    onChange={(e) => setchangeIntroduce(e.target.value)}
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <UserCreateHashTag onCanChanged={setCan} userHashTag={usertags} />
        <div className="mt-5 text-right">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-blue-100 rounded-md shadow-sm text-sm font-bold text-gray-700 hover:bg-blue-50"
              onClick={editmydata}
            >
              정보수정
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-white rounded-md shadow-sm text-sm font-bold text-gray-700 hover:bg-gray-50"
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
