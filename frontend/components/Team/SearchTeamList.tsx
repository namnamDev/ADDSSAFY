import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import TeamCard from "./TeamCard";
import Tooltip from "@mui/material/Tooltip";
import { SortAscendingIcon } from "@heroicons/react/outline";
import { SortDescendingIcon } from "@heroicons/react/outline";
interface Props {
  list: any;
  projectCode: number;
  setIsNameAsc: (value: boolean) => any;
  isNameAsc: boolean;
  isTeamAsc: boolean;
  setIsTeamAsc: any;
}

function SearchTeamList({
  list,
  projectCode,
  setIsNameAsc,
  isNameAsc,
  isTeamAsc,
  setIsTeamAsc,
}: Props): ReactElement {
  function sortName() {
    if (isNameAsc === true) {
      setIsNameAsc(false);
    } else {
      setIsNameAsc(true);
    }
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
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer "
                    onClick={sortName}
                  >
                    {isNameAsc ? (
                      <Tooltip title="내림차순보기">
                        <div className="flex flex-row justify-center">
                          Name<>&nbsp;</> <SortAscendingIcon width="20px" />
                        </div>
                      </Tooltip>
                    ) : (
                      <Tooltip title="오름차순보기">
                        <div className="flex flex-row justify-center">
                          Name<>&nbsp;</> <SortDescendingIcon width="20px" />
                        </div>
                      </Tooltip>
                    )}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Introduce
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => setIsTeamAsc(!isTeamAsc)}
                  >
                    {isTeamAsc ? (
                      <Tooltip title="구인중인 팀 순으로 정렬">
                        <div className="flex flex-row justify-center">
                          Status<>&nbsp;</> <SortAscendingIcon width="20px" />
                        </div>
                      </Tooltip>
                    ) : (
                      <Tooltip title="인원이 충족된 팀 순으로 정렬">
                        <div className="flex flex-row justify-center">
                          Status<>&nbsp;</> <SortDescendingIcon width="20px" />
                        </div>
                      </Tooltip>
                    )}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {list.map((team: any) => (
                  <TeamCard
                    key={team.teamDto.teamPK}
                    teamdata={team.teamDto}
                    teamPK={team.teamDto.teamPK}
                    projectCode={projectCode}
                    enough={team.enough}
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
