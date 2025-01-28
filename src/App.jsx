import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
import WinningScreen from "./components/WinningScreen";

const cardCount = 12;

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gamesCount, setGamesCount] = useState(0);

  function incrementScore() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }

  function updateBestScore() {
    if (score > bestScore) {
      setBestScore(score);
    }
  }

  function resetGame() {
    updateBestScore();
    setScore(0);
    setGamesCount(gamesCount + 1);
  }

  return (
    <div className="main">
      <Scoreboard score={score} bestScore={bestScore} />
      {score < cardCount ? (
        <Cards
          incrementScore={incrementScore}
          resetScore={resetScore}
          updateBestScore={updateBestScore}
          gamesCount={gamesCount}
          setGamesCount={setGamesCount}
        />
      ) : (
        <WinningScreen resetGame={resetGame} />
      )}
    </div>
  );
}

export default App;
