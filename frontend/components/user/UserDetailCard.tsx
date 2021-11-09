import React, { ReactElement, useState, Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import UserDetail from "./UserDetail";
import axios from "axios";
import Image from "next/image";
import { ArrowLeftIcon, MailIcon } from "@heroicons/react/solid";

interface Props {
    flag: boolean,
    projectCode: number,
    userPK: number,
    mmid: string,
    leaderCheck: boolean,
    setflag: (value: boolean) => any;
}

function UserDetailCard({ flag, projectCode, userPK, mmid, leaderCheck, setflag }: Props): ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [userButton, setUserButton] = useState();
    const [myMMid, setmyMMid] = useState<string>("")
    useEffect(() => {
        setIsOpen(flag)
        // 내 mmid확인
        const myMMid: string | null = localStorage.getItem("mmid");
        if (myMMid) {
            setmyMMid(myMMid)
        }
    }, [flag, userPK])
    function closeModal() {
        setIsOpen(false);
        setShowUser(false);
        setflag(false)
    }
    function openModal() {
        setIsOpen(true);
        // 어떤 버튼을 활성화 할 것인지
        const token: string | null = localStorage.getItem("token");
        if (typeof token === "string") {
            axios
                .get(`/api/team/userButton/${userPK}/${projectCode}`, {
                    headers: { Authorization: token },
                })
                .then((res: any) => {
                    setUserButton(res.data.data);
                    console.log(res);
                })
                .catch(() => alert("회원님의 정보를 가져올 수 없습니다, 다시 로그인해주세요"));
        }
    }
    const apply = () => {
        alert(`${userPK}팀에 지원했습니다.`);
    };
    // MM보내기
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [message, setmessage] = useState<string>("");
    const [userMMid, setuserMMid] = useState<string>("");
    function SendMM() {

    }
    function sendMessage() {
        const mymmid: string | null = localStorage.getItem("mmid");
        const mmtoken: string | null = localStorage.getItem("mmtoken");
        console.log(message);
        if (mymmid && mmtoken)
            axios
                .post("/api/v4/channels/direct", [mymmid, userMMid], {
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
    return (
        <div>
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
                                        <UserDetail userPk={userPK} />
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-row space-x-2 justify-center">
                                    {userButton === 0 || leaderCheck === false ? (
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
                                    {myMMid !== mmid ? (
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={() => setOpen(true)}
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
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
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
        </div>
    )
}

export default UserDetailCard
