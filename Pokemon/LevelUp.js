import "./LevelUp.css";

import React from "react";

function LevelUp(props) {
  //   const [level, setLevel] = useState(props.level);
  //   const [hp, setHp] = useState(props.hp);

  const clickHandler = () => {
    props.onLevelUp(props.id, "increment");
  };
  return <button className="level_up" onClick={clickHandler}></button>;
}

export default LevelUp;
