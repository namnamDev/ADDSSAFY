import React, { ReactElement, useState, Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import UserDetail from "./UserDetail";
import axios from "axios";
import { useRouter } from "next/router"
interface Props {
    flag: boolean,
    projectCode: number,
    userPK: number,
    mmid: string,
    leaderCheck: boolean,
    setflag: (value: any) => any;
}

function UserDetailModal({ flag, projectCode, userPK, mmid, leaderCheck, setflag }: Props): ReactElement {
    const [userButton, setUserButton] = useState();
    useEffect(() => {
        if (typeof projectCode === 'number' && userPK) {
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
    }, [projectCode, userPK])
    const apply = () => {
        alert(`${userPK}팀에 지원했습니다.`);
    };
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
                                    <p className="text-sm text-gray-500  ">
                                        <UserDetail userPk={userPK} mmid={mmid} />
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
    )
}

export default UserDetailModal
