import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectInput from "../../../common/inputFields/SelectInput";
import { COLLEGE_WITH_COURSES } from "../../../../utils/constants/applicationForm";
import { addStepData, validateStep } from "../../../../redux/slices/dashboardSlice";

const Step3 = () => {
  const [collegeName, setCollegeName] = useState("");
  const [courseName, setCourseName] = useState("");    

  const dispatch = useDispatch();
  const formDataFromStore = useSelector((state) => state.dashboard.formData);

  // Hydrate form data from Redux
  useEffect(() => {
    if (formDataFromStore && formDataFromStore["step3"]) {
      const { collegeName, courseName } = formDataFromStore["step3"];
      setCollegeName(collegeName);
      setCourseName(courseName);
    }
  }, [formDataFromStore]);

  // Validate form and dispatch data to Redux
  useEffect(() => {
    const isValid = collegeName && courseName;

    dispatch(validateStep({ step: "step3", isValid }));

    if (isValid) {
      dispatch(
        addStepData({
          currentStep: "step3",
          currentStepData: { collegeName, courseName },
        })
      );
    }
  }, [collegeName, courseName, dispatch]);

  // Handle college change
  const handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;
    setCollegeName(selectedCollege);
    setCourseName("");  // Reset course name when college changes
  };

  // Handle course change
  const handleCourseChange = (e) => {
    setCourseName(e.target.value);
  };

  return (
    <form>
      <div className="p-2 flex flex-col gap-8 mt-20 items-center">
        <SelectInput
          label="College Name"
          placeholder="Select a College"
          value={collegeName}
          changeHandler={handleCollegeChange}
          options={Object.keys(COLLEGE_WITH_COURSES)}
          required={true}
        />

        <SelectInput
          label="Course Name"
          placeholder="Select a Course"
          value={courseName}
          changeHandler={handleCourseChange}
          options={collegeName ? COLLEGE_WITH_COURSES[collegeName] : []}
          required={true}
          disabled={!collegeName}
        />
      </div>
    </form>
  );
};

export default Step3;
