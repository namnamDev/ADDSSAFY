import React, { ReactElement, useState, Fragment, useEffect, useRef } from "react";
import UserDetailModal from "./UserDetailModal";
import Image from "next/image";
import SendMMmodal from "./SendMMmodal";
interface Props {
  projectCode: number;
  person: {
    backjun: string | null;
    blog: string;
    classNumber: string;
    classRegion: string;
    email: string;
    git: string;
    introduce: string;
    isleave: boolean;
    mmid: string;
    portfolio: string;
    profile: string;
    status: string;
    studentNumber: string;
    teamList: any;
    userAddress: string;
    userName: string;
    userPhone: string;
    userPk: number;
  };
  leadercheck?: boolean;
}

function UserCard({ person, projectCode, leadercheck }: Props): ReactElement {
  // 팀있는지 체크하기
  const [isteam, setisteam] = useState<boolean>(false);
  useEffect(() => {
    if (person.teamList.length >= projectCode + 1) {
      if (person.teamList[projectCode].teamPK != null) {
        setisteam(true);
      }
    }
  }, []);
  // 유저상세
  const [flag, setflag] = useState<boolean>(false)
  const [pk, setpk] = useState<number>(0)
  const [mmid, setmmid] = useState<string>("")
  function userdetail(pk: number, mmid: string) {
    setflag(true);
    setpk(pk)
    setmmid(mmid)
  }
  // Mattermost
  const [flagMM, setflagMM] = useState<boolean>(false)
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center mx-auto">
          <div className="flex-shrink-0 h-10 w-10">
            {/* <Image
              className="h-10 w-10 rounded-full"
              src={person.profile}
              alt=""
              width="100%"
              height="100%"
            /> */}
          </div>
          <div className="">
            <div
              className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
              onClick={() => userdetail(person.userPk, person.mmid)}
            >
              {person.userName}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {person.classRegion} {person.classNumber}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{person.userPhone}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {isteam ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            팀있음
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            무소속
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-black cursor-pointer"
          onClick={() => { setflagMM(true) }}
        >
          MatterMost
        </span>
      </td>
      <UserDetailModal projectCode={projectCode} userPK={pk} mmid={mmid} flag={flag} setflag={setflag} leaderCheck={true} />
      <SendMMmodal flagMM={flagMM} setflagMM={setflagMM} mmid={person.mmid} />
    </tr>
  );
}

export default UserCard;
