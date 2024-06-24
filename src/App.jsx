import { useState } from "react";
import Board from "./components/Board";
import OIcon from "./components/OIcon";
import RestartButton from "./components/RestartButton";
import Status from "./components/Status";
import TimeTravel from "./components/TimeTravel";
import XIcon from "./components/XIcon";

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

  function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <main className="flex min-h-full flex-col justify-center bg-gray-50 px-6 py-10 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto mt-10 w-full max-w-md md:max-w-3xl">
        <div className="grid grid-cols-1 grid-rows-1 items-start gap-8 md:grid-cols-5">
          <div className="flex items-center justify-between md:col-span-3 md:col-start-1 md:row-end-1">
            <Logo />
            <Status xIsNext={xIsNext} squares={currentSquares} />
            <RestartButton onClick={handleRestart} />
          </div>
          <div className="md:col-span-3 md:col-start-1">
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </div>
          <div className="md:col-span-2 md:row-span-2 md:row-end-2 md:h-full">
            <details className="group md:hidden">
              <summary className="select-none text-sm/6 font-semibold text-gray-900 dark:text-white">
                History
              </summary>
              <div className="mt-3 h-64 overflow-y-auto rounded-xl bg-white px-4 py-5 shadow-sm ring-1 ring-gray-900/5 sm:p-6 dark:bg-gray-950 dark:ring-white/10">
                <TimeTravel
                  history={history}
                  currentMove={currentMove}
                  onJump={handleJump}
                />
              </div>
            </details>
            <div className="group flex h-full flex-col max-md:hidden">
              <div className="pt-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
                History
              </div>
              <div className="mt-3 flex-1 overflow-y-auto rounded-xl bg-white px-4 py-5 shadow-sm ring-1 ring-gray-900/5 sm:p-6 dark:bg-gray-950 dark:ring-white/10">
                <TimeTravel
                  history={history}
                  currentMove={currentMove}
                  onJump={handleJump}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Game;

function Logo() {
  return (
    <div className="flex gap-1">
      <XIcon className="h-6 w-auto fill-teal-400" />
      <OIcon className="h-6 w-auto fill-amber-400" />
    </div>
  );
}
