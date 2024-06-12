import clsx from "clsx";
import PropTypes from "prop-types";

function TimeTravel({ history, currentMove, onJump }) {
  return (
    <ol className="space-y-6">
      {history.map((_squares, move) => (
        <li key={move} className="relative flex gap-4">
          <div
            className={clsx(
              move === history.length - 1 ? "h-6" : "-bottom-6",
              "absolute left-0 top-0 flex w-6 justify-center",
            )}
            aria-hidden
          >
            <div className="w-px bg-gray-200 dark:bg-gray-900" />
          </div>
          <div
            className="relative flex size-6 flex-none items-center justify-center bg-white dark:bg-gray-950"
            aria-hidden
          >
            <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300 dark:bg-gray-100/5 dark:ring-white/10" />
          </div>
          <p className="flex-auto py-0.5 text-xs/5">
            {currentMove === move ? (
              <span className="text-gray-500">
                {move > 0
                  ? `You are at move #${move}`
                  : "You are at game start"}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => onJump(move)}
                className="font-medium text-gray-900 dark:text-white"
              >
                {move > 0 ? `Go to move #${move}` : "Go to game start"}
              </button>
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}
TimeTravel.propTypes = {
  history: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf(["X", "O"])))
    .isRequired,
  currentMove: PropTypes.number.isRequired,
  onJump: PropTypes.func.isRequired,
};

export default TimeTravel;
