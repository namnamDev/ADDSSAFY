import React, { ReactElement } from "react";
import HashTag from "../components/hashtag/HashTag";
interface Props {}

function Search({}: Props): ReactElement {
  return (
    <div>
      <HashTag></HashTag>
    </div>
  );
}

export default Search;
