import CaughtDate from "./CaughtDate";
import "./Pokemon.css";
import Card from "./Card";
import Sprite from "./Sprite";
import LevelUp from "./LevelUp";

import React from "react";

function Pokemon({ caughtDate, id, name, hp, level, adjustLevel }) {
  return (
    <div>
      <Card className={"pokemon"}>
        <CaughtDate caughtDate={caughtDate} />
        <Sprite id={id} />
        <div className="pokemon__name">
          <h2>{name}</h2>
          <h2>HP: {hp}</h2>
        </div>
        <div className="pokemon__level"> Lv{level}</div>
        <LevelUp hp={hp} id={id} level={level} onLevelUp={adjustLevel} />
      </Card>
    </div>
  );
}
export default Pokemon;
