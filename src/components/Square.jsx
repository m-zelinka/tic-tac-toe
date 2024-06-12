import clsx from "clsx";
import PropTypes from "prop-types";
import OIcon from "./OIcon";
import XIcon from "./XIcon";

function Square({ value, xIsNext, disabled, highlighted, onClick }) {
  const label = value !== null ? value : "Empty";
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "group flex h-36 items-center justify-center rounded-lg shadow-sm",
        highlighted
          ? value === "X"
            ? "bg-teal-400"
            : "bg-amber-400"
          : "bg-white ring-1 ring-inset ring-gray-300 hover:enabled:bg-gray-50 dark:bg-white/10 dark:ring-0 dark:hover:enabled:bg-white/20",
      )}
      aria-label={label}
    >
      {value === "X" ? (
        <XIcon
          className={clsx(
            "size-12",
            highlighted ? "fill-white dark:fill-gray-900" : "fill-teal-400",
          )}
        />
      ) : value === "O" ? (
        <OIcon
          className={clsx(
            "size-12",
            highlighted ? "fill-white dark:fill-gray-900" : "fill-amber-400",
          )}
        />
      ) : xIsNext ? (
        <XIcon className="size-12 fill-transparent stroke-teal-400 stroke-2 opacity-0 group-hover:group-enabled:opacity-100" />
      ) : (
        <OIcon className="size-12 fill-transparent stroke-amber-400 stroke-2 opacity-0 group-hover:group-enabled:opacity-100" />
      )}
    </button>
  );
}
Square.propTypes = {
  value: PropTypes.string,
  xIsNext: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  highlighted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
