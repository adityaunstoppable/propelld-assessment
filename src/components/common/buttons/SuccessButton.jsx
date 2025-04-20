import React from "react";
import { defaultActionHandler } from "../../../utils/helpers/defaultButtonHandler";

const SuccessButton = ({
  label = "",
  actionHandler = defaultActionHandler,
  customClassName = "",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={actionHandler}
      className={`px-4 py-3  rounded-xl 
        ${customClassName}
        ${!disabled ? 'cursor-pointer bg-green-300' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}
        `}
    >
      {label}
    </button>
  );
};

export default SuccessButton;
