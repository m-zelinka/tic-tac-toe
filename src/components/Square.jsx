import clsx from "clsx";
import PropTypes from "prop-types";

function Square({ value, onClick, disabled }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "group flex h-36 items-center justify-center rounded-lg shadow-sm",
        // isHighlighted
        //   ? value === "X"
        //     ? "bg-teal-400"
        "bg-amber-400",
        "bg-white ring-1 ring-inset ring-gray-300 hover:enabled:bg-gray-50 dark:bg-white/10 dark:ring-0 dark:hover:enabled:bg-white/20",
      )}
    >
      {value}
    </button>
  );
}
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Square;
