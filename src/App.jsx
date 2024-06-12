import { useState } from "react";
import Board from "./components/Board";
import Status from "./components/Status";
import TimeTravel from "./components/TimeTravel";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleJump(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <main className="flex min-h-full flex-col justify-center bg-gray-100 px-6 py-10 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto flex w-full max-w-md items-center justify-between">
        <Status xIsNext={xIsNext} squares={currentSquares} />
      </div>
      <div className="mx-auto mt-10 w-full max-w-md">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="mx-auto mt-10 w-full max-w-md">
        <details className="group">
          <summary className="select-none text-sm/6 font-semibold text-gray-900 dark:text-white">
            View history
          </summary>
          <div className="mt-3 rounded-xl bg-white px-4 py-5 shadow-lg ring-1 ring-black/5 sm:p-6 dark:bg-gray-950 dark:ring-white/10">
            <TimeTravel
              history={history}
              currentMove={currentMove}
              onJump={handleJump}
            />
          </div>
        </details>
      </div>
    </main>
  );
}

export default Game;
