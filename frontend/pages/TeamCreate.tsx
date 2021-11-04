import React, { EventHandler, ReactElement, useState } from "react";
import Navbar from "../components/basic/Navbar";
import axios from "axios";
import Footer from "../components/basic/Footer";
import TeamCreateHashTag from "../components/hashtag/TeamCreateHashTag";
import { useRouter } from "next/router";
import moment from 'moment'

interface Props { }

// interface list {
//   hashTagPK: number;
//   title: string;
//   prop: string;
//   image: string;
// }

function TeamCreate({ }: Props): ReactElement {
  const router = useRouter()
  const idx = router.query.projectNo;
  const [can, setCan] = useState<number[]>([]);
  const [teamtitle, setteamtitle] = useState<string>("");
  const [teamIntro, setTeamIntro] = useState<string>("");
  const [teamWebex, setTeamWebex] = useState<string>("");
  // const create = () => {
  //   console.log(`team소개: ${teamIntro}  team 웹엑스 링크: ${teamWebex}`);
  //   console.log(can);

  // };
  function create() {
    // token
    const token: string | null = localStorage.getItem("token")
    const MMtoken: string | null = localStorage.getItem("mmtoken")
    const username: string | null = localStorage.getItem("username")
    const now = moment().format('YYYYMMDDHHmmss')
    // mattermost 채널생성
    if (typeof MMtoken === "string" && typeof username == "string") {
      axios.post('/api/v4/channels', {
        team_id: "tfctt9yko7f93jge3itn1tseoo",
        type: "P",
        display_name: username + "님의 프로젝트",
        name: teamtitle,
      },
        {
          headers: { Authorization: MMtoken }
        })
        .then((res: any) => {
          if (typeof token === "string") {
            axios.post('/api/team/create', {
              introduceTeam: teamIntro,
              webex: teamWebex,
              want: can,
              name: teamtitle,
              projectCode: Number(idx),
              mmChannel: res.data.id
            },
              { headers: { Authorization: token } }
            )
              .then((res) => console.log(res))
          }
        })
    }
  }
  const onTeamIntroChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setteamtitle(e.target.value);
  };
  const onTeamTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamIntro(e.target.value);
  };
  const onTeamWebexChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamWebex(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="w-2/3 mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">팀 만들기</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">팀 이름</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  placeholder="팀 이름을 입력해주세요"
                  onChange={(e) => onTeamTitleChanged(e)}
                />
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">팀 소개</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  placeholder="팀 소개를 입력해주세요"
                  onChange={(e) => onTeamIntroChanged(e)}
                />
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">웹엑스 주소</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  placeholder="웹엑스 주소를 입력해주세요"
                  onChange={(e) => onTeamWebexChanged(e)}
                />
              </div>
            </dl>
          </div>
        </div>
        <TeamCreateHashTag onCanChanged={setCan} />
        <div className="mt-5 text-right">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border bg-blue-100 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-blue-50"
              onClick={create}
            >
              팀 생성
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

export default TeamCreate;
