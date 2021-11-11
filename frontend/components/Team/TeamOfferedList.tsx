import React, { ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import TeamOfferedCard from "./TeamOfferedCard";
import axios from "axios";

interface Props {
  projectCode: number;
}

function TeamOfferedList({ projectCode }: Props): ReactElement {
  const router = useRouter();
  const [teamList, setTeamList] = useState<any>([])
  useEffect(() => {
    if (projectCode) {
      const token: string | null = localStorage.getItem('token')
      if (token) {
        axios.get(`/api/users/offered/${projectCode}`, {
          headers: { Authorization: token }
        })
          .then((res: any) => { setTeamList([...res.data.data]) })

      }
    }
  }, [projectCode])
  // MM보내기
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
                  <TeamOfferedCard key={team.suggestPK} teamPK={team.teamPK} projectCode={projectCode} suggestPK={team.suggestPK} suggestDate={team.suggestDate} teamName={team.teamName}/>
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
