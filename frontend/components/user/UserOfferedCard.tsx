// 팀이 받은 가입신청유저
import React, { ReactElement, useState, Fragment } from "react";
import Image from "next/image";
import UserDetailModal from "./UserDetailModal";
interface Props {
  person: any;
  projectCode: number;
  leadercheck: boolean;
}

function UserOfferedCard({ person, projectCode, leadercheck }: Props): ReactElement {
  const [flag, setflag] = useState<boolean>(false);

  // 제안을 보낸 시간 구하기
  const now = new Date(person.suggestDate);
  new Date(now.setHours(now.getHours() + 11));

  const apply = () => {
    alert(`${person}팀에 지원했습니다.`);
  };

  // 시간으로 변환
  function timeForToday(value: any) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div
          className="text-sm font-medium text-gray-900 hover:underline cursor-pointer my-2.5"
          onClick={() => setflag(true)}
        >
          {person.userName}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{timeForToday(now)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-black cursor-pointer"
          onClick={() => apply()}
        >
          수락
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
          onClick={() => apply()}
        >
          거절
        </span>
      </td>
      <UserDetailModal
        projectCode={projectCode}
        userPK={person.userPK}
        mmid={person.mmid}
        flag={flag}
        setflag={setflag}
        leaderCheck={leadercheck}
      />
    </tr>
  );
}

export default UserOfferedCard;
