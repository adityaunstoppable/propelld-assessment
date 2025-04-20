import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFormData, addStepData, validateStep } from "../../../redux/slices/dashboardSlice";
import FormFooter from "./FormFooter";
import StepsProgressBar from "../../common/progressBar/StepsProgressBar";
import { STEP_NAMES } from "../../../utils/constants/applicationForm";
import useStepsComponent from "../../customHooks/useStepsComponent";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../../utils/constants/routes";
import { showSuccessToast, showWarningToast } from "../../../redux/slices/toastSlice";

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();
  const {stepValidation, formData} = useSelector((state) => state.dashboard);
  const navigate = useNavigate();

//   this function is handling next step and it is checking if the step is validated.
// if the step is validated it will set the currentStep to (currentStep + 1) , meaning, the next step.
  const handleNextStep = () => {
    const currentStepKey = `step${currentStep}`;
    if (stepValidation[currentStepKey]) {
      setCurrentStep((prev) => prev + 1);
      dispatch(showSuccessToast(`Step-${currentStep} Completed!`))
    } else {
      dispatch(showWarningToast("Please fill all the fields in the current step."));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

//   this function is simply submitting the form and taking the user back to dashboard.
  const handleSubmit = () => {
    if(formData){
        dispatch(addFormData(formData))
        navigate(DASHBOARD)
        dispatch(showSuccessToast(`Loan Application Submitted Successfully!`))
        dispatch(showSuccessToast(`Application status is being changed to Under Review.`))
    }
  };

  // Used the custom hook to render the step based on currentStep
  const renderStep = useStepsComponent(currentStep);

  return (
    <div>
      <StepsProgressBar steps={STEP_NAMES} activeStep={currentStep} />
      {renderStep}

        {/* added simple class for footer so that it appeaers at the bottom of page */}
      <div className="absolute right-10 bottom-10">
        <FormFooter
          currentStep={currentStep}
          handleSubmit={handleSubmit}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          isStepValid={stepValidation[`step${currentStep}`]}
        />
      </div>
    </div>
  );
};

export default ApplicationForm;
