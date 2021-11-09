import React, { ReactElement, useState, useRef, useEffect } from "react";

import axios from "axios";
import TeamDetailModal from "./TeamDetailModal";

interface Props {
  teamPK: number;
  projectCode: number;
}

function TeamCard({ teamPK, projectCode }: Props): ReactElement {
  const [teamFlag, setTeamFlag] = useState<boolean>(false)
  // 팀정보 불러오기
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
  }, []);
  const apply = () => {
    alert(`${teamPK}팀에 지원했습니다.`);
  };

  return (
    <tr>
      <td className=" py-4 whitespace-nowrap text-center">
        <div className="">
          <div className="">
            <div
              className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
              onClick={() => setTeamFlag(true)}
            >
              {teamdata.name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">반</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {enough ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-red-800">
            인원 충족
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            구인중
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-black cursor-pointer"
        // onClick={() => SendMM()}
        >
          MatterMost
        </span>
      </td>
      <TeamDetailModal projectCode={projectCode} teamFlag={teamFlag} setTeamFlag={setTeamFlag} teamPK={teamPK} />


    </tr>
  );
}

export default TeamCard;
