import React, { ReactElement, useState, useEffect } from "react";
import TeamOfferedCard from "./TeamOfferedCard";
import axios from "axios";

interface Props {
  projectCode: number;
}

function TeamOfferedList({ projectCode }: Props): ReactElement {
  const [teamList, setTeamList] = useState<any>([]);
  useEffect(() => {
    if (projectCode) {
      const token: string | null = localStorage.getItem("token");
      if (token) {
        axios
          .get(`/api/users/offered/${projectCode}`, {
            headers: { Authorization: token },
          })
          .then((res: any) => {
            setTeamList([...res.data.data]);
          });
      }
    }
  }, [projectCode]);

  return (
    <div className="flex flex-col mx-1 mt-2 text-center">
      <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-1">
        <div className="py-2 align-middle inline-block min-w-full">
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
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    accept
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    refusal
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teamList.map((team: any) => (
                  <TeamOfferedCard
                    key={team.suggestPK}
                    teamPK={team.teamPK}
                    projectCode={projectCode}
                    suggestPK={team.suggestPK}
                    suggestDate={team.suggestDate}
                    teamName={team.teamName}
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

export default TeamOfferedList;
