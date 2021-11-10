// 유저가 가입신청한 팀
import React, { ReactElement, useState, useEffect } from "react";
import axios from "axios";
import TeamDetailModal from "./TeamDetailModal";
interface Props {
  teamPK: number;
  projectCode: number;
  suggestPK:number
}

function TeamOfferCard({ teamPK, projectCode, suggestPK }: Props): ReactElement {
  const [teamFlag, setTeamFlag] = useState<boolean>(false)
  const [teamdata, setteamdata] = useState<any>({});
  const [enough, setenough] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get(`/api/team/detail/${teamPK}`)
      .then((res: any) => {
        setteamdata(res.data.data);
        if (res.data.data.teamuser.length >= 5) {
          setenough(true);
        }
      })
      .catch((err) => alert(err));
  }, [teamPK]);
  // 가입 신청 철회
  function withdraw() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios.delete("/api/team/teamwithdraw", {
        headers: { Authorization: token },
        data: {
          suggetPK: suggestPK,
        },
      });
    }
  }

  return (
    <tr className="h-10">
      <td className="px-6 py-4 whitespace-nowrap">
        <div
          className="text-sm font-medium text-gray-900 hover:underline cursor-pointer my-2.5"
          onClick={() => setTeamFlag(true)}
        >
          {teamdata.name}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          팀원 구인 중
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
        onClick={() => withdraw()}
        >
          제안 철회
        </div>
      </td>
      <TeamDetailModal projectCode={projectCode} teamFlag={teamFlag} setTeamFlag={setTeamFlag} teamPK={teamPK} />
    </tr>
  );
}

export default TeamOfferCard;
