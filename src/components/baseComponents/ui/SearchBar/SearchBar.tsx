import { FC, ChangeEvent } from "react";
import { HiSearch } from "react-icons/hi";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => (
  <div className="flex items-center bg-neutral-900 rounded-full shadow-lg px-4 py-2  w-full max-w-lg mx-auto">
    <HiSearch className="text-gray-400 mr-3" size={22} />
    <input
      type="text"
      placeholder="Search by name or email..."
      value={searchTerm}
      onChange={onSearchChange}
      className="bg-transparent text-gray-200 w-full outline-none placeholder-gray-500 text-base tracking-wide"
    />
  </div>
);

export default SearchBar;
