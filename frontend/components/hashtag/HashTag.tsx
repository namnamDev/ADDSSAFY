import React, { ReactElement, useEffect, useState } from "react";
import Category from "../../dummy/json/categoryDump.json";
import axios from "axios";
interface Props {}

function HashTag({}: Props): ReactElement {
  // const [Category, setCategory] = useState();
  const [index, setIndex] = useState(0);
  // useEffect( () =>  {
  //   const response = axios.get("https://jsonplaceholder.typicode.com/users");
  //   setCategory(response.data);
  // },[])
  return (
    <div>
      <div className="grid grid-cols-5">
        {/* <div onClick={setIndex(0)}>백엔드</div> */}
        <div>프론트엔드</div>
        <div>CI/CD</div>
        <div>4차 산업 기술</div>
        <div>기타</div>
      </div>
      <div>
        {/* {Category.map((value) => {
          return value.title;
        })} */}
      </div>
    </div>
  );
}

export default HashTag;
