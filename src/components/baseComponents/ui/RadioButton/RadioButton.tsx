import { RadioButtonProps } from "@/interfaces/common";
import React from "react";

 
const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label
      className={`flex items-center gap-x-2 cursor-pointer 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
       <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        disabled={disabled}
        className="hidden"
      />

       <span
        className={`relative w-5 h-5 flex items-center justify-center rounded-full border-2 
          transition-all duration-300 
          ${checked ? "border-blue-500 bg-gradient-to-br from-blue-400 to-blue-600" : "border-gray-400 bg-gray-100"} 
          ${disabled ? "border-gray-300 bg-gray-200" : ""}
          shadow ${checked ? "shadow-blue-500/50" : ""}
        `}
      >
        {checked && (
          <span
            className="w-2.5 h-2.5 bg-white rounded-full"
            style={{
              boxShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)",
            }}
          ></span>
        )}
      </span>

       <span
        className={`text-sm font-medium transition-all duration-300 ${
          checked ? "text-blue-600" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
