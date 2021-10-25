import React, { ReactElement, useEffect, useState } from "react";
import Category from "../../dummy/json/categoryDump.json";
import axios from "axios";
import Card from "./Card";
import { useDrop } from "react-dnd";
interface Props {}
interface list {
  hashTagPK: number;
  title: string;
  prop: string;
  image: string;
}
function HashTag({}: Props): ReactElement {
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
  const [want, setWant] = useState<list[]>([]); // 제외 할 기술스택
  const [except, setExcept] = useState<list[]>([]);

  // 할 수 있는 기술 스택
  const addTagToCan = (input: list) => {
    let check = true;
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
  // 하고 싶은 기술 스택
  const addTagToWant = (input: list) => {
    let check = true;
    want.forEach((item) => {
      if (item.hashTagPK === input.hashTagPK) {
        check = false;
        alert("이미 존재하는 해쉬태그입니다.");
      }
    });
    if (check) {
      const TagList = hashTagList.filter((item) => input.hashTagPK === item.hashTagPK);
      setWant((want) => [...want, TagList[0]]);
    }
  };
  const [{ wantIsOver }, dropWant] = useDrop(
    () => ({
      accept: "tag",
      drop: (item: list) => addTagToWant(item),
      collect: (monitor) => ({
        wantIsOver: !!monitor.isOver(),
      }),
    }),
    [hashTagList, want]
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
  return (
    <div>
      {/* 카테고리 */}
      <div className="grid grid-cols-5 align-middle text-center">
        <div className="border-2" onClick={() => setIndex(0)}>
          백엔드
        </div>
        <div className="border-2" onClick={() => setIndex(1)}>
          프론트엔드
        </div>
        <div className="border-2" onClick={() => setIndex(2)}>
          CI/CD
        </div>
        <div className="border-2" onClick={() => setIndex(3)}>
          4차 산업 기술
        </div>
        <div className="border-2" onClick={() => setIndex(4)}>
          기타
        </div>
      </div>
      {/* 카테고리 별 목록 */}
      <div className="border-2 flex flex-row flex-wrap ">
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
      <div className="grid grid-cols-3 align-middle text-center  ">
        <div>
          <div>할 수 있어요</div>
          <div className="border-2 flex flex-row flex-wrap" ref={dropCan}>
            {can.map((value) => {
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
        </div>
        <div>
          <div>하고 싶어요</div>
          <div className="border-2 flex flex-row flex-wrap" ref={dropWant}>
            {want.map((value) => {
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
        </div>
        <div>
          <div>제외</div>
          <div className="border-2 flex flex-row flex-wrap" ref={dropExcept}>
            {except.map((value) => {
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
        </div>
      </div>
    </div>
  );
}

export default HashTag;
