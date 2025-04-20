//  this is a custom hook to render the step form based on currentStep .
import React from 'react'
import Step1 from '../dashboard/applicationForm/steps/Step1';
import Step2 from '../dashboard/applicationForm/steps/Step2';
import Step3 from '../dashboard/applicationForm/steps/Step3';

const useStepsComponent = (currentStep) => {
    if (currentStep === 1) {
        return <Step1 />;
      } else if (currentStep === 2) {
        return <Step2 />;
      } else if (currentStep === 3) {
        return <Step3 />;
      } else {
        return null;
      }
}

export default useStepsComponent;
