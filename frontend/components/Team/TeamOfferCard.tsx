// 유저가 가입신청한 팀
import React, { ReactElement, useState, useEffect } from "react";
import axios from "axios";
import TeamDetailModal from "./TeamDetailModal";
import { useRouter } from "next/router";
interface Props {
  teamPK: number;
  projectCode: number;
  suggestPK: number;
  suggestDate: string;
}

function TeamOfferCard({ teamPK, projectCode, suggestPK, suggestDate }: Props): ReactElement {
  // 제안을 보낸 시간 구하기
  const router = useRouter();
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
  const [teamFlag, setTeamFlag] = useState<boolean>(false);
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
      axios
        .delete("/api/team/teamwithdraw", {
          data: {
            suggestPK: suggestPK,
          },
          headers: { Authorization: token },
        })
        .then(() => {
          alert("가입신청이 철회되었습니다");
          sendMessage("가입요청이 철회되었습니다");
        });
    }
  }
  function sendMessage(message: string) {
    const mymmid: string | null = localStorage.getItem("mmid");
    const mmtoken: string | null = localStorage.getItem("mmtoken");
    // 팀장mmid 가져오기
    if (mymmid && mmtoken)
      axios.get(`/api/team/leaderinfo/${teamPK}`).then((res: any) => {
        axios
          .post("/api/v4/channels/direct", [mymmid, res.data.data.mmid], {
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
                router.reload();
              });
          });
      });
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
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{timeForToday(now)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
          onClick={() => withdraw()}
        >
          제안 철회
        </div>
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

export default TeamOfferCard;
