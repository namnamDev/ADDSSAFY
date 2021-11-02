import React, { ReactElement } from "react";
import Footer from "../components/basic/Footer";
import ProNavbar from "../components/basic/ProNavbar";
import UserList from "../components/manage/UserList";

interface Props { }

function ManageUser({ }: Props): ReactElement {
  return (
    <div>
      <ProNavbar />
      <br />
      <UserList />
      <Footer />
    </div>
  );
}

export default ManageUser;
