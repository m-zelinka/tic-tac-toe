import PropTypes from "prop-types";
import { calculateWinner } from "../utils";
import Square from "./Square";

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const canPlayGame = winner.player === null && !squares.every(Boolean);

  function handleSquareClick(index) {
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {squares.map((square, squareIndex) => {
        const highlighted = winner.lines?.includes(squareIndex) ?? false;
        const filled = square !== null;
        const disabled = filled || !canPlayGame;

        return (
          <Square
            key={squareIndex}
            value={square}
            xIsNext={xIsNext}
            disabled={disabled}
            highlighted={highlighted}
            onClick={() => handleSquareClick(squareIndex)}
          />
        );
      })}
    </div>
  );
}
Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O"])),
  onPlay: PropTypes.func.isRequired,
};

export default Board;
