import React, { ReactElement } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import MoveRound from "./MoveRound";
import Image from "next/image";
import Footer from "../components/basic/Footer";

interface Props { }

function StudentMain({ }: Props): ReactElement {
  return (
    <div className="">
      <StudentNavbar />
      <div className="">
        <MoveRound />
        <div className="stmainssafy">
          <Image
            width="200%"
            height="100%"
            src="/images/ssafy.png"
            alt="ssafy"
            className=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentMain;
