export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div>Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
}
