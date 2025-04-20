import React, { useEffect, useState } from "react";
import MultiInputField from "../../common/inputFields/MultiInputFields";
import { validateOTP } from "../../../utils/helpers/authValidator";
import SuccessButton from "../../common/buttons/SuccessButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../../utils/constants/routes";
import { authenticateAndLoginUser } from "../../../redux/slices/authSlice";
import { BG_STYLE_LOGIN } from "../../../utils/constants/styles";
import { showErrorToast, showSuccessToast } from "../../../redux/slices/toastSlice";

const OTP = () => {
  const [otp, setOtp] = useState("000000");
  const { userName = "", phoneNumber = "" } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isOtpValidated = validateOTP(otp);
    if (isOtpValidated) {
      dispatch(authenticateAndLoginUser(
        {
          userName,
          phoneNumber, 
        }
      ))
      navigate(DASHBOARD)
      dispatch(showSuccessToast("OTP Verified!"))
      dispatch(showSuccessToast("Logged in successfully!"))
    } else {
      dispatch(showErrorToast("OTP Unverified."))
    }
  };

  return (
    <div style={BG_STYLE_LOGIN}  className="h-[100vh] flex items-center justify-center ">
      <form
        className="bg-white p-8 rounded-xl shadow-lg md:w-1/3 w-2/3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>

        {/* OTP input field */}
        <div className="mb-8">
          <label className="block mb-2 text-gray-700 text-center">
            We have sent a 6-digit code to your phone:{" "}
            <span className="text-blue-500">{phoneNumber}</span>
          </label>

          <label className="block mb-2 text-gray-700 text-center">
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => navigate(LOGIN)}
            >
              Click Here
            </span>{" "}
            to edit your phone number.
          </label>

          <MultiInputField
            totalFields={6}
            onChange={handleOtpChange}
            inputType="number"
            defaultValue="000000"
          />
        </div>

        {/* Submit button */}
        <SuccessButton
          label="Verify OTP"
          type="submit"
          actionHandler={handleSubmit}
          customClassName="w-full bg-green-800 hover:bg-green-900 text-white"
        />
      </form>
    </div>
  );
};

export default OTP;
