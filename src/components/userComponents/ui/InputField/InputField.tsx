interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
}

const InputField = ({ label, placeholder, type = "text", icon }: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <div className="flex items-center bg-gray-800 p-2 rounded">
        {icon && <span className="text-gray-400 mr-2">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent text-white flex-1 outline-none placeholder-gray-500"
        />
      </div>
    </div>
  );
};

export default InputField;