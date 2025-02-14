import { useEffect } from "react";
import { useState } from "react";

import placeholderImg from "../assets/pokeball.png";

export default function Card({ pokemon, handleClick }) {
  const [pokemonImage, setPokemonImage] = useState(null);
  const name = pokemon.name;

  useEffect(() => {
    async function getPokemonImage() {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      const imageSrc = data.sprites.front_default;

      await new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });

      setPokemonImage(imageSrc);
    }
    getPokemonImage();
  }, [pokemon.url]);

  return (
    <div className="card" onClick={() => handleClick(name)}>
      <img
        src={pokemonImage ? pokemonImage : placeholderImg}
        alt={name}
        width="190px"
        height="190px"
      />
      <p>{pokemon.name}</p>
    </div>
  );
}
