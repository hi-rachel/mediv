import { Calendar, ChevronDown, X } from "lucide-react";

interface YearFilterProps {
  years: number[];
  selectedYears: number[];
  onToggle: (year: number) => void;
  showFilter: boolean;
  onShowFilterToggle: () => void;
  yearText: string;
}

const YearFilter = ({
  years,
  selectedYears,
  onToggle,
  showFilter,
  onShowFilterToggle,
  yearText,
}: YearFilterProps) => (
  <div>
    <button
      onClick={onShowFilterToggle}
      className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
    >
      <div className="flex items-center gap-2">
        <Calendar size={14} />
        <span>{yearText}</span>
      </div>
      <ChevronDown
        size={16}
        className={`transform transition-transform duration-200 ${
          showFilter ? "rotate-180" : ""
        }`}
      />
    </button>
    {showFilter && (
      <div className="mt-2 flex flex-wrap lg:flex-col gap-2 animate-fadeIn">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onToggle(year)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 flex justify-between items-center ${
              selectedYears.includes(year)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span>{year}</span>
            {selectedYears.includes(year) && <X size={14} className="ml-2" />}
          </button>
        ))}
      </div>
    )}
  </div>
);

export default YearFilter;
