import React from "react";
import { defaultActionHandler } from "../../../utils/helpers/defaultButtonHandler";

const CancelButton = ({
  label = "",
  actionHandler = defaultActionHandler,
  customClassName = "",
}) => {
  return (
    <button
      onClick={actionHandler}
      className={`px-4 py-3 cursor-pointer bg-red-400 rounded-xl text-white ${customClassName}`}
    >
      {label}
    </button>
  );
};

export default CancelButton;
