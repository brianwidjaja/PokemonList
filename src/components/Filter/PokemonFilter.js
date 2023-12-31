import React from "react";

import "./PokemonFilter.css";

const PokemonFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <div className="pokemon-filter">
      <div className="pokemon-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default PokemonFilter;
