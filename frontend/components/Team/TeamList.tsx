import React, { ReactElement } from "react";
import TeamCard from "./TeamCard";
interface Props {
  list: number[];
}

function TeamList({ list }: Props): ReactElement {
  return (
    <div className="grid grid-cols-3">
      {list.map((teamPk) => {
        return <TeamCard key={teamPk} teamPK={teamPk} />;
      })}
    </div>
  );
}

export default TeamList;
