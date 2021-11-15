import React, { ReactElement, useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";
import TeamDetail from "./TeamDetail";
import TeamUserList from "./TeamUserList";
import { ArrowLeftIcon, MailIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import UserDetailModal from "../user/UserDetailModal";
import UserDetail from "../user/UserDetail";
import SendMM from "../user/SendMMmodal";

interface Props {
  projectCode: number;
  teamFlag: boolean;
  setTeamFlag: (value: any) => any;
  teamPK: number;
}
function TeamDetailModal({ projectCode, teamFlag, setTeamFlag, teamPK }: Props): ReactElement {
  // 팀정보 모달창
  const [showTeamUser, setShowTeamUser] = useState(false);
  const [teammodalUserPK, setteammodalUserPK] = useState<number>(0);
  const [teamButton, setTeamButton] = useState<number>(0);
  const [suggestPK, setsuggestPK] = useState<number>(0);
  const [suggestedTeamName, setsuggestedTeamName] = useState<string>("")
  useEffect(() => {
    getTeamButton();
    getSuggestPK();
    getTeamDetail();
  }, [teamFlag, teamPK]);
  async function getTeamButton() {
    if (projectCode === undefined) {
      return;
    }
    // 어떤 버튼을 활성화 할 것인지
    const token: string | null = localStorage.getItem("token");
    if (typeof token === "string") {
      await axios
        .get(`/api/team/teamButton/${teamPK}/${projectCode}`, {
          headers: { Authorization: token },
        })
        .then((res: any) => {
          setTeamButton(res.data.data);
        })
        .catch(() => alert("회원님의 정보를 가져올 수 없습니다, 다시 로그인해주세요"));
    }
  }
  function getSuggestPK() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/users/mypage", {
          headers: { Authorization: token },
        })
        .then((res: any) => {
          axios
            .get(`/api/team/check/${res.data.data.userDetailDto.userPk}/${teamPK}`, {
              headers: { Authorization: token },
            })
            .then((res: any) => {
              setsuggestPK(res.data.data);
            });
        });
    }
  }
  function getTeamDetail() {
    axios.get(`/api/team/detail/${teamPK}`)
      .then((res: any) => {
        if (res.data.data == null) {
          return
        }
        setsuggestedTeamName(res.data.data.name)
      })
  }
  function closeTeamModal() {
    setShowTeamUser(false);
  }
  // 제안 수락
  function accept() {
    const token: string | null = localStorage.getItem("token");
    const nickname: string | null = localStorage.getItem("nickname")
    if (token && nickname) {
      axios
        .post(
          "/api/team/recruit/user",
          {
            teamPK: teamPK,
            projectCode: Number(projectCode),
            suggestPK: suggestPK,
            suggest: true,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res: any) => {
          inviteUser(res.data.data.mmChannelId, res.data.data.leaderMMToken, nickname);

        });
    }
  }
  function inviteUser(channel_id: string, leaderMMToken: string, nickname: string) {
    const mmid: string | null = localStorage.getItem('mmid')
    const mmtoken: string | null = localStorage.getItem('mmtoken')
    if (typeof mmid === 'string' && mmtoken) {
      axios.post(`/api/v4/channels/${channel_id}/members`,
        {
          user_id: mmid
        },
        {
          headers: { Authorization: "Bearer " + leaderMMToken }
        })
        .then(() => {
          axios.post('/hooks/3hprxzpnzpygdk7eymrnirdd6o', {
            channel_id: "nie5fdtbkjykpynqwj5mynpwcy",
            text: `${nickname}님이 "${suggestedTeamName}"팀에 가입하였습니다`
          })
          alert("요청이 수락되어, 메타모스트채널에 초대되었습니다");
          axios
            .post(
              "/api/v4/posts",
              {
                channel_id: channel_id,
                message: "새멤버가 추가되었습니다, 안녕하세요~ *^^*",
              },
              {
                headers: { Authorization: mmtoken },
              }
            )
            .then(() => {
              location.reload();
            });
        });
    }
  }
  // 제안 거절
  function reject() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios.post(
        "/api/team/recruit/user",
        {
          teamPK: teamPK,
          projectCode: projectCode,
          suggestPK: suggestPK,
          suggest: false,
        },
        {
          headers: { Authorization: token },
        }
      );
    }
  }
  // 가입 신청
  function apply() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios
        .post(
          "/api/team/applyteam",
          {
            teamPK: teamPK,
            msg: "가입신청합니다",
          },
          {
            headers: { Authorization: token },
          }
        )
        .then(() => {
          alert("가입신청이 완료되었습니다");
          sendMessage("가입요청이 왔습니다");
        });
    }
  }
  function sendMessage(message: string) {
    const mymmid: string | null = localStorage.getItem("mmid");
    const mmtoken: string | null = localStorage.getItem("mmtoken");
    // 팀장mmid 가져오기
    if (mymmid && mmtoken)
      axios.get(`/api/team/leaderinfo/${teamPK}`).then((res: any) => {
        axios
          .post("/api/v4/channels/direct", [mymmid, res.data.data.mmid], {
            headers: { Authorization: mmtoken },
          })
          .then((res: any) => {
            axios
              .post(
                "/api/v4/posts",
                {
                  channel_id: res.data.id,
                  message: message,
                },
                {
                  headers: { Authorization: mmtoken },
                }
              )
              .then(() => {
                location.reload();
              });
          });
      });
  }
  // 가입 신청 철회
  function withdraw() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/users/mypage", {
          headers: { Authorization: token },
        })
        .then((res: any) => {
          axios
            .get(`/api/users/check/${res.data.data.userDetailDto.userPk}/${teamPK}`, {
              headers: { Authorization: token },
            })
            .then((res: any) => {
              axios
                .delete("/api/team/teamwithdraw", {
                  data: {
                    suggestPK: res.data.data,
                  },
                  headers: { Authorization: token },
                })
                .then(() => {
                  alert("가입신청이 철회되었습니다");
                  sendMessage("가입요청이 철회되었습니다");
                });
            });
        });
    }
  }
  return (
    <div>
      <Transition appear show={teamFlag} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0  " onClose={setTeamFlag}>
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
                    <div className="text-sm text-gray-500  ">
                      <UserDetail userPk={teammodalUserPK} />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-row space-x-2 justify-center">
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
                <div className="fixed inline-block sm:w-3/5 lg:w-1/3 p-6 h-9/10  transition-all transform text-left bg-white rounded-2xl overflow-auto scrollbar-hide">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  ></Dialog.Title>
                  <div className="mt-2 ">
                    <div className="text-sm text-gray-500  ">
                      <TeamDetail teamPK={teamPK} />
                      <br />
                      <TeamUserList
                        teamPK={teamPK}
                        showUser={setShowTeamUser}
                        teammodalUserPK={setteammodalUserPK}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-row space-x-2 justify-center">
                    {teamButton === 0 ? (
                      false
                    ) : teamButton === 1 ? (
                      <>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-gray-300 shadow-sm border-transparent rounded-md text-gray-700 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={() => accept()}
                        >
                          팀의 제안 수락
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-gray-300 shadow-sm border-transparent rounded-md text-gray-700 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={() => reject()}
                        >
                          팀의 제안 거절
                        </button>
                      </>
                    ) : teamButton === 2 ? (
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-gray-300 shadow-sm border-transparent rounded-md text-gray-700 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => withdraw()}
                      >
                        팀 가입 신청 취소
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-gray-300 shadow-sm border-transparent rounded-md text-gray-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => apply()}
                      >
                        팀 가입 신청
                      </button>
                    )}

                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-gray-300 shadow-sm border-transparent rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => setTeamFlag(false)}
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
  );
}

export default TeamDetailModal;
