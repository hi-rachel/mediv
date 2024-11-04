import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useUrlParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get("keywords")?.split(",").filter(Boolean) || []
  );
  const [selectedYears, setSelectedYears] = useState<number[]>(
    searchParams.get("years")?.split(",").filter(Boolean).map(Number) || []
  );
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedTags.length > 0) {
      params.set("keywords", selectedTags.join(","));
    }

    if (selectedYears.length > 0) {
      params.set("years", selectedYears.join(","));
    }

    if (searchQuery) {
      params.set("q", searchQuery);
    }

    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;
    router.push(newUrl, { scroll: false });
  }, [selectedTags, selectedYears, searchQuery, router]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleYear = (year: number) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
    setSelectedYears([]);
    setSearchQuery("");
  };

  return {
    selectedTags,
    selectedYears,
    searchQuery,
    setSelectedTags,
    setSearchQuery,
    toggleTag,
    toggleYear,
    clearAllFilters,
  };
};

export default useUrlParams;
