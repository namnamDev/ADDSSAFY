// 팀이 가입제안을 한 유저
import React, { ReactElement, useState, Fragment } from "react";
import Image from "next/image";
import UserDetailModal from "./UserDetailModal";
interface Props {
  person: any;
  projectCode: number;
  leadercheck: boolean;
  setUserList: (value: any[]) => any;
}

function UserOfferCard({ person, projectCode, leadercheck, setUserList }: Props): ReactElement {
  const [flag, setflag] = useState<boolean>(false)
  const apply = () => {
    alert(`${person}팀에 지원했습니다.`);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div
          className="text-sm font-medium text-gray-900 hover:underline cursor-pointer my-2.5"
          onClick={() => setflag(true)}
        >
          교육생 이름
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">반</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
          onClick={() => apply()}
        >
          제안 철회
        </span>
      </td>
      <UserDetailModal projectCode={projectCode} userPK={person.userPk} mmid={person.mmid} flag={flag} setflag={setflag} leaderCheck={leadercheck} />
    </tr>
  );
}

export default UserOfferCard;
