import clsx from "clsx";
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button
      type="button"
      className={clsx(
        "group flex h-36 items-center justify-center rounded-lg shadow-sm",
        // isHighlighted
        //   ? value === "X"
        //     ? "bg-teal-400"
        "bg-amber-400",
        "bg-white ring-1 ring-inset ring-gray-300 hover:enabled:bg-gray-50 dark:bg-white/10 dark:ring-0 dark:hover:enabled:bg-white/20",
      )}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Square;
