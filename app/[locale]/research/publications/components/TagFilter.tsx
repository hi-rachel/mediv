import { X } from "lucide-react";

interface TagFilterProps {
  t: (key: string) => string;
  tags: string[];
  selectedTags: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
}

const TagFilter = ({
  t,
  tags,
  selectedTags,
  onToggle,
  onClear,
}: TagFilterProps) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold text-gray-800">Keywords</h2>
      {selectedTags.length > 0 && (
        <button
          onClick={onClear}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {t("layout.clearAll")}
        </button>
      )}
    </div>
    <div className="flex flex-wrap lg:flex-col gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onToggle(tag)}
          className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 flex justify-between items-center ${
            selectedTags.includes(tag)
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <span>{tag}</span>
          {selectedTags.includes(tag) && <X size={14} className="ml-2" />}
        </button>
      ))}
    </div>
  </div>
);

export default TagFilter;
