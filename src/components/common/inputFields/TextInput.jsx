import React from "react";

const TextInput = ({
  label = "",
  placeholder = "Enter",
  changeHandler,
  value = "",
  customClassName = "",
  required = false,
}) => {
  return (
    <div className={`flex flex-col w-full md:w-1/2 ${customClassName}`}>
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        onChange={changeHandler}
        value={value}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 p-3 rounded-xl transition-all duration-200"
        type="text"
      />
    </div>
  );
};

export default TextInput;
