import React, { ReactElement } from "react";
import HashTag from "../components/hashtag/HashTag";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface Props {}

function Search({}: Props): ReactElement {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <HashTag></HashTag>
      </DndProvider>
    </div>
  );
}

export default Search;
