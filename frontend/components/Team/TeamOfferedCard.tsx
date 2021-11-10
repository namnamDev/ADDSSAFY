// 유저가 팀한테 받은 제안
import React, { ReactElement, useState } from "react";
import TeamDetailModal from "./TeamDetailModal";
import axios from 'axios'
interface Props {
  teamPK: number;
  projectCode: number;
  suggestPK: number,
}

function TeamOfferedCard({ teamPK, projectCode, suggestPK }: Props): ReactElement {
  const [teamFlag, setTeamFlag] = useState<boolean>(false)
  // 제안 수락
  function accept() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios.post(
        "/api/team/recruit/user",
        {
          teamPk: teamPK,
          projectCode: projectCode,
          suggetPK: suggestPK,
          boolean: true,
        },
        {
          headers: { Authorization: token },
        }
      );
    }
  }
  // 제안 거절
  function reject() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios.post(
        "/api/team/recruit/user",
        {
          teamPk: teamPK,
          projectCode: projectCode,
          suggetPK: suggestPK,
          boolean: false,
        },
        {
          headers: { Authorization: token },
        }
      );
    }
  }
  return (
    <tr className="">
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div
          className="text-sm font-medium text-gray-900 hover:underline cursor-pointer my-2.5"
          onClick={() => setTeamFlag(true)}
        >
          팀이름
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          팀원 구인 중
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-black cursor-pointer"
          onClick={() => accept()}
        >
          수락
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
          onClick={() => reject()}
        >
          거절
        </span>
      </td>
      <TeamDetailModal projectCode={projectCode} teamFlag={teamFlag} setTeamFlag={setTeamFlag} teamPK={teamPK} suggestPK={suggestPK} />

    </tr>
  );
}

export default TeamOfferedCard;
