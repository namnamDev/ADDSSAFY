import React, { ReactElement, Fragment, useEffect } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";
import Countdown from "react-countdown";
import Footer from "../components/basic/Footer";
import axios from "axios";


interface Props { }

function ManageUserTeamBuilding({ }: Props): ReactElement {
  const router = useRouter();
  const projectNo = router.query.projectNo;

  // projectNo와 교육프로정보 같이보내서 기간 정보 가져오기
  // 팀 현황
  const Teams: object[] = [];
  useEffect(() => {
    axios.get(`/api/team/${projectNo}`, {
      headers: { Authorization: JSON.parse(localStorage.getItem("token")!) }
    })
      .then((res) => console.log(res))

  }, [])
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
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                            width="100%"
                            height="100%"
                          />
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
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Team Member5
                  </th>
                </tr>
              </thead>
              {/* <tbody className="bg-white divide-y divide-gray-200">
                {Teams.map((team) => (
                  <tr key={team.teamId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={team.image}
                            alt=""
                            width="100%"
                            height="100%"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {team.leader}
                          </div>
                        </div>
                      </div>
                    </td>
                    {team.members.map((member) => (
                      <td className="px-6 py-4 whitespace-nowrap" key="member">
                        <div className="text-sm text-gray-900">{member}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ManageUserTeamBuilding;
