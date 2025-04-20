import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: null,
    isEditing: false,
    stayOnStep: true,
    stepValidation: {
        step1: false,
        step2: false,
        step3: false,
    },
    loanApplicationForm:null,
};

const dashboardSlice = createSlice({
    name: "dashboardSlice",
    initialState,
    reducers: {
        addFormData: (state, action) => {
            state.loanApplicationForm = action.payload;
            state.isEditing = false;
        },
        addStepData:(state, action) => {
            if(!state.formData){
                state.formData = {}
            }
            state.formData[action.payload.currentStep] = action.payload.currentStepData
        },
        updateFormData: (state) => {
            state.isEditing = true;
        },
        deleteFormData: (state) => {
            state.formData = null;
            state.loanApplicationForm = null;
            state.isEditing = false;
        },
        cancelEditingFormUpdate: (state) => {
            state.isEditing = false;
        },
        cancelFormUpdate: (state) => {
            state.formData = null;
            state.loanApplicationForm = null;
        },
        stepUpdate: (state, action) => {
            state.stayOnStep = action.payload.stayOnStep;
        },
        validateStep: (state, action) => {
            const { step, isValid } = action.payload;
            state.stepValidation[step] = isValid;
        }
    }
});

export const { addStepData, addFormData, updateFormData, deleteFormData, cancelFormUpdate, stepUpdate, validateStep } = dashboardSlice.actions;
export default dashboardSlice.reducer;
