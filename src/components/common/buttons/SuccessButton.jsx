import React from 'react'
import { defaultActionHandler } from '../../../utils/helpers/defaultButtonHandler';

const SuccessButton = ({ label = "", actionHandler = defaultActionHandler, customClassName = "" }) => {
    return (
        <button
            onClick={actionHandler}
            className={`px-4 py-3 cursor-pointer bg-green-200 rounded-xl ${customClassName}`}
        >
            {label}
        </button>
    )
};

export default SuccessButton;