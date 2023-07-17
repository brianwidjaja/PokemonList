import "./NewPokemon.css";
import PokemonForm from "./PokemonForm";

import React, { useState } from "react";

const NewPokemon = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveNewPokemonData = (newPokemonData) => {
    const pokemonData = {
      ...newPokemonData,
      key: Math.random().toString(),
    };
    setDisplayForm(false);
    props.onAddToParty(pokemonData);
  };

  const displayFormHandler = () => {
    setDisplayForm(true);
  };

  const closeFormHandler = () => {
    setDisplayForm(false);
  };

  return (
    <div className="new-pokemon">
      {!displayForm && (
        <button onClick={displayFormHandler}>Add Pokemon</button>
      )}
      {displayForm && (
        <PokemonForm
          onSaveNewPokemon={saveNewPokemonData}
          onCloseForm={closeFormHandler}
        ></PokemonForm>
      )}
    </div>
  );
};

export default NewPokemon;
