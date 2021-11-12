import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import SendMMmodal from '../user/SendMMmodal'


interface Props {
  teamPK: number;
  showUser: (value: boolean) => void;
  teammodalUserPK: (value: number) => void;
}

function TeamUserList({ teamPK, showUser, teammodalUserPK }: Props): ReactElement {
  const [flagMM, setflagMM] = useState<boolean>(false)
  const [mmid, setMmid] = useState<string>("")
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
            <div className="text-sm text-left text-gray-600 mt-3 my-2 px-6 py-2">팀원 정보</div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Profile
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Send MatterMost Message
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person: any) => (
                  <tr key={person.userPk}>
                    <td className="px-6 py-4">
                      <div
                        className="text-sm font-medium text-gray-900 my-1"
                      >
                        {
                          person.profile.length > 10
                            ? <img
                              className="h-10 w-10 rounded-full mx-auto"
                              src={person.profile}
                              alt=""
                              width="100%"
                              height="100%"
                            />
                            : <img
                              className="h-10 w-10 rounded-full mx-auto"
                              src="/images/noimg.png"
                              alt=""
                              width="100%"
                              height="100%"
                            />
                        }

                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                        onClick={() => { showUser(true); teammodalUserPK(person.userPk) }}
                      >
                        {person.userName}
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
                        onClick={() => { setMmid(person.mmid); setflagMM(true); }}
                      >
                        MatterMost
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <SendMMmodal flagMM={flagMM} setflagMM={setflagMM} mmid={mmid} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamUserList;
