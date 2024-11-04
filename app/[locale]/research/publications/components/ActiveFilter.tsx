interface ActiveFiltersProps {
  t: (key: string) => string;
  searchQuery: string;
  selectedTags: string[];
  selectedYears: number[];
  onClear: () => void;
}

const ActiveFilters = ({
  t,
  searchQuery,
  selectedTags,
  selectedYears,
  onClear,
}: ActiveFiltersProps) => {
  if (!(selectedTags.length || selectedYears.length || searchQuery))
    return null;

  return (
    <div className="lg:block hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Active Filters</h2>
        <button
          onClick={onClear}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {t("layout.clearAll")}
        </button>
      </div>
      <div className="space-y-2 text-sm">
        {searchQuery && (
          <div className="text-blue-600">
            <span className="truncate">Search: {searchQuery}</span>
          </div>
        )}
        {selectedTags.length > 0 && (
          <div className="text-blue-600">
            <span>Keywords: {selectedTags.join(", ")}</span>
          </div>
        )}
        {selectedYears.length > 0 && (
          <div className="text-blue-600">
            <span>
              {selectedYears.length > 1
                ? `Years: ${selectedYears.join(", ")}`
                : `Year: ${selectedYears[0]}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveFilters;
