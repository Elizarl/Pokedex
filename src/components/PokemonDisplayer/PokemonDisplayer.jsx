/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import "../PokemonDisplayer/PokemonDisplayer.scss";

const PokemonDisplayer = () => {
  const [pokemonData, setPokemonData] = useState();
  const pokeNumber = Math.floor(Math.random() * 1011);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="container">
      <header className="head">PokeDex</header>
      <div className="poke-display">
        <img  src={pokemonData?.sprites?.front_default} />
      </div>
    </div>
  );
};

export default PokemonDisplayer;
