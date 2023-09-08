/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button } from "@mui/material";

import "../PokemonDisplayer/PokemonDisplayer.scss";

const PokemonDisplayerUI = ({ pokemonData, showNextPoke }) => (
  <div className="container">
    <header className="head">
      <img src="Pokedex_logo.png" />
    </header>
    <div className="poke-display">
      <img src={pokemonData?.sprites?.front_default} />
    </div>
    <div className="next">
      <Button onClick={showNextPoke} className="button">
        <p>Next Pokémon </p>
        <img src="pokeball.png" />{" "}
      </Button>
    </div>
  </div>
);

export default PokemonDisplayerUI;
