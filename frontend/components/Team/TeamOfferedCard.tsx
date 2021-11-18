// 유저가 팀한테 받은 제안
import React, { ReactElement, useState, useEffect } from "react";
import TeamDetailModal from "./TeamDetailModal";
import axios from "axios";
import { useRouter } from "next/router";
interface Props {
  teamPK: number;
  projectCode: number;
  suggestPK: number;
  suggestDate: string;
  teamName: string;
}

function TeamOfferedCard({
  teamPK,
  projectCode,
  suggestPK,
  suggestDate,
  teamName,
}: Props): ReactElement {
  const router = useRouter();

  const [teamFlag, setTeamFlag] = useState<boolean>(false);
  // 제안을 보낸 시간 구하기
  const now = new Date(suggestDate);
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
  // 제안 수락
  function accept() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios
        .post(
          "/api/team/recruit/user",
          {
            teamPK: teamPK,
            projectCode: Number(projectCode),
            suggestPK: suggestPK,
            suggest: true,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res: any) => {
          getTeamDetail();
          inviteUser(res.data.data.mmChannelId, res.data.data.leaderMMToken);
        });
    }
  }
  let suggestTeamName = "";
  function getTeamDetail() {
    axios.get(`/api/team/detail/${teamPK}`).then((res: any) => {
      if (res.data.data == null) {
        return;
      }
      suggestTeamName = res.data.data.name;
    });
  }
  function inviteUser(channel_id: string, leaderMMToken: string) {
    const mmid: string | null = localStorage.getItem("mmid");
    const mmtoken: string | null = localStorage.getItem("mmtoken");
    const nickname: string | null = localStorage.getItem("nickname");
    if (typeof mmid === "string" && mmtoken && nickname) {
      axios
        .post(
          `/api/v4/channels/${channel_id}/members`,
          {
            user_id: mmid,
          },
          {
            headers: { Authorization: "Bearer " + leaderMMToken },
          }
        )
        .then(() => {
          axios.post("/hooks/3hprxzpnzpygdk7eymrnirdd6o", {
            channel_id: "nie5fdtbkjykpynqwj5mynpwcy",
            text:
              "`" +
              `${nickname}` +
              "`" +
              "님이" +
              "`" +
              `${suggestTeamName}` +
              "`" +
              "팀을 가입하였습니다",
          });
          alert("요청이 수락되어, 메타모스트채널에 초대되었습니다");
          router.reload();
        });
    }
  }
  // 제안 거절
  function reject() {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      axios
        .post(
          "/api/team/recruit/user",
          {
            teamPK: teamPK,
            projectCode: projectCode,
            suggestPK: suggestPK,
            suggest: false,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then(() => {
          alert("제안을 거절하였습니다");
          router.reload();
        });
    }
  }
  return (
    <tr className="">
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div
          className="text-sm font-medium text-gray-900 hover:underline cursor-pointer my-2.5"
          onClick={() => setTeamFlag(true)}
        >
          {teamName}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          팀원 구인 중
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{timeForToday(now)}</div>
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
      <TeamDetailModal
        projectCode={projectCode}
        teamFlag={teamFlag}
        setTeamFlag={setTeamFlag}
        teamPK={teamPK}
      />
    </tr>
  );
}

export default TeamOfferedCard;
