import React, { ReactElement, useState, useEffect, Fragment, useRef } from "react";
import Navbar from "../components/basic/Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";
import Footer from "../components/basic/Footer";
import MyTeamDetail from "../components/Team/MyTeamDetail";
import TeamSearchHashTag from "../components/hashtag/TeamSearchHashTag";
import UserSearchHashTag from "../components/hashtag/UserSearchHashTag";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TeamOfferList from "../components/Team/TeamOfferList";
import TeamOfferedList from "../components/Team/TeamOfferedList";
import UserOfferList from "../components/user/UserOfferList";
import UserOfferedList from "../components/user/UserOfferedList";
import axios from "axios";
import TeambuildingNow from "../components/Team/TeambuildingNow";
import "aos/dist/aos.css";
import Aos from "aos";

interface Props {}

function TeamBuildingCurrent({}: Props): ReactElement {
  const router = useRouter();
  // const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  // const endTime = moment("2021-12-25 24:00:00");
  // var duration = moment.duration(endTime.diff(nowTime));
  // var rest = duration.asSeconds();
  const projectCode: any = router.query.projectNo;

  const [value, setValue] = React.useState("1");
  const [searchList, setSearchList] = useState<number[]>([]);
  const [isTeam, setIsTeam] = useState(false);
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  // 팀생성
  const createTeam = () => {
    router.push(`/TeamCreate/?projectNo=${projectCode}`);
  };
  // 팀이 있는지 체크
  const [myteamPk, setmyteamPk] = useState<number>(0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    setmyteamPk(0);
    setIsTeam(false);
    setleadercheck(false);
    if (projectCode) {
      const token: string | null = localStorage.getItem("token");
      if (typeof token === "string") {
        axios
          .get(`/api/team/myteam/${projectCode}`, {
            headers: { Authorization: token },
          })
          .then((res: any) => {
            setmyteamPk(res.data.data);
            if (res.data.data > 0) {
              setIsTeam(true);
            }
          });
      }
    }
  }, [projectCode]);
  const [leadercheck, setleadercheck] = useState<boolean>(false);
  useEffect(() => {
    if (myteamPk) {
      const mmid: string | null = localStorage.getItem("mmid");
      if (typeof mmid === "string") {
        axios
          .get(`/api/team/teamuser/${myteamPk}`)
          .then((res: any) => {
            {
              res.data.data.map(async (member: any, i: number) => {
                if (member.isLeader === true && mmid === member.mmid) {
                  setleadercheck(true);
                }
              });
            }
          })
          .catch(() => alert("통신이 불안정합니다, 다시 시도해주세요"));
      }
    }
  }, [myteamPk]);
  return (
    <div className="">
      <Navbar />
      <div className="text-center">
        <section data-aos="fade-up" className="">
          {isTeam ? <MyTeamDetail teamPK={myteamPk} /> : null}
          <br />
          <div className="grid grid-cols-2 mt-4 w-2/3 mx-auto">
            <div className="self-center place-self-start ml-4 font-bold text-xl">
              {projectCode === "0"
                ? "공통 프로젝트"
                : projectCode === "1"
                ? "특화 프로젝트"
                : "자율 프로젝트"}
            </div>
            <div className="place-self-end">
              {isTeam ? null : (
                <button
                  type="button"
                  className=" px-8 py-2 bg-gray-600 text-white rounded-lg  shadow-sm hover:bg-gray-500 focus:ring-2 focus:ring-indigo-200 m-2 "
                  onClick={createTeam}
                >
                  팀 생성
                </button>
              )}
            </div>
          </div>
          <div className="mb-3 font-bold text-black my-5">생성된 팀목록</div>
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg w-2/3 mx-auto">
            <TeambuildingNow leaderCheck={leadercheck} projectCode={projectCode} />
          </div>
          {/* 받은 제안 보기 */}
          {isTeam ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-4 w-2/3  mx-auto space-x-2">
              <div>
                <div className="font-bold my-5">교육생에게 보낸 제안</div>
                <UserOfferList
                  projectCode={projectCode}
                  leadercheck={leadercheck}
                  myTeamPK={myteamPk}
                />
              </div>
              <div>
                <div className="font-bold my-5">교육생에게 받은 제안</div>
                <UserOfferedList
                  projectCode={projectCode}
                  leadercheck={leadercheck}
                  myTeamPK={myteamPk}
                />
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-4 w-2/3  mx-auto space-x-2">
              <div>
                <div className="font-bold my-5">팀에게 보낸 제안</div>
                <TeamOfferList projectCode={projectCode} />
              </div>
              <div>
                <div className="font-bold my-5">팀에게 받은 제안</div>
                <TeamOfferedList projectCode={projectCode} />
              </div>
            </div>
          )}
          {/* 검색 기능 */}
          <div className="mt-20 w-2/3  mx-auto">
            <div className="font-bold text-3xl">찾아보기</div>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="팀 검색" value="1" />
                  <Tab label="교육생 검색" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <TeamSearchHashTag projectCode={Number(projectCode)} />
              </TabPanel>
              <TabPanel value="2">
                <UserSearchHashTag projectCode={Number(projectCode)} leadercheck={leadercheck} />
              </TabPanel>
            </TabContext>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default TeamBuildingCurrent;
