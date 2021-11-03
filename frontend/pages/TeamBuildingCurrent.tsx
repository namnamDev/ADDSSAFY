import React, { ReactElement, useState } from "react";
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
import TeamDump from "../dummy/json/teamDump.json";
import TeamOfferList from "../components/Team/TeamOfferList";
import TeamOfferedList from "../components/Team/TeamOfferedList";
import UserOfferList from "../components/user/UserOfferList";
import UserOfferedList from "../components/user/UserOfferedList";
interface Props { }

function TeamBuildingCurrent({ }: Props): ReactElement {
  const router = useRouter();
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const endTime = moment("2021-12-25 24:00:00");
  var duration = moment.duration(endTime.diff(nowTime));
  var rest = duration.asSeconds();

  const [value, setValue] = React.useState("1");
  const [searchList, setSearchList] = useState<number[]>(TeamDump);
  const [isTeam, setIsTeam] = useState(true);
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const myTeam = () => {
    router.push(`/TeamDetail`);
  };
  const createTeam = () => {
    router.push(`/TeamCreate`);
  };
  const idx = router.query.projectNo;

  // 팀 현황
  const Teams = [
    {
      teamId: 1,
      leader: "Jane Cooper",
      members: ["a", "b", "c", "d", "e"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      teamId: 2,
      leader: "Jane Cooper",
      members: ["a", "b", "c", "d", "e"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      teamId: 3,
      leader: "Jane Cooper",
      members: ["a", "b", "c", "d", "e"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return (
    <div className="">
      <Navbar />
      <div className="text-center w-2/3 mx-auto">
        <MyTeamDetail />
        <div className="grid grid-cols-2 mt-4">
          <div className="self-center place-self-start ml-4 font-bold text-xl">
            {idx === "1" ? "공통 프로젝트" : idx === "2" ? "특화 프로젝트" : "자율 프로젝트"}
          </div>
          <div className="place-self-end">
            {isTeam ? (
              <button
                type="button"
                className=" px-8 py-2 bg-gray-600 text-white rounded-lg  shadow-sm hover:bg-gray-500 focus:ring-2 focus:ring-indigo-200 m-2 "
                onClick={myTeam}
              >
                내 팀 보기
              </button>
            ) : (
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
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team Leader
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team Member1
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team Member2
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team Member3
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team Member4
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team Member5
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Teams.map((team) => (
                <tr key={team.teamId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={team.image}
                          alt=""
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{team.leader}</div>
                      </div>
                    </div>
                  </td>
                  {team.members.map((member) => (
                    <td className="px-6 py-4 whitespace-nowrap" key={member}>
                      <div className="text-sm text-gray-900">{member}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 받은 제안 보기 */}
        {isTeam ? (
          <div className="grid grid-cols-2 mt-4">
            <div>
              <div className="font-bold">교육생에게 보낸 제안</div>
              <UserOfferList list={searchList} />
            </div>
            <div>
              <div className="font-bold">교육생에게 받은 제안</div>
              <UserOfferedList list={searchList} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 mt-4">
            <div>
              <div className="font-bold">팀에게 보낸 제안</div>
              <TeamOfferList list={searchList} />
            </div>
            <div>
              <div className="font-bold">팀에게 받은 제안</div>
              <TeamOfferedList list={searchList} />
            </div>
          </div>
        )}
        {/* 검색 기능 */}
        <div className="mt-4">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="팀 검색" value="1" />
                <Tab label="교육생 검색" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <TeamSearchHashTag />
            </TabPanel>
            <TabPanel value="2">
              <UserSearchHashTag />
            </TabPanel>
          </TabContext>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamBuildingCurrent;
