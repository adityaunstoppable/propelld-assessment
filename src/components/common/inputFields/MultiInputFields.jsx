import React, { useRef, useState, useEffect } from "react";

const MultiInputField = ({
  totalFields = 4,
  defaultValue = "",
  onChange,
}) => {
  const [values, setValues] = useState(
    defaultValue
      ? defaultValue.padEnd(totalFields, "").split("")
      : Array(totalFields).fill("")
  );
  const inputRefs = useRef([]);

  useEffect(() => {
    const newValues = defaultValue
      ? defaultValue.padEnd(totalFields, "").split("")
      : Array(totalFields).fill("");
    setValues(newValues);
  }, [defaultValue, totalFields]);
  
  useEffect(() => {
    const firstEmpty = values.findIndex((val) => val === "");
    if (firstEmpty !== -1 && inputRefs.current[firstEmpty]) {
      inputRefs.current[firstEmpty].focus();
    }
  }, [values]);

  const updateValues = (newValues) => {
    setValues(newValues);
    if (onChange) {
      onChange(newValues.join(""));
    }
  };

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (isNaN(val) || val.length > 1) return;

    const newValues = [...values];
    newValues[index] = val;
    updateValues(newValues);

    if (val && index < totalFields - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newValues = [...values];

      if (newValues[index]) {
        newValues[index] = "";
        updateValues(newValues);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        newValues[index - 1] = "";
        updateValues(newValues);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, totalFields);
    if (isNaN(pasteData)) return;

    const pasteArray = pasteData.split("");
    while (pasteArray.length < totalFields) pasteArray.push("");
    updateValues(pasteArray);

    const nextFocus = pasteArray.findIndex((val) => val === "");
    inputRefs.current[nextFocus !== -1 ? nextFocus : totalFields - 1]?.focus();
  };

  return (
    <div className="flex justify-center w-full" onPaste={handlePaste}>
      <div className="flex space-x-3">
        {Array.from({ length: totalFields }).map((_, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={values[idx] || ""}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => (inputRefs.current[idx] = el)}
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default MultiInputField;
