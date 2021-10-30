import React, { ReactElement } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";
import Countdown from "react-countdown";
import Footer from "../components/basic/Footer";

interface Props { }

function StudentTeamBuildingCurrent({ }: Props): ReactElement {
  const router = useRouter();
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const endTime = moment("2021-12-25 24:00:00");
  var duration = moment.duration(endTime.diff(nowTime));
  var rest = duration.asSeconds();

  // 팀 현황
  const Teams = [
    {
      teamId: 1,
      leader: "Jane Cooper",
      members: ["a", "b", "c", "d", "e"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      teamId: 2,
      leader: "Jane Cooper",
      members: ["a", "b", "c", "d", "e"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      teamId: 3,
      leader: "Jane Cooper",
      members: ["a", "b", "c", "d", "e"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return (
    <div className="">
      <StudentNavbar />
      <div className="text-center w-2/3 mx-auto">
        <div className="mb-3 font-bold text-black my-5">생성된 팀목록</div>
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
            <tbody className="bg-white divide-y divide-gray-200">
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
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentTeamBuildingCurrent;
