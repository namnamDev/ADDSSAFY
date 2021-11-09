import React, { ReactElement, useState, Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import UserDetail from "../user/UserDetail";
import Image from "next/image";
import axios from "axios";
import { ExclamationIcon, MailIcon } from "@heroicons/react/outline";
interface Props {
  projectCode: number;
  person: {
    backjun: string | null;
    blog: string;
    classNumber: string;
    classRegion: string;
    email: string;
    git: string;
    introduce: string;
    isleave: boolean;
    mmid: string;
    portfolio: string;
    profile: string;
    status: string;
    studentNumber: string;
    teamList: any;
    userAddress: string;
    userName: string;
    userPhone: string;
    userPk: number;
  };
  leadercheck: boolean;
}

function UserCard({ person, projectCode, leadercheck }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [userButton, setUserButton] = useState<number>(0);
  const myMMid: string | null = localStorage.getItem("mmid");
  // 팀있는지 체크하기
  const [isteam, setisteam] = useState<boolean>(false);
  useEffect(() => {
    if (person.teamList.length >= projectCode + 1) {
      if (person.teamList[projectCode].teamPK != null) {
        setisteam(true);
      }
    }
  }, []);
  function closeModal() {
    setIsOpen(false);
    setShowUser(false);
  }
  function openModal() {
    setIsOpen(true);
    // 어떤 버튼을 활성화 할 것인지
    const token: string | null = localStorage.getItem("token");
    if (typeof token === "string") {
      axios
        .get(`/api/team/userButton/${person.userPk}/${projectCode}`, {
          headers: { Authorization: token },
        })
        .then((res: any) => {
          setUserButton(res.data.data);
          console.log(res);
          console.log(leadercheck);
        })
        .catch(() => alert("회원님의 정보를 가져올 수 없습니다, 다시 로그인해주세요"));
    }
  }
  const apply = () => {
    alert(`${person}팀에 지원했습니다!.`);
  };
  // MM보내기
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [message, setmessage] = useState<string>("");
  function sendMessage() {
    const mymmid: string | null = localStorage.getItem("mmid");
    const mmtoken: string | null = localStorage.getItem("mmtoken");
    if (mymmid && mmtoken)
      axios
        .post("/api/v4/channels/direct", [mymmid, person.mmid], {
          headers: { Authorization: mmtoken },
        })
        .then((res: any) => {
          console.log(res.data.id);
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
              alert("메시지를 성공적으로 전송하였습니다");
              setOpen(false);
            });
        });
  }
  function OpenMM(mmid: string) {
    setOpen(true);
  }
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center mx-auto">
          <div className="flex-shrink-0 h-10 w-10">
            {/* <Image
              className="h-10 w-10 rounded-full"
              src={person.profile}
              alt=""
              width="100%"
              height="100%"
            /> */}
          </div>
          <div className="">
            <div
              className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
              onClick={() => openModal()}
            >
              {person.userName}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {person.classRegion} {person.classNumber}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">{person.userPhone}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {/* {person.status === "leave" ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-500">
            팀장
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            팀원
          </span>
        )} */}
        {isteam ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            팀있음
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            무소속
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-black cursor-pointer"
          onClick={() => OpenMM(person.mmid)}
        >
          MatterMost
        </span>
      </td>
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

            {/* This element is to trick the browser into centering the modal contents. */}
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
                  onClick={() => setShowUser(false)}
                ></Dialog.Title>
                <div className="mt-2 ">
                  <p className="text-sm text-gray-500  ">
                    <UserDetail userPk={person.userPk} />
                  </p>
                </div>

                <div className="mt-4 flex flex-row space-x-2 justify-center">
                  {userButton === 0 || leadercheck === false ? (
                    false
                  ) : userButton === 1 ? (
                    <>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={apply}
                      >
                        유저의 제안 수락
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={apply}
                      >
                        유저의 제안 거절
                      </button>
                    </>
                  ) : userButton === 2 ? (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={apply}
                    >
                      유저에게 가입 제안 취소
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={apply}
                    >
                      유저에게 가입 제안
                    </button>
                  )}
                  {myMMid !== person.mmid ? (
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => OpenMM(person.mmid)}
                    >
                      매터모스트 메시지 보내기
                    </button>
                  ) : null}
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
      {/* MM */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <MailIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Mattermost Message 보내기
                      </Dialog.Title>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) => setmessage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:text-sm"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </tr>
  );
}

export default UserCard;
