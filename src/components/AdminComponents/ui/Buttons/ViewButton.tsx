// components/Button.tsx
"use client";
import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, className = "", onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-emerald-500 font-semibold ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
