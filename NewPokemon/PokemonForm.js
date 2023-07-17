import React, { useState } from "react";
import "./PokemonForm.css";

const PokemonForm = (props) => {
  const [newPokemonName, setNewPokemonName] = useState("");
  const [newPokemonID, setNewPokemonID] = useState("");
  const [newPokemonHP, setNewPokemonHP] = useState("");
  const [newPokemonLevel, setNewPokemonLevel] = useState("");
  const [newPokemonCaughtDate, setNewPokemonCaughtDate] = useState("");

  const nameChangeHandler = (event) => {
    setNewPokemonName(event.target.value);
  };

  const idChangeHandler = (event) => {
    setNewPokemonID(event.target.value);
  };

  const hpChangeHandler = (event) => {
    setNewPokemonHP(event.target.value);
  };

  const levelChangeHandler = (event) => {
    setNewPokemonLevel(event.target.value);
  };

  const caughtDateChangeHandler = (event) => {
    setNewPokemonCaughtDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newPokemonData = {
      key: Math.random().toString(),
      id: newPokemonID,
      name: newPokemonName,
      hp: newPokemonHP,
      level: +newPokemonLevel,
      caughtDate: new Date(newPokemonCaughtDate),
    };

    props.onSaveNewPokemon(newPokemonData);
    setNewPokemonName("");
    setNewPokemonID("");
    setNewPokemonHP("");
    setNewPokemonLevel("");
    setNewPokemonCaughtDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-pokemon__controls">
        <div className="new-pokemon__control">
          <label id="new-pokemon__id">id</label>
          <input
            id="new-pokemon__id"
            type="number"
            min="1"
            max="649"
            placeholder="id"
            value={newPokemonID}
            onChange={idChangeHandler}
            required
          ></input>
        </div>
        <div className="new-pokemon__control">
          <label id="new-pokemon__name">Name</label>
          <input
            id="new-pokemon__name"
            type="text"
            placeholder="Name"
            value={newPokemonName}
            onChange={nameChangeHandler}
            required
          ></input>
        </div>
        <div className="new-pokemon__control">
          <label id="new-pokemon__hp">HP</label>
          <input
            id="new-pokemon__hp"
            type="number"
            step="1"
            min="1"
            placeholder="HP"
            value={newPokemonHP}
            onChange={hpChangeHandler}
            required
          ></input>
        </div>
        <div className="new-pokemon__control">
          <label id="new-pokemon__level">Level</label>
          <input
            id="new-pokemon__level"
            type="number"
            step="1"
            min="1"
            max="100"
            placeholder="Level"
            value={newPokemonLevel}
            onChange={levelChangeHandler}
            required
          ></input>
        </div>
        <div className="new-pokemon__control">
          <label id="new-pokemon__date">Date</label>
          <input
            id="new-pokemon__date"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={newPokemonCaughtDate}
            onChange={caughtDateChangeHandler}
            required
          ></input>
        </div>
      </div>

      <div className="new-pokemon__actions">
        <button onClick={props.onCloseForm}>Cancel</button>
        <button type="submit">New Pokemon</button>
      </div>
    </form>
  );
};

export default PokemonForm;
