import React, { ReactElement, useState, useEffect } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import UserHashTag from "../components/hashtag/UserHashTag";
import TeamHashTag from "../components/hashtag/TempTeamHashTag";
import TeamList from "../components/Team/TeamList";
import UserList from "../components/user/UserList";
import TeamDump from "../dummy/json/teamDump.json";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Footer from "../components/basic/Footer";
import UserSearchHashTag from "../components/hashtag/UserSearchHashTag";

interface Props {}

interface list {
  hashTagPK: number;
  title: string;
  prop: string;
  image: string;
}

function StudentUserSearch({}: Props): ReactElement {
  const [can, setCan] = useState<list[]>([]);
  const [want, setWant] = useState<list[]>([]);
  const [except, setExcept] = useState<list[]>([]);
  const [index, setIndex] = useState(0);
  const [searchList, setSearchList] = useState<number[]>([]);
  const search = () => {
    console.log(can);
    console.log(want);
    console.log(except);
    setSearchList(TeamDump);
  };
  const [person, setPerson] = useState();

  useEffect(() => {
    setSearchList([]);
  }, [index]);
  return (
    <div>
      <StudentNavbar />
      <div className=" mx-20">
        <UserSearchHashTag />
      </div>
      <Footer />
    </div>
  );
}

export default StudentUserSearch;
