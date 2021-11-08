import React, { EventHandler, ReactElement, useState, useEffect } from "react";
import Navbar from "../components/basic/Navbar";
import axios from "axios";
import Footer from "../components/basic/Footer";
import TeamModifyHashTag from "../components/hashtag/TeamModifyHashTag";
import { useRouter } from "next/router";

interface Props {}

// interface list {
//   hashTagPK: number;
//   title: string;
//   prop: string;
//   image: string;
// }

function TeamModify({}: Props): ReactElement {
  const router = useRouter();
  // 팀 정보 미리 가져오기
  const [webex, setwebex] = useState<string>("");
  const [introduce, setintroduce] = useState<string>("");
  const [can, setCan] = useState<number[]>([]);
  const [teamTags, setTeamTags] = useState<any>({});
  useEffect(() => {
    if (router.query.teamPk) {
      const token: string | null = localStorage.getItem("token");
      if (typeof token === "string") {
        axios
          .get(`/api/team/detail/${router.query.teamPk}`, {
            headers: { Authorization: token },
          })
          .then((res: any) => {
            console.log(res.data);
            setwebex(res.data.data.webexLink);
            setintroduce(res.data.data.introduce);
          })
          .catch((err) => alert(err));
        axios
          .get(`/api/team/info/${router.query.teamPk}`, {
            headers: { Authorization: token },
          })
          .then((res: any) => {
            console.log(res);
            setTeamTags(res.data.data);
          })
          .catch((err) => alert(err));
      }
    }
  }, [router.query.teamPk]);
  function editTeaminfo() {
    const token: string | null = localStorage.getItem("token");
    if (typeof token === "string") {
      console.log(introduce, webex);
      axios
        .put(
          "/api/team/update",
          {
            teamPK: router.query.teamPk,
            introduceTeam: introduce,
            webex: webex,
            want: can,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res: any) => {
          console.log(res);
          alert("팀정보 수정을 완료하였습니다");
          setTimeout(() => {
            history.go(-1);
          }, 1000);
        })
        .catch((err) => alert(err));
    }
  }
  return (
    <div>
      <Navbar />
      <div className="w-3/5 mx-auto text-center">
        <div className="shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="px-4 py-5 sm:px-6">
            <p className="text-lg leading-6 font-medium text-gray-900">팀정보 수정하기</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">팀 소개</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  defaultValue={introduce}
                  onChange={(e) => setintroduce(e.target.value)}
                />
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">웹엑스 주소</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  defaultValue={webex}
                  onChange={(e) => setwebex(e.target.value)}
                />
              </div>
            </dl>
          </div>
        </div>
        <div className="">
          <TeamModifyHashTag onCanChanged={setCan} teamHashTag={teamTags} />
        </div>

        <div className="mt-5 text-right">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-blue-100 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-blue-50 mr-3"
              onClick={editTeaminfo}
            >
              팀 정보 수정
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
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

export default TeamModify;
