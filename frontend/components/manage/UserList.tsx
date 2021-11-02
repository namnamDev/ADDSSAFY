import React, { ReactElement, useState, useRef, Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import UserDetail from "./UserDetail";
import axios from "axios";

interface Props { }

function UserList({ }: Props): ReactElement {
  const router = useRouter();
  // MM보내기
  function SendMM(mmid: any) {
    alert("message");
  }
  // 유저상세페이지 모달오픈
  const [userdata, setuserdata] = useState<number>(0);
  const [modal, setmodal] = useState(false);
  function openmodal(data: number) {
    setmodal(true);
    setuserdata(data);
  }
  // 교육생전체목록 불러오기
  const [userlist, setuserlist] = useState<any>([])
  useEffect(() => {
    const token: string | null = localStorage.getItem("token")
    if (typeof token === "string") {
      axios.get('/api/manage/students', {
        headers: { Authorization: token }
      })
        .then((res: any) => {
          console.log(res.data.data);
          setuserlist(res.data.data)
        })
        .catch((err) => alert(err))
    }
  }, [])

  return (
    <div className="flex flex-col mt-2 text-center w-2/3 mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                    Student Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class Info
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
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
                {userlist.map((user: any) => (
                  <tr key={user.userDetailDto.userPk}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900" onClick={() => openmodal(user.userDetailDto.userPk)}>
                        {user.userDetailDto.userName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.userDetailDto.studentNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.userDetailDto.classRegion} {user.userDetailDto.classNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.userDetailDto.userAddress}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.userDetailDto.userPhone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.userDetailDto.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.userDetailDto.isleave === false ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-500">
                          교육중
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          퇴소
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-black cursor-pointer"
                        onClick={() => SendMM(user.userDetailDto.mmid)}
                      >
                        MatterMost
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Transition.Root show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setmodal}
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
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
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
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full min-w-lg">
                <div className="bg-white">
                  <div className="">
                    <div className="mt-3 text-center mx-auto">
                      <UserDetail userPK={userdata} />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setmodal(false)}
                  >
                    나가기
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

export default UserList;
