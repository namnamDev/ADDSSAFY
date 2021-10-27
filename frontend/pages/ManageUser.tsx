import React, { ReactElement } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import UserList from "../components/manage/UserList";

interface Props {}

function ManageUser({}: Props): ReactElement {
  return (
    <div>
      <ProNavbar />
      <br />
      <UserList />
    </div>
  );
}

export default ManageUser;
