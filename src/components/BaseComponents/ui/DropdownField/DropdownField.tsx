import React from "react";
import { Field, ErrorMessage } from "formik";

interface DropdownFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  name,
  label,
  options,
  placeholder = "Select",
  className = "",
}) => {
  return (
    <div className={className}>
      <label className="block mb-1 text-gray-500 text-sm">{label}</label>
      <Field
        name={name}
        as="select"
        className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </div>
  );
};

export default DropdownField;
