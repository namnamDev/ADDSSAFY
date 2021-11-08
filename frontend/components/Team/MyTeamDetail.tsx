import React, { ReactElement, useEffect, useState, useRef, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { range } from "lodash";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, FolderAddIcon } from '@heroicons/react/outline'

interface Props {
    teamPK: number
}

function MyTeamDetail({ teamPK }: Props): ReactElement {
    const router = useRouter();
    const [teammember, setteammember] = useState<any>([])
    const [webex, setwebex] = useState<string>("")
    const [mmchannel, setmmchannel] = useState<string>("")
    const [leadercheck, setleadercheck] = useState<boolean>(false)
    // 팀멤버 정보 받아오기
    useEffect(() => {
        const mmid: string | null = localStorage.getItem('mmid')
        if (typeof mmid === 'string') {
            axios.get(`/api/team/teamuser/${teamPK}`)
                .then((res: any) => {
                    console.log(res.data.data);
                    setteammember([...res.data.data])
                    {
                        res.data.data.map((member: any, i: number) => {
                            console.log(1)
                            if (member.isLeader === true && mmid === member.mmid) {
                                setleadercheck(true)
                            }
                        })
                    }
                })
                .catch(() => alert('통신이 불안정합니다, 다시 시도해주세요'))
        }
    }, []);
    // 팀정보 받아오기
    useEffect(() => {
        axios.get(`/api/team/detail/${teamPK}`)
            .then((res: any) => { console.log(res); setwebex(res.data.data.webexLink); setmmchannel(res.data.data.mmChannel) })
            .catch((err) => alert(err))
    }, [])
    // 리더인지 확인
    const [isleader, setisleader] = useState<boolean>(false)
    useEffect(() => {
        const token: string | null = localStorage.getItem('mmid')
    }, [])
    // 팀나가기
    function teamexit() {
        const token: string | null = localStorage.getItem('token')
        const mmid: string | null = localStorage.getItem('mmid')
        const mmtoken: string | null = localStorage.getItem('mmtoken')
        if (token && mmid && mmtoken) {
            axios.delete('/api/team/exit', {
                data: {
                    teamPK: teamPK
                },
                headers: { Authorization: token }
            })
                .then(() => {
                    // Mattermost channel 나가기
                    axios.delete(`/api/v4/channels/${mmchannel}/members/${mmid}`,
                        {
                            headers: { Authorization: mmtoken }
                        })
                        .then(() => {
                            setTimeout(() => {
                                location.reload()
                            }, 500);
                        })
                })
        }
    }
    // ppt업로드
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    return (
        <div>
            <div className="bg-white text-center">
                <div className="mx-auto py-10 px-4">
                    <h2 className="text-2xl font-extrabold traRcking-tight text-gray-900 mb-10">팀멤버</h2>
                    {/* 팀멤버들 사진 */}
                    <div className="grid grid-cols-6 w-3/4 mx-auto">
                        {teammember.map((member: any, i: number) => (
                            <div key={i} className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
                                    <Image
                                        src={member.profile}
                                        alt={member.userPk}
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        width="80%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="mt-4 text-medium text-gray-700">{member.userName}</h3>
                                    <p className="mt-1 text-sm text-gray-900">{member.Number}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 text-center">
                        <span className="hidden sm:block">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-blue-50 mx-2"
                                onClick={() => router.push(`${webex}`)}
                            >
                                웹엑스 바로가기

                            </button>
                            {
                                leadercheck
                                    ?
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border bg-green-200 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-green-100 mx-2"
                                        onClick={() => setOpen(true)}
                                    >
                                        팀 PPT 업로드
                                    </button>
                                    : null
                            }
                            {
                                leadercheck
                                    ? <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border bg-blue-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-blue-100 mx-2"
                                        onClick={() => router.push(`/TeamModify/?teamPk=${teamPK}`)}
                                    >
                                        팀 정보 수정
                                    </button>
                                    : null
                            }

                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border bg-red-400 text-black rounded-md shadow-sm text-sm font-medium hover:bg-red-100 mx-2"
                                onClick={teamexit}
                            >
                                팀 나가기
                            </button>
                        </span>
                    </div>
                </div>
            </div>
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
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                            <FolderAddIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                PPT 업로드하기
                                            </Dialog.Title>
                                            <div className="mt-10">
                                                <input type="file" className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Upload
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
    );
}

export default MyTeamDetail
