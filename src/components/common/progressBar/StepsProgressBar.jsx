import React from "react";
// this is a progress bar present at top of step forms, this is basically taking two props 
// steps and activeStep and then rending the component based on props.
// it is checking if the tba is active using isActive variable.

const StepsProgressBar = ({ steps = [], activeStep = 1 }) => {
  return (
    <div className="flex items-center w-full md:px-30 mt-10">
      {steps.map((step, index) => {
        const stepNumber = index + 1; 
        const isActive = stepNumber <= activeStep;
        const isLastStep = index === steps.length - 1;

        return (
          <div key={index} className={`flex items-center ${!isLastStep && "w-full"}`}>
            <div
              className={`flex items-center ml-1 justify-center w-8 h-8 rounded-full text-white text-sm font-bold ${
                isActive ? "bg-green-800" : "bg-gray-300"
              }`}
            >
              {stepNumber}
            </div>

            <div className="ml-2 mr-4 text-sm font-medium text-gray-700 whitespace-nowrap">{step}</div>

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
