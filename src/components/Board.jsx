import Square from "./Square";

function Board() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Square />
    </div>
  );
}

export default Board;
