import React from 'react';
import SuccessButton from '../../common/buttons/SuccessButton';
import { useDispatch } from 'react-redux';
import { deleteFormData, updateFormData } from '../../../redux/slices/dashboardSlice';
import { useNavigate } from 'react-router-dom';
import { APPLICATION_FORM } from '../../../utils/constants/routes';
import CancelButton from '../../common/buttons/CancelButton';
import { showSuccessToast } from '../../../redux/slices/toastSlice';

//  Added a Form section component (could have been added as a separatee component in a separate file) but 
//  added here just to show that we can also make multiple components in one file.

const FormSection = ({ title, data }) => {
  return (
    <div className="mb-6">
      <div className="bg-green-50 p-2 py-3 rounded-xl border border-green-200 mb-2">
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
      </div>
      <div className="flex flex-wrap">
        {data.map(({ label, value }) => (
          <div key={label} className="flex flex-col md:w-1/2 my-2">
            <label className="text-lg font-medium text-gray-600">{label}:</label>
            <span className="text-gray-800">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ViewLoanApplicationForm = ({ loanApplicationForm }) => {
  // getting all the data of steps from props.
  const { step1, step2, step3 } = loanApplicationForm;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(updateFormData());
    navigate(APPLICATION_FORM)
  }

  const handleDelete = () => {
    dispatch(deleteFormData())
    dispatch(showSuccessToast("Application deleted Successfully!"))
  }

  const personalInfo = [
    { label: 'Name', value: step1?.name },
    { label: 'Date of Birth', value: new Date(step1?.dob).toLocaleDateString() },
    { label: 'Permanent Address', value: step1?.permanentAddress },
    { label: 'Correspondence Address', value: step1?.correspondenceAddress },
  ];

  const financialInfo = [
    { label: 'PAN Number', value: step2?.panNumber },
    { label: 'Bank Statement PDF', value: step2?.bankStatementPdf },
    { label: 'Aadhar Image', value: step2?.aadharImg },
  ];

  const instituteInfo = [
    { label: 'College Name', value: step3?.collegeName },
    { label: 'Course Name', value: step3?.courseName },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">Loan Application</h2>

      {/* using section component so that code can be resusable */}
      <FormSection title="Step 1: Personal Information" data={personalInfo} />
      <FormSection title="Step 2: Financial Information" data={financialInfo} />
      <FormSection title="Step 3: Institute Information" data={instituteInfo} />

      <h2 className="text-lg bg-green-100 p-2 px-5 rounded-2xl text-left text-gray-700 mb-5">Status: Under Review</h2>

      {/* Actions Buttons */}
      <div className="flex mt-8 justify-around">
        <CancelButton label='Delete Application' customClassName='hover:bg-red-500' actionHandler={handleDelete} />
        <SuccessButton label='Edit Application' customClassName='hover:bg-green-300' actionHandler={handleEdit} />
      </div>
    </div>
  );
};

export default ViewLoanApplicationForm;
