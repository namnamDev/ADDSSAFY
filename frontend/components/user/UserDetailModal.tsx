import React, { ReactElement, useState, Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import UserDetail from "./UserDetail";
import axios from "axios";
import { useRouter } from "next/router";
interface Props {
  flag: boolean;
  projectCode: number;
  userPK: number;
  mmid: string;
  leaderCheck: boolean;
  setflag: (value: any) => any;
}

function UserDetailModal({
  flag,
  projectCode,
  userPK,
  mmid,
  leaderCheck,
  setflag,
}: Props): ReactElement {
  const [userButton, setUserButton] = useState();
  const [suggestPK, setSuggestPK] = useState<number>(0)
  const [teamPK, setTeamPK] = useState<number>(0)
  useEffect(() => {
    if (userPK) {
      const token: string | null = localStorage.getItem("token");
      if (typeof token === "string" && leaderCheck) {
        axios
          .get(`/api/team/userButton/${userPK}/${projectCode}`, {
            headers: { Authorization: token },
          })
          .then((res: any) => {
            setUserButton(res.data.data);
          })
          .catch(() => alert("회원님의 정보를 가져올 수 없습니다, 다시 로그인해주세요"));
        // teamPK받아오기
        axios
          .get(`/api/team/myteam/${projectCode}`, {
            headers: { Authorization: token },
          })
          .then((res: any) => {
            console.log('teampk', res.data.data)
            setTeamPK(res.data.data);
            // sugPK 받아오기
            axios.get(`/api/team/check/${userPK}/${res.data.data}`, {
              headers: { Authorization: token }
            })
              .then((res1: any) => { console.log('sugpk', res1.data.data); setSuggestPK(res1.data.data); })
          })

      }
    }
  }, [flag, userPK]);

  function acceptUser() {
    const MMtoken: string | null = localStorage.getItem('mmtoken')
    const token: string | null = localStorage.getItem('token')
    if (typeof token === "string") {
      axios.post('/api/team/recruit/team', {
        teamPk: teamPK,
        projectCode: Number(projectCode),
        suggestPK: suggestPK,
        suggest: true
      }, {
        headers: { Authorization: token }
      })
        .then(() => { alert('팀가입이 수락하였습니다'); location.reload() })
        .catch((err) => alert(err))
    }
  }
  function rejectUser() {
    const token: string | null = localStorage.getItem('token')
    if (typeof token === "string") {
      axios.post('/api/team/recruit/team', {
        teamPk: teamPK,
        projectCode: projectCode,
        suggestPK: suggestPK,
        suggest: false
      }, {
        headers: { Authorization: token }
      })
        .then(() => { alert('팀가입을 거절하였습니다'); location.reload() })
        .catch((err) => alert(err))
    }
  }

  function withdrawSuggest() {
    const token: string | null = localStorage.getItem("token")
    if (token) {
      axios.delete('/api/team/userwithdraw', {
        data: {
          suggestPK: suggestPK
        },
        headers: { Authorization: token }
      })
        .then(() => location.reload())
    }
  }

  function Suggest() {
    const MMtoken: string | null = localStorage.getItem('mmtoken')
    const token: string | null = localStorage.getItem('token')
    if (typeof token === "string") {
      axios.post('/api/team/applyuser', {
        teamPK: teamPK,
        userPK: userPK,
        MMtoken: MMtoken,
        msg: "저희와 함께가시죠"
      }, {
        headers: { Authorization: token }
      })
        .then(() => { alert('가입제안이 완료되었습니다'); location.reload() })
        .catch((err) => alert(err))
    }
  }
  return (
    <div>
      <Transition appear show={flag} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0  " onClose={setflag}>
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
            <span className="inline-block align-middle " aria-hidden="true">
              &#8203;
            </span>
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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-left flex flex-row m-2 hover:underline cursor-pointer"
                ></Dialog.Title>
                <div className="mt-2 ">
                  <div className="text-sm text-gray-500  ">
                    <UserDetail userPk={userPK} mmid={mmid} />
                  </div>
                </div>
                <div className="mt-4 flex flex-row space-x-2 justify-center">
                  {userButton === 0 || leaderCheck === false ? (
                    false
                  ) : userButton === 1 ? (
                    <>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={acceptUser}
                      >
                        유저의 제안 수락
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={rejectUser}
                      >
                        유저의 제안 거절
                      </button>
                    </>
                  ) : userButton === 2 ? (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={withdrawSuggest}
                    >
                      유저에게 가입 제안 취소
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={Suggest}
                    >
                      유저에게 가입 제안
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setflag(false)}
                  >
                    창 닫기
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default UserDetailModal;
