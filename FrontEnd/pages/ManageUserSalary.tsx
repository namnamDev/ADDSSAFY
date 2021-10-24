import React, { ReactElement } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import UserSalary from "../components/manage/UserSalary";

interface Props {}

function ManageUserSalary({}: Props): ReactElement {
  return (
    <div>
      <ProNavbar />
      <UserSalary />
    </div>
  );
}

export default ManageUserSalary;
