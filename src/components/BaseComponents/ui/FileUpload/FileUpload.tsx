import React from "react";
import { Field, ErrorMessage } from "formik";
import { FiUploadCloud } from "react-icons/fi";

interface FileInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  label = "Upload File",
  name,
  placeholder = "Choose a file",
  icon: Icon = FiUploadCloud,
  iconClassName = "h-4 w-4 text-gray-400 mr-3",
  containerClassName = "",
  inputClassName = "",
  setFieldValue,
  ...props
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFieldValue(name, file);
  };

  return (
    <div className={`flex flex-col items-start w-full ${containerClassName}`}>
      <label
        htmlFor={name}
        className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-300 dark:border-gray-600 dark:hover:border-gray-500"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Icon className="text-green-600 w-8 h-8 mb-4 dark:text-green-500" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-green-500">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG or JPG (MAX. 800x400px)
          </p>
        </div>
        <input
          id={name}
          name={name}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          {...props}
        />
      </label>

       <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-2"
      />
    </div>
  );
};

export default FileInput;
