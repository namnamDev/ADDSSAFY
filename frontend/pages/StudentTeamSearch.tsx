import React, { ReactElement, useState, useEffect } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import Footer from "../components/basic/Footer";
import TeamSearchHashTag from "../components/hashtag/TeamSearchHashTag";

interface Props {}

function StudentTeamSearch({}: Props): ReactElement {
  return (
    <div>
      <StudentNavbar />
      <div className=" mx-20">
        <TeamSearchHashTag />
      </div>
      <Footer />
    </div>
  );
}

export default StudentTeamSearch;
