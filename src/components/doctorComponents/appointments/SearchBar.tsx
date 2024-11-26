
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center bg-gray-800 rounded-md p-2">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none text-white px-2"
      />
      <FaSearch className="text-gray-500" />
    </div>
  );
}