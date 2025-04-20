import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuccessButton from "../common/buttons/SuccessButton";
import { useNavigate } from "react-router-dom";
import { APPLICATION_FORM } from "../../utils/constants/routes";
import ViewLoanApplicationForm from "./applicationForm/ViewLoanApplicationForm";

const Dashboard = () => {
  //extracting the formData state from redux store.
  const formState = useSelector((state) => state.dashboard);
  const navigate = useNavigate();

  //destructuring formData and isEditing from formState
  const { loanApplicationForm, isEditing } = formState;

  // this function opens the form to add a loan application
  const openLoanApplicationForm = () => {
    // dispatch
    navigate(APPLICATION_FORM);
  };
  console.log(JSON.stringify(loanApplicationForm));

  return (
    <div className="w-[90%] m-auto">
      {/* if form data is null, then show a button to add form (loan application) */}
      {loanApplicationForm ? (
        // Show the form
        <div className="mt-10">
          <ViewLoanApplicationForm loanApplicationForm={loanApplicationForm} />
        </div>
      ) : (
        // Add Loan application button
        <div className="flex justify-center items-center -mt-30 h-[100vh] w-full">
          <div className="flex flex-col">
            <h2 className="text-gray-700 text-2xl mb-8">Hassle-free education loans and a boost in career, Add your Loan Application!</h2>
            <SuccessButton
              label="Add Loan Application"
              customClassName="hover:bg-green-400 w-1/2 m-auto"
              actionHandler={openLoanApplicationForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
