import React from "react";
import { Field, ErrorMessage } from "formik";
import { InputFieldProps } from "@/interfaces/common";

const InputField: React.FC<InputFieldProps> = ({
  label = "Label",
  name,
  type = "text",
  placeholder = "Enter text",
  icon: Icon = null,
  iconClassName = "h-4 w-4 text-gray-400 mr-3",
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
        {Icon && <Icon className={iconClassName} />}
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`w-full bg-transparent text-white placeholder-gray-400 focus:outline-none ${inputClassName}`}
          {...props}
        />
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500 text-xs mt-1" />
    </div>
  );
};

export default InputField;
