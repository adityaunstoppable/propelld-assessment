import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../common/inputFields/TextInput";
import PdfUploader from "../../../common/inputFields/PdfUploader";
import ImageUploader from "../../../common/inputFields/ImageUploader";
import {
  addStepData,
  validateStep,
} from "../../../../redux/slices/dashboardSlice";

const Step2 = () => {
  const [panNumber, setPanNumber] = useState("");
  const [bankStatementPdf, setBankStatementPdf] = useState(null);
  const [aadharImg, setAadharImg] = useState(null);

  const dispatch = useDispatch();
  const formDataFromStore = useSelector((state) => state.dashboard.formData);

  // Hydrate form with data from Redux
  useEffect(() => {
    if (formDataFromStore && formDataFromStore["step2"]) {
      const { panNumber, bankStatementPdf, aadharImg } = formDataFromStore["step2"];
      setPanNumber(panNumber);
      setBankStatementPdf(bankStatementPdf);
      setAadharImg(aadharImg);
    }
  }, [formDataFromStore]);

  // Validate and update the Redux store on field change
  useEffect(() => {
    const isValid = panNumber && bankStatementPdf && aadharImg;

    // Dispatch the validation and data to the store
    dispatch(validateStep({ step: "step2", isValid }));

    if (isValid) {
      // If valid, add data to Redux store
      dispatch(
        addStepData({
          currentStep: "step2",
          currentStepData: { panNumber, bankStatementPdf, aadharImg },
        })
      );
    }
  }, [panNumber, bankStatementPdf, aadharImg, dispatch]);

  return (
    <form>
      <div className="p-2 flex flex-col gap-8 mt-20 items-center">
        <TextInput
          label="PAN Number"
          value={panNumber}
          changeHandler={(e) => setPanNumber(e.target.value)}
          required={true}
          placeholder="Enter your PAN Number"
        />

        <PdfUploader
          label="Upload Income Statements (PDF)"
          changeHandler={(e) => setBankStatementPdf(e.target.files[0]?.name)}
          required={true}
        />

        <ImageUploader
          label="Upload Aadhar Card (Image)"
          changeHandler={(e) => setAadharImg(e.target.files[0]?.name)}
          required={true}
        />
      </div>
    </form>
  );
};

export default Step2;
