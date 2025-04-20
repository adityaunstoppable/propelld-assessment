import React from "react";
import DefaultButton from "../../common/buttons/DefaultButton";
import SuccessButton from "../../common/buttons/SuccessButton";
import { STEPS_COUNT } from "../../../utils/constants/applicationForm";

// this is a footer that is handling next and previous steps dynamically.
// we can scale the webapp with any numbere of steps and next and previous will be taken care here. (functionalities are defined in ApplicationForm.jsx)

const FormFooter = ({ handleSubmit, currentStep, handleNextStep, handlePrevStep, isStepValid }) => {
  return (
    <div className="">
      <div className="flex justify-end">
        {currentStep !== 1 && (
          <DefaultButton actionHandler={handlePrevStep} label="Back" customClassName="bg-white hover:bg-gray-100 border border-black mr-5" />
        )}
        
        {currentStep < STEPS_COUNT && (
          <DefaultButton 
            actionHandler={handleNextStep} 
            label="Next" 
            disabled={!isStepValid}
            customClassName={`${isStepValid && "hover:bg-green-900 bg-green-800 text-white"}`}
          />
        )}

        {currentStep === STEPS_COUNT && (
          <SuccessButton actionHandler={handleSubmit} label="Submit" customClassName="hover:bg-green-900 bg-green-800 text-white mr-5" />
        )}
      </div>
    </div>
  );
};

export default FormFooter;
