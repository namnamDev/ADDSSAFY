import React, { ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import TeamOfferCard from "./TeamOfferCard";
import axios from "axios";
interface Props {
  projectCode: number;
}

function TeamOfferList({ projectCode }: Props): ReactElement {
  const router = useRouter();
  useEffect(() => {
    if (projectCode) {
      getTeamList();
    }
  }, [projectCode]);

  function getTeamList() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios
        .get(`/api/users/offer/${projectCode}`, {
          headers: { Authorization: token },
        })
        .then((res: any) => {
          setTeamList([...res.data.data]);
        });
    }
  }
  const [teamList, setTeamList] = useState<any>([]);

  // MM보내기
  function SendMM() {
    alert("message");
  }
  return (
    <div className="flex flex-col mx-1 mt-2 text-center">
      <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-1">
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
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Cancel
                  </th>
                </tr>
              </thead>
              {teamList ? (
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamList.map((team: any) => (
                    <TeamOfferCard
                      key={team.suggestPK}
                      teamPK={team.teamPK}
                      projectCode={projectCode}
                      suggestPK={team.suggestPK}
                      suggestDate={team.suggestDate}
                    />
                  ))}
                </tbody>
              ) : (
                <tbody></tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamOfferList;
