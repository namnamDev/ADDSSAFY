import React, { ReactElement, useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";
import TeamDetail from "./TeamDetail";
import TeamUserList from "./TeamUserList";
import { ArrowLeftIcon, MailIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import UserDetailModal from "../user/UserDetailModal";
import UserDetail from "../user/UserDetail";

interface Props {
  projectCode: number;
  teamFlag: boolean;
  setTeamFlag: (value: any) => any;
  teamPK: number;
  suggestPK?: number;
}

function TeamDetailModal({
  projectCode,
  teamFlag,
  setTeamFlag,
  teamPK,
  suggestPK,
}: Props): ReactElement {
  // 팀정보 모달창
  const [showTeamUser, setShowTeamUser] = useState(false);
  const [teammodalUserPK, setteammodalUserPK] = useState<number>(0);
  const [teamButton, setTeamButton] = useState<number>(0);
  useEffect(() => {
    getTeamButton();
  }, [teamFlag, teamPK]);
  async function getTeamButton() {
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
  function closeTeamModal() {
    setShowTeamUser(false);
  }
  // 제안 수락
  function accept() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios.post(
        "/api/team/recruit/user",
        {
          teamPk: teamPK,
          projectCode: projectCode,
          suggetPK: suggestPK,
          boolean: true,
        },
        {
          headers: { Authorization: token },
        }
      );
    }
  }
  // 제안 거절
  function reject() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios.post(
        "/api/team/recruit/user",
        {
          teamPk: teamPK,
          projectCode: projectCode,
          suggetPK: suggestPK,
          boolean: false,
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
      axios.post(
        "/api/team/applyteam",
        {
          teamPK: teamPK,
          msg: "가입신청합니다",
        },
        {
          headers: { Authorization: token },
        }
      );
    }
  }
  // 가입 신청 철회
  function withdraw() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios.delete("/api/team/teamwithdraw", {
        headers: { Authorization: token },
        data: {
          suggetPK: suggestPK,
        },
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
                    <p className="text-sm text-gray-500  ">
                      <UserDetail userPk={teammodalUserPK} />
                    </p>
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
                <div className="fixed inline-block min-w-lg max-w-5xl p-6 h-9/10  transition-all transform text-left bg-white rounded-2xl overflow-auto scrollbar-hide">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  ></Dialog.Title>
                  <div className="mt-2 ">
                    <p className="text-sm text-gray-500  ">
                      <TeamDetail teamPK={teamPK} />
                      <TeamUserList
                        teamPK={teamPK}
                        showUser={setShowTeamUser}
                        teammodalUserPK={setteammodalUserPK}
                      />
                    </p>
                  </div>

                  <div className="mt-4 flex flex-row space-x-2 justify-center">
                    {teamButton === 0 ? (
                      false
                    ) : teamButton === 1 ? (
                      <>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={() => accept()}
                        >
                          팀의 제안 수락
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={() => reject()}
                        >
                          팀의 제안 거절
                        </button>
                      </>
                    ) : teamButton === 2 ? (
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => withdraw()}
                      >
                        팀 가입 신청 취소
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => apply()}
                      >
                        팀 가입 신청
                      </button>
                    )}

                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
