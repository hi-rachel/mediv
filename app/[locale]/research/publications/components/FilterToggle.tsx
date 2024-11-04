import { Filter, ChevronDown } from "lucide-react";

interface FilterToggleProps {
  showFilter: boolean;
  onToggle: () => void;
}

const FilterToggle = ({ showFilter, onToggle }: FilterToggleProps) => (
  <button
    onClick={onToggle}
    className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg w-full lg:mb-4"
  >
    <Filter size={20} />
    <span>Filters</span>
    <ChevronDown
      size={20}
      className={`ml-auto transform transition-transform ${
        showFilter ? "rotate-180" : ""
      }`}
    />
  </button>
);

export default FilterToggle;
