import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const toastSlice = createSlice({
  name: "toast",
  initialState: {},
  reducers: {
    showSuccessToast: (state, action) => {
      toast.success(action.payload || "Success");
    },
    showErrorToast: (state, action) => {
      toast.error(action.payload || "Something went wrong");
    },
    showInfoToast: (state, action) => {
      toast.info(action.payload || "Information");
    },
    showWarningToast: (state, action) => {
      toast.warn(action.payload || "Warning");
    },
  },
});

export const { showSuccessToast, showErrorToast, showInfoToast, showWarningToast } = toastSlice.actions;

export default toastSlice.reducer;
