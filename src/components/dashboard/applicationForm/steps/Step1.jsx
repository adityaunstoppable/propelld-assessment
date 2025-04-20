import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../common/inputFields/TextInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addStepData, validateStep } from "../../../../redux/slices/dashboardSlice";

const Step1 = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState(null);
  const [permanentAddress, setPermanentAddress] = useState("");
  const [correspondenceAddress, setCorrespondenceAddress] = useState("");

  const dispatch = useDispatch();
  const formDataFromStore = useSelector(state => state.dashboard.formData);

  // Hydrate form with data from Redux
  useEffect(() => {
    if (formDataFromStore && formDataFromStore["step1"]) {
      const { name, dob, permanentAddress, correspondenceAddress } = formDataFromStore["step1"];
      setName(name);
      setDob(dob);
      setPermanentAddress(permanentAddress);
      setCorrespondenceAddress(correspondenceAddress);
    }
  }, [formDataFromStore]);

  // Validate and update the Redux store on field change
  useEffect(() => {
    const isValid = name && dob && permanentAddress && correspondenceAddress;

    // Dispatch the validation and data to the store
    dispatch(validateStep({ step: "step1", isValid }));

    if (isValid) {
      // If valid, add data to Redux store
      dispatch(addStepData({
        currentStep: "step1",
        currentStepData: { name, dob, permanentAddress, correspondenceAddress }
      }));
    }
  }, [name, dob, permanentAddress, correspondenceAddress, dispatch]);

  // Calculate the maximum allowed date (today - 15 years)
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 15,
    today.getMonth(),
    today.getDate()
  );

  return (
    <form>
      <div className="p-2 flex flex-col gap-8 mt-20 items-center">
        <TextInput
          label="Name"
          value={name}
          changeHandler={(e) => setName(e.target.value)}
          required={true}
          placeholder="Enter your name"
        />

        <div className="flex flex-col w-full md:w-1/2 ">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select your DOB"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            maxDate={eighteenYearsAgo}
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            required
          />
        </div>

        <TextInput
          label="Permanent Address"
          value={permanentAddress}
          changeHandler={(e) => setPermanentAddress(e.target.value)}
          required={true}
          placeholder="Enter your Permanent Address"
        />
        
        <TextInput
          label="Correspondence Address"
          value={correspondenceAddress}
          changeHandler={(e) => setCorrespondenceAddress(e.target.value)}
          required={true}
          placeholder="Enter your Correspondence Address"
        />
      </div>
    </form>
  );
};

export default Step1;
