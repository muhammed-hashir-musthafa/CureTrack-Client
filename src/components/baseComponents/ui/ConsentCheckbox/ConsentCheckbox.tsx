import React from "react";
import { Field, ErrorMessage } from "formik";
import { ConsentCheckboxProps } from "@/interfaces/common";

const ConsentCheckbox: React.FC<ConsentCheckboxProps> = ({ name, label }) => {
  return (
    <div className="flex items-center flex-wrap">
      <Field
        type="checkbox"
        name={name}
        className="mr-2 h-4 w-4 rounded-lg focus:ring-blue-500"
      />
      <label className="text-gray-300">{label}</label>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1 w-full md:w-auto"
      />
    </div>
  );
};

export default ConsentCheckbox;
