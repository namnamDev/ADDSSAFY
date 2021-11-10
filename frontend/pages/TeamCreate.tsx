import React, { EventHandler, ReactElement, useState } from "react";
import Navbar from "../components/basic/Navbar";
import axios from "axios";
import Footer from "../components/basic/Footer";
import TeamCreateHashTag from "../components/hashtag/TeamCreateHashTag";
import { useRouter } from "next/router";
import moment from "moment";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface Props { }

function TeamCreate({ }: Props): ReactElement {
  const router = useRouter();
  const idx = router.query.projectNo;
  const [can, setCan] = useState<number[]>([]);
  const [teamtitle, setteamtitle] = useState<string>("");
  const [teamIntro, setTeamIntro] = useState<string>("");
  const [teamWebex, setTeamWebex] = useState<string>("");

  function create() {
    // token
    const token: string | null = localStorage.getItem("token");
    const MMtoken: string | null = localStorage.getItem("mmtoken");
    const username: string | null = localStorage.getItem("username");
    const now = moment().format("YYYYMMDDHHmmss");
    // mattermost 채널생성
    if (typeof MMtoken === "string" && typeof username == "string") {
      axios
        .post(
          "/api/v4/channels",
          {
            team_id: "tfctt9yko7f93jge3itn1tseoo",
            type: "P",
            display_name: username + "님의 프로젝트",
            name: now + username,
          },
          {
            headers: { Authorization: MMtoken },
          }
        )
        .then((res: any) => {
          if (typeof token === "string") {
            console.log("can오는지")
            console.log(can)
            axios
              .post(
                "/api/team/create",
                {
                  introduceTeam: teamIntro,
                  webex: teamWebex,
                  want: can,
                  name: teamtitle,
                  projectCode: Number(idx),
                  mmChannel: res.data.id,
                },
                { headers: { Authorization: token } }
              )
              .then((res) => {
                alert(`${teamtitle}팀이 정상적으로 생성되었습니다`);
                setTimeout(() => {
                  router.push({
                    pathname: `/TeamBuildingCurrent`,
                    query: { projectNo: Number(idx) },
                  });
                }, 500);
              });
          }
        });
    }
  }
  const onTeamIntroChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamIntro(e.target.value);
  };
  const onTeamTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setteamtitle(e.target.value);
  };
  const onTeamWebexChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamWebex(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="w-3/5 mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
          <div className="px-4 py-5 sm:px-6">
            <div className="text-lg leading-6 font-medium text-gray-900">팀 만들기</div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 text-center">팀 이름</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  placeholder="팀 이름을 입력해주세요"
                  onChange={(e) => onTeamTitleChanged(e)}
                />
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 text-center">팀 소개</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  placeholder="팀 소개를 입력해주세요"
                  onChange={(e) => onTeamIntroChanged(e)}
                />
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 text-center">웹엑스 주소</dt>
                <input
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  placeholder="웹엑스 주소를 입력해주세요"
                  onChange={(e) => onTeamWebexChanged(e)}
                />
              </div>
              <div className="bg-white px-4 py-5 w-2/3 mx-auto">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="text-bold">웹엑스 주소는 어디에?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="mb-5">Webex프로그램을 실행시킨 후,</div>
                    <Image src="/images/copywebexlink.gif" alt="" height="500" width="1000" />
                  </AccordionDetails>
                </Accordion>
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
