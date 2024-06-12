import PropTypes from "prop-types";

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="m15 1.15 17 17 17-17a3 3 0 0 1 4.24 0l9.61 9.6a3 3 0 0 1 0 4.25l-17 17 17 17a3 3 0 0 1 0 4.24l-9.6 9.61a3 3 0 0 1-4.25 0l-17-17-17 17a3 3 0 0 1-4.24 0l-9.61-9.61a3 3 0 0 1 0-4.24l17-17-17-17a3 3 0 0 1 0-4.24l9.6-9.61a3 3 0 0 1 4.25 0Z" />
    </svg>
  );
}
XIcon.propTypes = {
  className: PropTypes.string,
};

export default XIcon;
