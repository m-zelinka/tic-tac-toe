import Board from "./components/Board";

function Game() {
  return (
    <main className="flex min-h-full flex-col justify-center bg-gray-100 px-6 py-10 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto mt-10 w-full max-w-md">
        <Board />
      </div>
    </main>
  );
}

export default Game;
