import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import UserDetailModal from "../user/UserDetailModal";
import TeamDetailModal from "./TeamDetailModal";

interface Props {
  leaderCheck: boolean;
  projectCode: number;
}

function TeambuildingNow({ leaderCheck, projectCode }: Props): ReactElement {
  // 팀 현황
  const [teamlist, setteamlist] = useState<any>([]);
  useEffect(() => {
    if (projectCode) {
      const token: string | null = localStorage.getItem("token");
      if (typeof token === "string") {
        axios
          .get(`/api/team/${projectCode}`, {
            headers: { Authorization: token },
          })
          .then((res: any) => {
            setteamlist([...res.data.data]);
          })
          .catch((err) => alert(err));
      }
    }
  }, [projectCode]);
  // 팀상세
  const [teamFlag, setTeamFlag] = useState<boolean>(false);
  const [teamPK, setTeamPK] = useState<number>(0);
  async function teamDetail(teamPK: number) {
    setTeamFlag(true);
    setTeamPK(teamPK);
  }
  // 유저상세
  const [flag, setflag] = useState<boolean>(false);
  const [pk, setpk] = useState<number>(0);
  const [mmid, setmmid] = useState<string>("");
  async function userDetail(userPK: number, mmid: string) {
    setflag(true);
    setpk(userPK);
    setmmid(mmid);
  }
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Team Name
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
          {teamlist.map((team: any, i: number) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div
                  className="text-sm font-medium text-gray-900 cursor-pointer"
                  onClick={() => {
                    teamDetail(team.teamDto.teamPK);
                  }}
                >
                  {team.teamDto.name}
                </div>
              </td>
              {team.teamDto.teamuser.map((member: any, i: number) => (
                <td className="px-6 py-4 whitespace-nowrap" key={i}>
                  <div
                    className="text-sm font-medium text-gray-900 cursor-pointer"
                    onClick={async () => await userDetail(member.userPk, member.mmid)}
                  >
                    {member.userName}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* 팀상세보기 */}
      <TeamDetailModal
        projectCode={projectCode}
        teamFlag={teamFlag}
        setTeamFlag={setTeamFlag}
        teamPK={teamPK}

      />
      {/* 유저상세보기 */}
      <UserDetailModal
        projectCode={projectCode}
        userPK={pk}
        mmid={mmid}
        flag={flag}
        setflag={setflag}
        leaderCheck={leaderCheck}
      />
    </>
  );
}

export default TeambuildingNow;
