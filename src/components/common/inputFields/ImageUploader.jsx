import React from "react";
//  basic image uploader field, have similar design as of othere input fields, just saving the file name.
const ImageUploader = ({
  label = "",
  changeHandler,
  value = "",
  customClassName = "",
  required = false,
}) => {
  return (
    <div className={`flex flex-col w-full md:w-1/2 ${customClassName}`}>
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={changeHandler}
        required={required}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 p-3 rounded-xl transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
      />
    </div>
  );
};

export default ImageUploader;
