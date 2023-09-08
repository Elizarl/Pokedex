/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";


import "../PokemonDisplayer/PokemonDisplayer.scss";
import PokemonDisplayerUI from "./PokemonDisplayerUI";

const PokemonDisplayer = () => {
  const [pokemonData, setPokemonData] = useState();
 
  
  const pokeNumber = Math.floor(Math.random() * 1011);

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
       .then((res) => res.json())
       .then((data) => setPokemonData(data))
       .catch((error) => console.log(error))
   }, []);
 
  useEffect(() => {
   const interval= setInterval(async ()=>{
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error))
    },30000);


	return () => {
		clearInterval(interval);
	};
   
  }, [pokeNumber]);


  return (
   <PokemonDisplayerUI pokemonData={pokemonData}/>
  );
};

export default PokemonDisplayer;
