interface DatePickerProps {
  label: string;
}

const DatePicker = ({ label }: DatePickerProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <input
        type="date"
        className="w-full bg-gray-800 p-2 rounded text-white outline-none"
      />
    </div>
  );
};

export default DatePicker;