export default function WinningScreen({ resetGame }) {
  return (
    <div className="winning-screen">
      <h1>You Win!</h1>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
}
