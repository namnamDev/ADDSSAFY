import React, { ReactElement } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";

interface Props {}

function StudentMain({}: Props): ReactElement {
  return (
    <div>
      <StudentNavbar />
    </div>
  );
}

export default StudentMain;
