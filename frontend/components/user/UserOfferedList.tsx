import React, { ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import UserOfferedCard from "./UserOfferedCard";
import axios from "axios";
interface Props {
  projectCode: number;
  leadercheck: boolean;
  myTeamPK: number;
}

function UserOfferedList({ projectCode, leadercheck, myTeamPK }: Props): ReactElement {
  const router = useRouter();
  const [userList, setUserlist] = useState<any>([]);
  // 유저리스트 호출
  useEffect(() => {
    if (myTeamPK > 0) {
      axios.get(`/api/team/offered/${myTeamPK}`).then((res: any) => {
        setUserlist([...res.data.data]);
      });
    }
  }, [myTeamPK]);
  // 수락, 거절
  function SendMM() {
    alert("message");
  }
  return (
    <div className="flex flex-col mx-1 mt-2 text-center">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 h-16">
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
                    Class Info
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Accept
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Refusal
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userList.map((user: any) => (
                  <UserOfferedCard
                    key={user.suggestPK}
                    person={user}
                    projectCode={projectCode}
                    leadercheck={leadercheck}
                    suggestPK={user.suggestPK}
                    myTeamPK={myTeamPK}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOfferedList;
