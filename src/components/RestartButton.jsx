import { ArrowPathIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

function RestartButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
      aria-label="Restart"
    >
      <ArrowPathIcon className="size-5" />
    </button>
  );
}
RestartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RestartButton;
