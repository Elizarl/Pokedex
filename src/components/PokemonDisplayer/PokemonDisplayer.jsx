/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import "../PokemonDisplayer/PokemonDisplayer.scss";
import PokemonDisplayerUI from "./PokemonDisplayerUI";

const PokemonDisplayer = () => {
  const [pokemonData, setPokemonData] = useState();

  const pokeNumber = Math.floor(Math.random() * 1011);

  const PokeApi=()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
    .then((res) => res.json())
    .then((data) => setPokemonData(data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    PokeApi();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      await PokeApi();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [pokeNumber]);

  const showNextPoke =()=>{
    PokeApi();
  };

  return <PokemonDisplayerUI pokemonData={pokemonData} showNextPoke={showNextPoke} />;
};

export default PokemonDisplayer;
