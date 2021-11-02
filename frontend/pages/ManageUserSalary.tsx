import React, { ReactElement } from "react";
import Footer from "../components/basic/Footer";
import ProNavbar from "../components/basic/ProNavbar";
import UserSalary from "../components/manage/UserSalary";

interface Props { }

function ManageUserSalary({ }: Props): ReactElement {
  return (
    <div>
      <ProNavbar />
      <UserSalary />
      <Footer />
    </div>
  );
}

export default ManageUserSalary;
