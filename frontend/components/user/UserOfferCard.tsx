// 팀이 가입제안을 한 유저
import React, { ReactElement, useState, Fragment } from "react";
import Image from "next/image";
import UserDetailModal from "./UserDetailModal";
import axios from "axios";
interface Props {
  person: any;
  projectCode: number;
  leadercheck: boolean;
  setUserList: (value: any[]) => any;
  suggestPK: number;
}

function UserOfferCard({
  person,
  projectCode,
  leadercheck,
  setUserList,
  suggestPK,
}: Props): ReactElement {
  const [flag, setflag] = useState<boolean>(false);

  // 제안을 보낸 시간 구하기
  const now = new Date(person.suggestDate);
  new Date(now.setHours(now.getHours() + 11));
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
  function withdrawSuggest() {
    if (leadercheck === false) {
      alert('권한이 없습니다')
      return
    }
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios
        .delete("/api/team/userwithdraw", {
          data: {
            suggestPK: suggestPK,
          },
          headers: { Authorization: token },
        })
        .then(() => {
          alert("팀제안이 철회되었습니다");
          sendMessage("팀제안이 철회되었습니다");
        });
    }
  }
  function sendMessage(message: string) {
    const mymmid: string | null = localStorage.getItem("mmid");
    const mmtoken: string | null = localStorage.getItem("mmtoken");
    const token: string | null = localStorage.getItem("token");
    // 거절메시지 보내주기
    if (mymmid && mmtoken && token)
      axios
        .get(`/api/users/detail/${person.userPK}`, {
          headers: { Authorization: token },
        })
        .then((res: any) => {
          axios
            .post("/api/v4/channels/direct", [mymmid, res.data.data.userDetailDto.mmid], {
              headers: { Authorization: mmtoken },
            })
            .then((res: any) => {
              axios
                .post(
                  "/api/v4/posts",
                  {
                    channel_id: res.data.id,
                    message: message,
                  },
                  {
                    headers: { Authorization: mmtoken },
                  }
                )
                .then(() => {
                  location.reload();
                });
            });
        });
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
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
          onClick={() => withdrawSuggest()}
        >
          제안 철회
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

export default UserOfferCard;
