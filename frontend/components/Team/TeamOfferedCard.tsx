import React, { ReactElement, useState } from "react";
import TeamDetailModal from "./TeamDetailModal";

interface Props {
  teamPK: number;
  projectCode: number;
}

function TeamOfferedCard({ teamPK, projectCode }: Props): ReactElement {
  const [teamFlag, setTeamFlag] = useState<boolean>(false)

  const apply = () => {
    alert(`${teamPK}팀에 지원했습니다.`);
  };

  const accept = () => {
    // // 유저가 팀의 제안을 수락
    // if (typeof token !== "string") return;
    // axios
    //   .get(`/api/team/recruit/user`, {
    //     headers: { Authorization: token },
    //     data: {
    //       teamPK: teamPK,
    //       projectCode: projectCode,
    //       suggestPK: suggestPK,
    //       suggest: true,
    //     },
    //   })
    //   .then((res: any) => {
    //     setTeamButton(res.data.data);
    //     console.log(res);
    //   })
    //   .catch(() => alert("회원님의 정보를 가져올 수 없습니다, 다시 로그인해주세요"));
  };
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
<<<<<<< HEAD
          onClick={() => accept()}
=======
        // onClick={() => SendMM()}
>>>>>>> front_cho
        >
          수락
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
        // onClick={() => SendMM()}
        >
          거절
        </span>
      </td>
      <TeamDetailModal projectCode={projectCode} teamFlag={teamFlag} setTeamFlag={setTeamFlag} teamPK={teamPK} />

    </tr>
  );
}

export default TeamOfferedCard;
