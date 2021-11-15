import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import UserCard from "./UserCard";
import Tooltip from "@mui/material/Tooltip";
interface Props {
  list: number[];
  projectCode: number;
  leadercheck: boolean;
  setIsNameAsc: (value: boolean) => any;
  isNameAsc: boolean;
  isTeamAsc: boolean;
  setIsTeamAsc: any;
}

function UserList({
  list,
  projectCode,
  leadercheck,
  setIsNameAsc,
  isNameAsc,
  isTeamAsc,
  setIsTeamAsc,
}: Props): ReactElement {
  const router = useRouter();
  // MM보내기
  function SendMM() {
    alert("message");
  }
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
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Profile
                  </th>
                  <th
                    scope="col"
                    className="cursor-pointer px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={sortName}
                  >
                    {isNameAsc ? (
                      <Tooltip title="내림차순보기">
                        <div>Name</div>
                      </Tooltip>
                    ) : (
                      <Tooltip title="오름차순보기">
                        <div>Name</div>
                      </Tooltip>
                    )}
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
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    onClick={() => setIsTeamAsc(!isTeamAsc)}
                  >
                    {/* {
                      isTeamAsc
                        ? <Tooltip title="내림차순보기"><div>Status</div></Tooltip>
                        : <Tooltip title="오름차순보기"><div>Status</div></Tooltip>
                    } */}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    MM
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {list.map((person: any) => (
                  <UserCard
                    key={person.userPk}
                    person={person}
                    projectCode={projectCode}
                    leadercheck={leadercheck}
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

export default UserList;
