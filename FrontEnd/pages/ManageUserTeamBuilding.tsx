import React, { ReactElement } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import { useRouter } from "next/router";
import moment from "moment";
import Countdown from "react-countdown";

interface Props {}

function ManageUserTeamBuilding({}: Props): ReactElement {
  const router = useRouter();
  const projectNo = router.query.projectNo;
  // projectNo와 교육프로정보 같이보내서 기간 정보 가져오기

  // 카운트다운 만들기
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const endTime = moment("2021-10-26 24:00:00");
  var duration = moment.duration(endTime.diff(nowTime));
  var rest = duration.asSeconds();
  return (
    <div>
      <ProNavbar />

      <div className="text-center mt-5">
        {rest > 0 ? (
          <Countdown date={Date.now() + rest * 1000} />
        ) : (
          "경매가 종료되었습니다"
        )}
      </div>
    </div>
  );
}

export default ManageUserTeamBuilding;
