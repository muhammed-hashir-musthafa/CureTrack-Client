import React from "react";

interface AddNewButtonProps {
  label: string;
  onClick?: () => void;
  icon: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
}

const AddNewButton: React.FC<AddNewButtonProps> = ({
  label,
  onClick,
  icon,
  bgColor = "bg-gray-800",
  textColor = "text-gray-400",
  hoverBgColor = "hover:bg-gray-700",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} p-5 py-2 rounded-lg flex items-center gap-2 ${hoverBgColor}`}
    >
      {icon}
      {label}
    </button>
  );
};

export default AddNewButton;
