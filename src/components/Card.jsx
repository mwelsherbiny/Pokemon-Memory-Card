import { useEffect } from "react";
import { useState } from "react";

export default function Card({ pokemon, handleClick }) {
  const [pokemonImage, setPokemonImage] = useState(null);
  const name = pokemon.name;

  useEffect(() => {
    async function getPokemonImage() {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      const image = data.sprites.front_default;
      setPokemonImage(image);
    }
    getPokemonImage();
  }, [pokemon.url]);

  return (
    <div className="card" onClick={() => handleClick(name)}>
      <img src={pokemonImage} alt={name} />
      <p>{pokemon.name}</p>
    </div>
  );
}
