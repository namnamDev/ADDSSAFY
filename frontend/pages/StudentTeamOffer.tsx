import React, { ReactElement, useState } from "react";
import TeamOfferList from "../components/Team/TeamOfferList";
import StudentNavbar from "../components/basic/StudentNavbar";
import TeamDump from "../dummy/json/teamDump.json";
interface Props {}

function StudentTeamOffer({}: Props): ReactElement {
  const [searchList, setSearchList] = useState<number[]>(TeamDump);
  return (
    <div>
      <StudentNavbar />
      <div className="mx-48 my-20">
        <div className="font-bold text-lg">내가 지원한 팀 목록</div>
        <TeamOfferList list={searchList} />
      </div>
    </div>
  );
}

export default StudentTeamOffer;
