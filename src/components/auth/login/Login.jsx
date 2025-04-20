import React, { useEffect, useState } from "react";
import MultiInputField from "../../common/inputFields/MultiInputFields";
import SuccessButton from "../../common/buttons/SuccessButton";
import TextInput from "../../common/inputFields/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { addPhoneNumberAndName } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { OTP_PATH } from "../../../utils/constants/routes";
import { BG_STYLE_LOGIN } from "../../../utils/constants/styles";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../redux/slices/toastSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const userDetailsFromStore = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // this function is just geetting the values of phoneNumber and name if they are saved.
  const hydrateLoginDetails = () => {
    const { userName = "", phoneNumber = "" } = userDetailsFromStore;
    console.log("phoneNumber", phoneNumber);
    if (userName && phoneNumber) {
      setName(userName);
      setPhoneNumber(phoneNumber);
    }
  };

  useEffect(() => {
    hydrateLoginDetails();
  }, []);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber && name) {
      dispatch(addPhoneNumberAndName({ phoneNumber, userName: name }));
      navigate(OTP_PATH);
      dispatch(showSuccessToast(`OTP sent to ${phoneNumber}`));
    } else {
      //showing toastify error
      dispatch(showErrorToast("Wrong details Entered!"));
    }
  };

  return (
    <div
      style={BG_STYLE_LOGIN}
      className="min-h-screen flex items-center justify-center"
    >
      <form
        className="bg-gray-200 p-8  rounded-xl shadow-2xl m-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <TextInput
          required={true}
          label="Name"
          customClassName="md:w-full mb-5"
          value={name}
          changeHandler={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        {/* Phone number input using MultiInputField */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Phone Number</label>
          <MultiInputField
            defaultValue={phoneNumber}
            totalFields={10}
            onChange={handlePhoneNumberChange}
          />
        </div>

        <SuccessButton
          disabled={phoneNumber.length !== 10}
          label="Continue"
          type="submit"
          actionHandler={handleSubmit}
          customClassName={`${!phoneNumber.length !== 10 && 'w-full bg-green-800 hover:bg-green-900 text-white'}`}
        />
      </form>
    </div>
  );
};

export default Login;
