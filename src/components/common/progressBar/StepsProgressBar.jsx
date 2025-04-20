import React from "react";

const StepsProgressBar = ({ steps = [], activeStep = 1 }) => {
  return (
    <div className="flex items-center w-full md:px-30 mt-10">
      {steps.map((step, index) => {
        const stepNumber = index + 1; // Now step number starts from 1
        const isActive = stepNumber <= activeStep;
        const isLastStep = index === steps.length - 1;

        return (
          <div key={index} className={`flex items-center ${!isLastStep && "w-full"}`}>
            {/* Circle */}
            <div
              className={`flex items-center ml-1 justify-center w-8 h-8 rounded-full text-white text-sm font-bold ${
                isActive ? "bg-green-800" : "bg-gray-300"
              }`}
            >
              {stepNumber}
            </div>

            {/* Step label */}
            <div className="ml-2 mr-4 text-sm font-medium text-gray-700 whitespace-nowrap">{step}</div>

            {/* Connector Line */}
            {!isLastStep && (
              <div
                className={`flex-1 ${isActive ? "bg-green-700" : "bg-gray-300"}`}
                style={{ height: "1px" }} 
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepsProgressBar;
