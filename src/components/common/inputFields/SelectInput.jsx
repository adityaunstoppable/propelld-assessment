import React from "react";

const SelectInput = ({
  label = "",
  placeholder = "",
  changeHandler,
  value = "",
  options = [],
  customClassName = "",
  required = false,
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col w-full md:w-1/2 ${customClassName}`}>
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        onChange={changeHandler}
        value={value}
        required={required}
        disabled={disabled}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 p-3 rounded-xl transition-all duration-200"
      >
        <option value="">{placeholder || "Select an option"}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
