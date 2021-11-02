import React, { ReactElement, useState } from "react";
import UserOfferList from "../components/user/UserOfferList";
import StudentNavbar from "../components/basic/StudentNavbar";
import TeamDump from "../dummy/json/teamDump.json";
interface Props {}

function StudentTeamOffer({}: Props): ReactElement {
  const [searchList, setSearchList] = useState<number[]>(TeamDump);
  return (
    <div>
      <StudentNavbar />
      <div className="mx-48 my-20">
        <div className="font-bold text-lg">내가 제안한 교육생 목록</div>
        <UserOfferList list={searchList} />
      </div>
    </div>
  );
}

export default StudentTeamOffer;
