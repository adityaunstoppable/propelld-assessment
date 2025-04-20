//  this component has the most complex code in whole webapp , 
// it has the design and UX similar to what we have in big companies like swiggy, zomato.
import React, { useRef, useState, useEffect, useCallback } from "react";

const MultiInputField = ({
  totalFields = 4,
  defaultValue = "",
  onChange,
}) => {
  const [values, setValues] = useState(() => {
    return Array.from({ length: totalFields }, (_, idx) => defaultValue[idx] || "");
  });

  const inputRefs = useRef([]);

  useEffect(() => {
    setValues(Array.from({ length: totalFields }, (_, idx) => defaultValue[idx] || ""));
  }, [defaultValue, totalFields]);

  useEffect(() => {
    const firstEmptyIndex = values.findIndex((value) => value === "");
    if (firstEmptyIndex !== -1 && inputRefs.current[firstEmptyIndex]) {
      inputRefs.current[firstEmptyIndex].focus();
    }
  }, [values]);

  const updateValues = useCallback((newValues) => {
    setValues(newValues);
    onChange?.(newValues.join(""));
  }, [onChange]);

  const handleInputChange = (e, index) => {
    let { value } = e.target;
  
    if (value.length > 1) return; // only one character allowed
  
    // Check if the typed value is a digit (0-9)
    if (value && (value < "0" || value > "9")) return; // if not a number, ignore
  
    const newValues = [...values];
    newValues[index] = value;
    updateValues(newValues);
  
    if (value && index < totalFields - 1) {
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
        newValues[index - 1] = "";
        updateValues(newValues);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < totalFields - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("Text").slice(0, totalFields);

    const newValues = Array.from({ length: totalFields }, (_, idx) => pastedText[idx] || "");
    updateValues(newValues);

    const nextFocusIndex = newValues.findIndex((value) => value === "");
    inputRefs.current[nextFocusIndex !== -1 ? nextFocusIndex : totalFields - 1]?.focus();
  };

  return (
    <fieldset className="flex justify-center w-full" onPaste={handlePaste}>
      <legend className="sr-only">Enter your OTP</legend>
      <div className="flex space-x-3">
        {values.map((value, idx) => (
          <input
            key={idx}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleInputChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => (inputRefs.current[idx] = el)}
            aria-label={`Digit ${idx + 1}`}
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        ))}
      </div>
    </fieldset>
  );
};

export default MultiInputField;
