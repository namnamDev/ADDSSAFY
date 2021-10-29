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
      <div className="h-full w-full">
        <MoveRound />
        <div className="absolute top-1/2 left-1/2">
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
