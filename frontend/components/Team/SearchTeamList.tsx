import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import TeamCard from "./TeamCard";
interface Props {
  list: any;
  projectCode: number;
}

function SearchTeamList({ list, projectCode }: Props): ReactElement {
  const router = useRouter();
  // MM보내기
  function SendMM() {
    alert("message");
  }
  return (
    <div className="flex flex-col mx-1 mt-2 text-center">
      <div className="-my-2 overflow-x-auto">
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
                    Introduce
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
                {list.map((team: any) => (
                  <TeamCard
                    key={team.teamDto.teamPK}
                    teamPK={team.teamDto.teamPK}
                    projectCode={projectCode}
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

export default SearchTeamList;