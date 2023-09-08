/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import "../PokemonDisplayer/PokemonDisplayer.scss";

const PokemonDisplayerUI = ({pokemonData}) => (
  <div className="container">
  <header className="head"><img src="Pokedex_logo.png" /></header>
  <div className="poke-display">
    <img src={pokemonData?.sprites?.front_default} />
  </div>
</div>
)

export default PokemonDisplayerUI;
