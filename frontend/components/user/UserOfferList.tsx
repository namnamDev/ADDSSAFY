import React, { ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import UserOfferCard from "./UserOfferCard";
import axios from 'axios'

interface Props {
  projectCode: number;
  leadercheck: boolean;
  myTeamPK: number
}

function UserOfferList({ projectCode, leadercheck, myTeamPK }: Props): ReactElement {
  const router = useRouter();
  const [userList, setUserList] = useState<any>([])
  // 유저리스트 호출
  useEffect(() => {
    if (myTeamPK > 0) {
      axios.get(`/api/team/offer/${myTeamPK}`)
        .then((res: any) => {setUserList([...res.data.data]) })
    }
  }, [myTeamPK])

  function SendMM() {
    alert("message");
  }
  return (
    <div className="flex flex-col mx-1 mt-2 text-center">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                    Cancel
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* {people.map((person) => (
                  <UserOfferCard
                    key={person.userPk}
                    person={person}
                    projectCode={projectCode}
                    leadercheck={leadercheck}
                    setUserList={setUserList}
                  />
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOfferList;
