import React, { ReactElement, useEffect, useState } from "react";
import Category from "../../dummy/json/categoryDump.json";
import axios from "axios";
import Card from "./Card";
import { useDrop } from "react-dnd";
interface Props {
  // onConditionChanged: (value: condition) => void;
  onCanChanged: (value: list[]) => void;
  onExceptChanged?: (value: list[]) => void;
}
interface list {
  hashTagPK: number;
  title: string;
  prop: string;
  image: string;
}
function TeamHashTag({ onCanChanged, onExceptChanged }: Props): ReactElement {
  // const [Category, setCategory] = useState();
  const [index, setIndex] = useState(0);
  const [hashTagList, setHashTagList] = useState([
    {
      hashTagPK: 0,
      title: "",
      prop: "",
      image: "",
    },
  ]);
  // 할 수 있는 기술스택
  const [can, setCan] = useState<list[]>([]);
  // 하고 싶은 기술스택
  const [except, setExcept] = useState<list[]>([]);

  // 할 수 있는 기술 스택
  const addTagToCan = (input: list) => {
    let check = true;
    if (input.prop === "기타") {
      alert("기타 항목의 해쉬태그는 구해요에 추가하실 수 없습니다.");
      return;
    }
    can.forEach((item) => {
      if (item.hashTagPK === input.hashTagPK) {
        check = false;
        alert("이미 존재하는 해쉬태그입니다.");
      }
    });
    if (check) {
      const TagList = hashTagList.filter((item) => input.hashTagPK === item.hashTagPK);
      setCan((can) => [...can, TagList[0]]);
    }
  };
  const [{ canIsOver }, dropCan] = useDrop(
    () => ({
      accept: "tag",
      drop: (item: list) => addTagToCan(item),
      collect: (monitor) => ({
        canIsOver: !!monitor.isOver(),
      }),
    }),
    [hashTagList, can]
  );
  // 제외 할 기술 스택
  const addTagToExcept = (input: list) => {
    let check = true;

    except.forEach((item) => {
      if (item.hashTagPK === input.hashTagPK) {
        check = false;
        alert("이미 존재하는 해쉬태그입니다.");
      }
    });
    if (check) {
      const TagList = hashTagList.filter((item) => input.hashTagPK === item.hashTagPK);
      setExcept((except) => [...except, TagList[0]]);
    }
  };
  const [{ exceptIsOver }, dropExcept] = useDrop(
    () => ({
      accept: "tag",
      drop: (item: list) => addTagToExcept(item),
      collect: (monitor) => ({
        exceptIsOver: !!monitor.isOver(),
      }),
    }),
    [hashTagList, except]
  );
  const canDelete = (value: number) => {
    const TagList = can.filter((item) => value !== item.hashTagPK);
    setCan(TagList);
  };
  const exceptDelete = (value: number) => {
    const TagList = except.filter((item) => value !== item.hashTagPK);
    setExcept(TagList);
  };
  const reset = () => {
    setCan([]);
    setExcept([]);
  };
  // const [dropList, setDropList] = useState();
  // useEffect( () =>  {
  //   const response = axios.get("https://jsonplaceholder.typicode.com/users");
  //   setCategory(response.data);
  // },[])
  useEffect(() => {
    // 목록 바꾸기 -> 추후 각 목록에 맞게 수정바람
    if (index === 0) {
      setHashTagList(Category.backend);
    } else if (index === 1) {
      setHashTagList(Category.frontend);
    } else if (index === 2) {
      setHashTagList(Category.frontend);
    } else if (index === 3) {
      setHashTagList(Category.frontend);
    } else if (index === 4) {
      setHashTagList(Category.frontend);
    }
  }, [index]);

  // 상위컴포넌트 can 바꾸기
  useEffect(() => {
    onCanChanged([...can]);
  }, [can]);
  // 상위컴포넌트 except 바꾸기
  useEffect(() => {
    if (onExceptChanged) onExceptChanged([...except]);
  }, [except]);
  return (
    <div>
      {/* 카테고리 */}
      <div className="grid grid-cols-5 align-middle text-center">
        <div
          className={
            "border-2 cursor-pointer hover:bg-gray-200 " + (index === 0 ? "bg-gray-200" : false)
          }
          onClick={() => setIndex(0)}
        >
          백엔드
        </div>
        <div
          className={
            "border-2 cursor-pointer hover:bg-gray-200 " + (index === 1 ? "bg-gray-200" : false)
          }
          onClick={() => setIndex(1)}
        >
          프론트엔드
        </div>
        <div
          className={
            "border-2 cursor-pointer hover:bg-gray-200 " + (index === 2 ? "bg-gray-200" : false)
          }
          onClick={() => setIndex(2)}
        >
          CI/CD
        </div>
        <div
          className={
            "border-2 cursor-pointer hover:bg-gray-200 " + (index === 3 ? "bg-gray-200" : false)
          }
          onClick={() => setIndex(3)}
        >
          4차 산업 기술
        </div>
        <div
          className={
            "border-2 cursor-pointer hover:bg-gray-200 " + (index === 4 ? "bg-gray-200" : false)
          }
          onClick={() => setIndex(4)}
        >
          기타
        </div>
      </div>
      {/* 카테고리 별 목록 */}
      <div className="border-2 flex flex-row flex-wrap h-40">
        {hashTagList.map((value) => {
          return (
            <Card
              key={value.hashTagPK}
              title={value.title}
              hashTagPK={value.hashTagPK}
              prop={value.prop}
              image={value.image}
            />
          );
        })}
      </div>
      {/* 드랍 */}
      {!onExceptChanged ? (
        <div className="grid grid-cols-1 align-middle text-center  ">
          <div>
            <div className="border-2">구해요</div>
            <div className="border-2 flex flex-row flex-wrap h-40" ref={dropCan}>
              {can.map((value) => {
                return (
                  <Card
                    key={value.hashTagPK}
                    title={value.title}
                    hashTagPK={value.hashTagPK}
                    prop={value.prop}
                    image={value.image}
                    cardDeleter={canDelete}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 align-middle text-center  ">
          <div>
            <div className="border-2">구해요</div>
            <div className="border-2 flex flex-row flex-wrap h-40" ref={dropCan}>
              {can.map((value) => {
                return (
                  <Card
                    key={value.hashTagPK}
                    title={value.title}
                    hashTagPK={value.hashTagPK}
                    prop={value.prop}
                    image={value.image}
                    cardDeleter={canDelete}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="border-2">제외</div>
            <div className="border-2 flex flex-row flex-wrap h-40" ref={dropExcept}>
              {except.map((value) => {
                return (
                  <Card
                    key={value.hashTagPK}
                    title={value.title}
                    hashTagPK={value.hashTagPK}
                    prop={value.prop}
                    image={value.image}
                    cardDeleter={exceptDelete}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* 초기화 버튼 */}
      <div className="items-center flex flex-col">
        <button
          type="button"
          className=" px-8 py-2 bg-red-600 text-white rounded-lg  shadow-sm hover:bg-red-500 focus:ring-2 focus:ring-indigo-200 m-2 "
          onClick={reset}
        >
          초기화
        </button>
      </div>
    </div>
  );
}

export default TeamHashTag;
