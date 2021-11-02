import React, { ReactElement, Fragment, useEffect, useState } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";
import Countdown from "react-countdown";
import Footer from "../components/basic/Footer";
import axios from "axios";
import UserDetail from "../components/manage/UserDetail";


interface Props { }

function ManageUserTeamBuilding({ }: Props): ReactElement {
  const router = useRouter();
  const projectNo = router.query.projectNo;
  console.log(projectNo)

  // projectNo와 교육프로정보 같이보내서 기간 정보 가져오기
  const [teamlist, setteamlist] = useState<any>([])
  useEffect(() => {
    if (router.query.projectNo) {
      const token: string | null = localStorage.getItem("token")
      if (typeof token === "string") {
        axios.get(`/api/team/${router.query.projectNo}`, {
          headers: { Authorization: token }
        })
          .then((res: any) => {
            console.log(res.data.data);
            setteamlist([...res.data.data])
          })
          .catch((err) => alert(err))
      }
    }
  }, [router.query.projectNo])
  // 카운트다운 만들기
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const endTime = moment("2021-12-25 24:00:00");
  var duration = moment.duration(endTime.diff(nowTime));
  var rest = duration.asSeconds();
  // 팀없는사람 목록
  const NoTeam = [
    {
      userId: 1,
      name: "Jane Cooper",
      phone: "010-0000-0000",
      hope: "frontend",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      userId: 2,
      name: "Jane Cooper",
      phone: "010-0000-0000",
      hope: "backend",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      userId: 3,
      name: "Jane Cooper",
      phone: "010-0000-0000",
      hope: "backend",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      userId: 4,
      name: "Jane Cooper",
      phone: "010-0000-0000",
      hope: "backend",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      userId: 5,
      name: "Jane Cooper",
      phone: "010-0000-0000",
      hope: "Both",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      userId: 6,
      name: "Jane Cooper",
      phone: "010-0000-0000",
      hope: "backend",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  // 유저상세
  interface userdata {
    userId: number;
    name: string;
    classNo: number;
    address: string;
    class: string;
    email: string;
    phone: string;
    status: string;
    image: string;
    sigfiles: string[];
  }
  const [userdata, setuserdata] = useState<number>(0);
  // 데이터 모달로
  const [modal, setmodal] = useState(false);
  function openmodal(data: number) {
    setmodal(true);
    setuserdata(data);
  }
  return (
    <div className="text-center">
      <ProNavbar />
      <div className="text-center mt-5 text-5xl">
        {rest > 0 ? (
          <Countdown date={Date.now() + rest * 1000} />
        ) : (
          "팀빌딩이 종료되었습니다"
        )}
      </div>
      <div className="grid grid-cols-5 gap-4 mt-10 mx-8">
        <div className="col-span-2">
          <div className="text-center mb-3 font-bold text-red-600">팀미정</div>
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
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {NoTeam.map((person) => (
                  <tr key={person.userId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {/* <Image
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                            width="100%"
                            height="100%"
                          /> */}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.hope === "frontend" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-black">
                          Frontend
                        </span>
                      ) : person.hope === "backend" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-black">
                          Backend
                        </span>
                      ) : person.hope === "Both" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black">
                          Both
                        </span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* 팀목록 */}
        <div className="col-span-3">
          <div className="text-center mb-3 font-bold text-black">
            생성된 팀목록
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Team Leader
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

                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teamlist.map((team: any, i: number) => (
                  <tr key={i}>
                    {team.teamDto.teamuser.map((member: any, i: number) => (
                      <td className="px-6 py-4 whitespace-nowrap" key={i}>
                        <div className="text-sm text-gray-900" onClick={() => openmodal(member.userPk)}>{member.userName}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
      </div>
      <Footer />
    </div>
  );
}

export default ManageUserTeamBuilding;
