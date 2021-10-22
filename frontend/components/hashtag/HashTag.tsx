import React, { ReactElement } from "react";
import Category from "../../dummy/json/categoryDump.json";
interface Props {}

function HashTag({}: Props): ReactElement {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div>백엔드</div>
        <div>프론트엔드</div>
        <div>CI/CD</div>
        <div>4차 산업 기술</div>
        <div>기타</div>
      </div>
      <div>
        {Category.map((value) => {
          // return {value.title};
        })}
      </div>
    </div>
  );
}

export default HashTag;
