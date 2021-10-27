import React, { ReactElement, useState, useEffect } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import HashTag from "../components/hashtag/HashTag";
import TeamList from "../components/Team/TeamList";
import TeamDump from "../dummy/json/teamDump.json";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface Props {}

interface list {
  hashTagPK: number;
  title: string;
  prop: string;
  image: string;
}

function Search({}: Props): ReactElement {
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
  useEffect(() => {
    setSearchList([]);
  }, [index]);
  return (
    <div>
      <StudentNavbar />
      <div className=" mx-20">
        {/* 팀/교육생 검색 */}
        <div className="">
          <div className="font-bold text-2xl mb-4">팀/교육생 검색</div>
          <div className="grid grid-cols-2 align-middle text-center">
            <div
              className={
                "border-2 cursor-pointer hover:bg-gray-200 " +
                (index === 0 ? "bg-gray-200" : false)
              }
              onClick={() => setIndex(0)}
            >
              팀 검색하기
            </div>
            <div
              className={
                "border-2 cursor-pointer hover:bg-gray-200 " +
                (index === 1 ? "bg-gray-200" : false)
              }
              onClick={() => setIndex(1)}
            >
              교육생 검색하기
            </div>
          </div>
        </div>
        <DndProvider backend={HTML5Backend}>
          <HashTag
            onCanChanged={setCan}
            onWantChanged={setWant}
            onExceptChanged={setExcept}
          ></HashTag>
        </DndProvider>
        {/* 검색 버튼 */}
        <div className="items-center flex flex-col">
          <button
            type="button"
            className=" px-8 py-2 bg-blue-600 text-white rounded-lg  shadow-sm hover:bg-blue-500 focus:ring-2 focus:ring-indigo-200 m-2 "
            onClick={search}
          >
            검색
          </button>
        </div>
        {/* 검색 결과 */}
        <div className="">
          <div className="font-bold text-2xl mb-4">검색 결과</div>
          {index === 0 ? <TeamList list={searchList} /> : "교육생 검색"}
        </div>
      </div>
    </div>
  );
}

export default Search;
