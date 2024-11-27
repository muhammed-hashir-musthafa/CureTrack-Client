import React from "react";
import { Field, ErrorMessage } from "formik";
import { SingleDatePickerProps } from "@/interfaces/common";  
 import { MdDateRange } from "react-icons/md";

const SingleDatePicker: React.FC<SingleDatePickerProps> = ({
  name,
  label = "Select Date",
  placeholder = "Select a date",
  containerClassName = "",
  inputClassName = "",
  ...props
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <label htmlFor={name} className="text-gray-500 text-sm">
        {label}
      </label>

      <div className="flex items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
        <Field
          id={name}
          name={name}
          type="date"
          placeholder={placeholder}
          className={`w-full bg-transparent text-white placeholder-gray-400 focus:outline-none ${inputClassName} `}
          {...props}
        />
        
         <MdDateRange  className="text-white absolute right-2 pointer-events-none" />
      </div>

      <ErrorMessage name={name}>
        {(msg) => <div className="text-red-500 text-xs mt-1">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default SingleDatePicker;
