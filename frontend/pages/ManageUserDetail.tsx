import React, { ReactElement } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import UserDetail from "../components/manage/UserDetail";

interface Props {}

function ManageUserDetail({}: Props): ReactElement {
  return (
    <div>
      <ProNavbar />
      <UserDetail />
    </div>
  );
}

export default ManageUserDetail;
