import "./PokemonList.css";
import Card from "./Card";
import Pokemon from "./Pokemon";
import PokemonChart from "./PokemonChart";
import PokemonFilter from "../Filter/PokemonFilter";

import React, { useState } from "react";

const PokemonList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //Add pokemon into filteredPartyList if the year that they were caught in (from caughtDate) is equal to the selected year (filteredYear )
  const filteredPartyList = props.partyList.filter((pokemon) => {
    return pokemon.caughtDate.getFullYear().toString() === filteredYear;
  });

  const restOfList = props.partyList.filter((pokemon) => {
    return pokemon.caughtDate.getFullYear().toString() !== filteredYear;
  });
  return (
    <div>
      <Card className="pokemon-list">
        <PokemonFilter
          selected={filteredYear}
          onFilter={filterHandler}
        ></PokemonFilter>
        {/* [somearray].map(arbitraryvalue) => (Component and map variables that have been initialized in Component file) */}
        <PokemonChart partyList={props.partyList}></PokemonChart>

        {filteredPartyList.map((pokemon) => (
          <Pokemon
            key={Math.random().toString()}
            id={pokemon.id}
            name={pokemon.name}
            hp={pokemon.hp}
            level={pokemon.level}
            caughtDate={pokemon.caughtDate}
            adjustLevel={props.adjustLevel}
          />
        ))}
        {restOfList.map((pokemon) => (
          <Pokemon
            key={Math.random().toString()}
            id={pokemon.id}
            name={pokemon.name}
            hp={pokemon.hp}
            level={pokemon.level}
            caughtDate={pokemon.caughtDate}
            adjustLevel={props.adjustLevel}
          />
        ))}
      </Card>
    </div>
  );
};

export default PokemonList;
