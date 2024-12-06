interface RadioGroupProps {
  label: string;
  options: { label: string; value: string }[];
  name: string;
}

const RadioGroup = ({ label, options, name }: RadioGroupProps) => {
  return (
    <div className="mb-4">
      <p className="text-sm mb-1">{label}</p>
      <div className="flex gap-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              className="text-green-500 focus:ring-0"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;