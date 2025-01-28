import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { shuffle } from "../utils";

const cardCount = 12;

export default function Cards({
  incrementScore,
  resetScore,
  updateBestScore,
  gamesCount,
  setGamesCount,
}) {
  const [pokemonData, setPokemonData] = useState(null);
  const [clickedCards, setClickedCards] = useState([]);
  let loading = pokemonData ? false : true;

  useEffect(() => {
    async function getPokemonDate() {
      const offset = Math.floor(Math.random() * 100);
      const limit = cardCount;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
      );
      const data = await response.json();
      setPokemonData(data.results);
    }
    getPokemonDate();
  }, [gamesCount]);

  function handleClick(pokemonName) {
    if (clickedCards.includes(pokemonName)) {
      updateBestScore();
      resetScore();
      setClickedCards([]);
      setGamesCount(gamesCount + 1);
    } else {
      incrementScore();
      setClickedCards([...clickedCards, pokemonName]);
    }
    shuffle(pokemonData);
  }

  return (
    <div className="cards">
      {loading ? (
        <div>Loading...</div>
      ) : (
        pokemonData.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemon={pokemon}
            handleClick={handleClick}
          />
        ))
      )}
    </div>
  );
}
