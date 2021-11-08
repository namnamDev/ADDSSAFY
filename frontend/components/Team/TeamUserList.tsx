import React, { ReactElement, useEffect, useState, useRef, Fragment } from "react";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, MailIcon } from '@heroicons/react/outline'
import Image from "next/image";
import axios from "axios";

interface Props {
  teamPK: number;
  showUser: (value: boolean) => void;
  teammodalUserPK: (value: number) => void;
}

function TeamUserList({ teamPK, showUser, teammodalUserPK }: Props): ReactElement {
  const router = useRouter();
  // MM보내기
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [message, setmessage] = useState<string>("")
  const [mmid, setmmid] = useState<string>("")
  function sendMessage() {
    const mymmid: string | null = localStorage.getItem('mmid')
    const mmtoken: string | null = localStorage.getItem('mmtoken')
    if (mymmid && mmtoken)
      axios.post('/api/v4/channels/direct', [
        mymmid, mmid
      ],
        { headers: { Authorization: mmtoken } })
        .then((res: any) => {
          console.log(res.data.id);
          axios.post("/api/v4/posts",
            {
              channel_id: res.data.id,
              message: message
            },
            {
              headers: { Authorization: mmtoken }
            })
            .then(() => { alert('메시지를 성공적으로 전송하였습니다'); setOpen(false) })
        })
  }
  function OpenMM(mmid: string) {
    setOpen(true)
  }
  const userDetail = () => {
    showUser(true);
  };
  // 팀유저정보
  const [people, setpeople] = useState<any>([])
  useEffect(() => {
    axios.get(`/api/team/teamuser/${teamPK}`)
      .then((res: any) => { setpeople(res.data.data) })
  }, [])
  return (
    <div className="flex flex-col mx-1 mt-2 text-center">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="text-lg text-left text-black mt-3 ml-4">팀원 정보</div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    MM
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person: any) => (
                  <tr key={person.userPk}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.profile}
                            alt=""
                            width="100%"
                            height="100%"
                          />
                        </div>
                        <div className="ml-4">
                          <div
                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                            onClick={() => { showUser(true); teammodalUserPK(person.userPk) }}
                          >
                            {person.userName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.isLeader === true ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-500">
                          팀장
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          팀원
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-black cursor-pointer"
                        onClick={() => { setmmid(person.mmid); setOpen(true) }}
                      >
                        MatterMost
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        </div>
      </div>
    </div>
  );
}

export default TeamUserList;
