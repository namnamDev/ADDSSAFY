import React, { EventHandler, ReactElement, useState } from "react";
import HashTag from "../components/hashtag/UserHashTag";
import StudentNavbar from "../components/basic/StudentNavbar";
import axios from "axios";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TeamHashTag from "../components/hashtag/TeamHashTag";

interface Props {}

interface list {
  hashTagPK: number;
  title: string;
  prop: string;
  image: string;
}

function Search({}: Props): ReactElement {
  const [can, setCan] = useState<list[]>([]);
  const [teamIntro, setTeamIntro] = useState<string>("");
  const [teamWebex, setTeamWebex] = useState<string>("");
  const create = () => {
    console.log(`team소개: ${teamIntro}  team 웹엑스 링크: ${teamWebex}`);
    console.log(can);
    // const res=axios.post("/team/create", {
    //   introduceTeam: teamIntro,
    //   webex: teamWebex,
    //   can: can,
    //   want: want,
    //   except: [],
    // });
    // console.log(res);
  };
  const onTeamIntroChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamIntro(e.target.value);
  };
  const onTeamWebexChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamWebex(e.target.value);
  };
  return (
    <div>
      <StudentNavbar />
      <div className=" mx-20">
        {/* 팀 소개, 팀 웹엑스 링크 */}
        <div className="my-4">
          <div className="font-bold text-2xl mb-4">팀 만들기</div>
          <div className="">
            팀 소개
            <input
              className="border-2 border-black rounded-lg"
              value={teamIntro}
              onChange={onTeamIntroChanged}
              placeholder="팀 소개를 입력해주세요"
            ></input>
          </div>
          <div className="">
            팀 웹엑스 링크
            <input
              className="border-2 border-black rounded-lg"
              value={teamWebex}
              onChange={onTeamWebexChanged}
              placeholder="팀 웹엑스 링크를 입력해주세요"
            ></input>
          </div>
        </div>
        {/* 해쉬태그 컴포넌트 */}
        <DndProvider backend={HTML5Backend}>
          <TeamHashTag onCanChanged={setCan}></TeamHashTag>
        </DndProvider>
        {/* 팀 생성 버튼 */}
        <div className="items-center flex flex-col">
          <button
            type="button"
            className=" px-8 py-2 bg-blue-600 text-white rounded-lg  shadow-sm hover:bg-blue-500 focus:ring-2 focus:ring-indigo-200 m-2 "
            onClick={create}
          >
            팀 생성
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
