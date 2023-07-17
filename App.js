import PokemonList from "./components/Pokemon/PokemonList";
import NewPokemon from "./components/NewPokemon/NewPokemon";
import React, { useState } from "react";

const initial_party = [
  {
    key: Math.random().toString(),
    id: 448,
    name: "Lucario",
    hp: 126,
    level: 35,
    caughtDate: new Date(2022, 7, 14),
  },
  {
    key: Math.random().toString(),
    id: 350,
    name: "Milotic",
    hp: 148,
    level: 36,
    caughtDate: new Date(2023, 2, 12),
  },
  {
    key: Math.random().toString(),
    id: 257,
    name: "Blaziken",
    hp: 140,
    level: 37,
    caughtDate: new Date(2022, 2, 28),
  },
  {
    key: Math.random().toString(),
    id: 408,
    name: "Cranidos",
    hp: 95,
    level: 26,
    caughtDate: new Date(2022, 5, 12),
  },
  {
    key: Math.random().toString(),
    id: 150,
    name: "Mewtwo",
    hp: 269,
    level: 64,
    caughtDate: new Date(2022, 7, 14),
  },
];

const App = () => {
  const [party, setParty] = useState(initial_party);

  //Handler - receive information from child component, variable in bracket is the value that is being passed from the child component to the parent
  //Handler will be called in the return section --> the onMethod will be called by the child to pass the information to the parent
  const addToPartyHandler = (pokemon) => {
    setParty((prevParty) => {
      return [pokemon, ...prevParty];
    });
  };

  const adjustLevel = (id, type) => {
    const pokemon = party.find((item) => item.id === id);
    setParty((prevParty) => {
      console.log(pokemon);
      return [
        {
          ...pokemon,
          level:
            type === "increment"
              ? pokemon.level === 100
                ? (pokemon.level += 0)
                : (pokemon.level = pokemon.level + 1)
              : (pokemon.level = pokemon.level - 1),
          hp:
            type === "increment"
              ? pokemon.level === 100
                ? (pokemon.hp = pokemon.hp * 1)
                : (pokemon.hp *= 1.02).toFixed()
              : (pokemon.hp *= 0.98),
        },
        ...prevParty.filter((item) => item.id !== id),
      ];
    });
  };
  return (
    <div>
      <NewPokemon onAddToParty={addToPartyHandler}></NewPokemon>
      <PokemonList partyList={party} adjustLevel={adjustLevel} />
    </div>
  );
};

export default App;
