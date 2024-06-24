import PropTypes from "prop-types";
import { calculateWinner } from "../utils";
import OIcon from "./OIcon";
import XIcon from "./XIcon";

function Status({ xIsNext, squares }) {
  const winner = calculateWinner(squares);

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm/6 font-medium text-gray-900 ring-1 ring-inset ring-gray-200 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20">
      {winner.player ? (
        <>
          Winner:
          {winner.player === "X" ? (
            <XIcon className="size-4 fill-teal-400" />
          ) : (
            <OIcon className="size-4 fill-amber-400" />
          )}
        </>
      ) : squares.every(Boolean) ? (
        "Scratch: Cat's game"
      ) : (
        <>
          Next player:
          {xIsNext ? (
            <XIcon className="size-4 fill-teal-400" />
          ) : (
            <OIcon className="size-4 fill-amber-400" />
          )}
        </>
      )}
    </span>
  );
}
Status.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O"])),
};

export default Status;
