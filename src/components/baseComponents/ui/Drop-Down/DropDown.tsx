import { FC } from "react";
import Select from "react-select";

interface DropdownProps {
  value: string; // The selected value passed as a string
  options: string[]; // Array of string options
  // placeholder?: string;
  onChange: (selectedOption: { value: string; label: string }) => void;
}

const Dropdown: FC<DropdownProps> = ({ value, options, onChange }) => {
  // Format the options to match the structure that `react-select` expects
  const formattedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  // Find the currently selected option based on the `value`
  const selectedOption =
    formattedOptions.find((option) => option.value === value) || null; // Default to null if no matching option is found

  return (
    <div className="w-full sm:w-auto">
      <Select
        value={selectedOption} // Pass the selected option as an object
        onChange={(option) =>
          onChange(option as { value: string; label: string })
        } // Make sure the correct format is passed onChange
        options={formattedOptions}
        className="react-select-container"
        classNamePrefix="react-select"
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "#171717", // Dark background color
            borderColor: state.isFocused ? "#4FD1C5" : "#4A5568", // Highlight color on focus
            color: "#E2E8F0", // Text color for the input
            borderRadius: "12px", // Rounded corners
            boxShadow: state.isFocused
              ? "0 0 0 3px rgba(79, 209, 197, 0.5)"
              : "none", // Focus shadow
            padding: "8px 12px", // Padding for the input box
            fontSize: "14px", // Slightly larger text for readability
            fontWeight: "500", // Bold text
            transition: "all 0.3s ease", // Smooth transition for interactions
          }),
          placeholder: (base) => ({
            ...base,
            color: "#CBD5E0", // Light gray for placeholder
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#2D3748", // Dark menu background
            borderRadius: "12px",
            padding: "4px 0",
          }),
          option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
            ...styles,
            backgroundColor: isSelected
              ? "#38B2AC" // Highlight color for selected option
              : isFocused
              ? "#4FD1C5" // Highlight color for focused option
              : undefined,
            color: isDisabled ? "#A0AEC0" : "#E2E8F0", // Text color for the options
            padding: "10px 12px", // Padding for each option
            cursor: isDisabled ? "not-allowed" : "pointer", // Pointer cursor for clickable options
            fontSize: "14px", // Slightly larger text for readability
            fontWeight: "400", // Regular weight for options
            transition: "background-color 0.2s ease",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#E2E8F0", // Color of the selected value text
            fontWeight: "500", // Bold text for the selected value
          }),
        }}
      />
    </div>
  );
};

export default Dropdown;
