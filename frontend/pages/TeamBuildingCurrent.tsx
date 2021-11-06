import React, { ReactElement, useState, useEffect, Fragment } from "react";
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
import { Dialog, Transition } from "@headlessui/react";
import UserDetail from "../components/user/UserDetail";
import axios from 'axios'
import TeamDetail from "../components/Team/TeamDetail";
import TeamUserList from "../components/Team/TeamUserList";
import { ArrowLeftIcon } from "@heroicons/react/solid";
interface Props { }

function TeamBuildingCurrent({ }: Props): ReactElement {
  const router = useRouter();
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const endTime = moment("2021-12-25 24:00:00");
  var duration = moment.duration(endTime.diff(nowTime));
  var rest = duration.asSeconds();

  const [value, setValue] = React.useState("1");
  const [searchList, setSearchList] = useState<number[]>(TeamDump);
  const [isTeam, setIsTeam] = useState(false);
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const myTeam = () => {
    router.push(`/TeamDetail`);
  };
  // 팀생성
  const createTeam = () => {
    router.push(`/TeamCreate/?projectNo=${idx}`);
  };
  const idx = router.query.projectNo;
  // 팀이 있는지 체크
  const [myteamPk, setmyteamPk] = useState<number>(0)
  useEffect(() => {
    if (router.query.projectNo) {
      const token: string | null = localStorage.getItem("token")
      if (typeof token === "string") {
        axios.get(`/api/team/myteam/${router.query.projectNo}`, {
          headers: { Authorization: token }
        })
          .then((res: any) => {
            console.log(res)
            setmyteamPk(res.data.data)
            if (res.data.data > 0) {
              setIsTeam(true)
            } else {
              setIsTeam(false)
            }
          })
      }
    }
  }, [router.query.projectNo])

  // 팀 현황
  const [teamlist, setteamlist] = useState<any>([])
  useEffect(() => {
    if (router.query.projectNo) {
      const token: string | null = localStorage.getItem("token")
      if (typeof token === "string") {
        axios.get(`/api/team/${router.query.projectNo}`, {
          headers: { Authorization: token }
        })
          .then((res: any) => {
            console.log(1)
            console.log(res.data.data);
            setteamlist([...res.data.data])
          })
          .catch((err) => alert(err))
      }
    }
  }, [router.query.projectNo])
  // 유저정보 모달창
  const [isOpen, setIsOpen] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [userPkdata, setuserPkdata] = useState<number>(0)
  function userdetail(userPk: number) {
    setIsOpen(true)
    setuserPkdata(userPk)
  }
  function closeModal() {
    setIsOpen(false);
    setShowUser(false);
  }
  function openModal(person: number) {
    setIsOpen(true);
  }
  // 팀정보 모달창
  const [isTeamOpen, setisTeamOpen] = useState(false);
  const [showTeamUser, setShowTeamUser] = useState(false);
  const [teamPkdata, setteamPkdata] = useState<number>(0)
  const [teamNamedata, setteamNamedata] = useState<string>("")
  const [teammodalUserPK, setteammodalUserPK] = useState<number>(0)
  function teamdata(pk: number, name: string) {
    setisTeamOpen(true);
    setteamPkdata(pk);
    setteamNamedata(name)
  }
  const apply = () => {
    alert(`${teamPkdata}팀에 지원했습니다.`);
  };
  function closeTeamModal() {
    setisTeamOpen(false);
    setShowTeamUser(false);
  }
  return (
    <div className="">
      <Navbar />
      <div className="text-center">
        {
          isTeam
            ? <MyTeamDetail teamPK={myteamPk} />
            : null
        }
        <br />
        <div className="grid grid-cols-2 mt-4 w-2/3 mx-auto">
          <div className="self-center place-self-start ml-4 font-bold text-xl">
            {idx === "0" ? "공통 프로젝트" : idx === "1" ? "특화 프로젝트" : "자율 프로젝트"}
          </div>
          <div className="place-self-end">
            {isTeam ? (
              null
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
        <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg w-2/3 mx-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Team Name
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
              {teamlist.map((team: any, i: number) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 cursor-pointer" onClick={() => { teamdata(team.teamDto.teamPK, team.teamDto.name) }}>{team.teamDto.name}</div>
                  </td>
                  {team.teamDto.teamuser.map((member: any, i: number) => (
                    <td className="px-6 py-4 whitespace-nowrap" key={i}>
                      <div className="text-sm font-medium text-gray-900 cursor-pointer" onClick={() => userdetail(member.userPk)}>{member.userName}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* 유저모달창 */}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0  " onClose={closeModal}>
              <div className="flex justify-center my-8  text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="fixed inline-block min-w-md max-w-5xl p-6 h-9/10  transition-all transform text-left bg-white rounded-2xl overflow-auto scrollbar-hide">
                    <div className="mt-2 ">
                      <p className="text-sm text-gray-500  ">
                        <UserDetail userPk={userPkdata} />
                      </p>
                    </div>

                    <div className="mt-4 flex flex-row space-x-2 justify-center">

                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        창 닫기
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
          {/* 팀정보 */}
          <Transition appear show={isTeamOpen} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0  " onClose={closeTeamModal}>
              <div className="flex justify-center my-8  text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {showTeamUser ? (
                    <div className="fixed inline-block min-w-md max-w-5xl p-6 h-9/10  transition-all transform text-left bg-white rounded-2xl  overflow-auto scrollbar-hide">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 text-left flex flex-row m-2 hover:underline cursor-pointer"
                        onClick={() => setShowTeamUser(false)}
                      >
                        <ArrowLeftIcon className="text-sm" width="20px" />
                        뒤로 가기
                      </Dialog.Title>
                      <div className="mt-2 ">
                        <p className="text-sm text-gray-500  ">
                          <UserDetail userPk={teammodalUserPK} />
                        </p>
                      </div>

                      <div className="mt-4 flex flex-row space-x-2 justify-center">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={apply}
                        >
                          MM 보내기
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={closeTeamModal}
                        >
                          창 닫기
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="fixed inline-block min-w-lg max-w-5xl p-6 h-9/10  transition-all transform text-left bg-white rounded-2xl overflow-auto scrollbar-hide">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                      >
                        {teamNamedata}팀 정보
                      </Dialog.Title>
                      <div className="mt-2 ">
                        <p className="text-sm text-gray-500  ">
                          <TeamDetail teamPK={teamPkdata} />
                          <TeamUserList teamPK={teamPkdata} showUser={setShowTeamUser} teammodalUserPK={setteammodalUserPK} />
                        </p>
                      </div>

                      <div className="mt-4 flex flex-row space-x-2 justify-center">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={apply}
                        >
                          지원하기
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={closeTeamModal}
                        >
                          창 닫기
                        </button>
                      </div>
                    </div>
                  )}
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>
        {/* 받은 제안 보기 */}
        {isTeam ? (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-4 w-4/5  mx-auto">
            <div>
              <div className="font-bold my-5">교육생에게 보낸 제안</div>
              <UserOfferList list={searchList} />
            </div>
            <div>
              <div className="font-bold my-5">교육생에게 받은 제안</div>
              <UserOfferedList list={searchList} />
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-4 w-4/5  mx-auto">
            <div>
              <div className="font-bold my-5">팀에게 보낸 제안</div>
              <TeamOfferList list={searchList} />
            </div>
            <div>
              <div className="font-bold my-5">팀에게 받은 제안</div>
              <TeamOfferedList list={searchList} />
            </div>
          </div>
        )}
        {/* 검색 기능 */}
        <div className="mt-20 w-5/6 mx-auto">
          <div className="font-bold text-3xl">찾아보기</div>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="팀 검색" value="1" />
                <Tab label="교육생 검색" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <TeamSearchHashTag projectCode={Number(idx)} />
            </TabPanel>
            <TabPanel value="2">
              <UserSearchHashTag projectCode={Number(idx)} />
            </TabPanel>
          </TabContext>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamBuildingCurrent;
