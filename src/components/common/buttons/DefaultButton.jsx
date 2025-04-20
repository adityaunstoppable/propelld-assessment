import React from 'react';
import { defaultActionHandler } from '../../../utils/helpers/defaultButtonHandler';

const DefaultButton = ({ disabled = false, label = "", actionHandler = defaultActionHandler, customClassName = "" }) => {
  return (
    <button
      className={`px-4 py-3 rounded-xl cursor-pointer
        ${customClassName}
        ${disabled && 'bg-gray-300 text-gray-600 cursor-not-allowed'} 
        `}
      onClick={actionHandler}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default DefaultButton;
