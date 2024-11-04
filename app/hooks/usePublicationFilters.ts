import { useMemo } from "react";
import { Publication } from "@/types/publication";

interface UsePublicationFiltersProps {
  publications: Publication[];
  selectedTags: string[];
  selectedYears: number[];
  searchQuery: string;
}

const usePublicationFilters = ({
  publications,
  selectedTags,
  selectedYears,
  searchQuery,
}: UsePublicationFiltersProps) => {
  // Extract unique tags and years
  const uniqueTags = useMemo(
    () =>
      Array.from(new Set(publications.flatMap((pub) => pub.keywords))).sort(),
    [publications]
  );

  const uniqueYears = useMemo(
    () =>
      Array.from(new Set(publications.map((pub) => pub.year))).sort(
        (a, b) => b - a
      ),
    [publications]
  );

  // Filter publications
  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesTags =
        selectedTags.length === 0 ||
        pub.keywords.some((tag) => selectedTags.includes(tag));
      const matchesYears =
        selectedYears.length === 0 || selectedYears.includes(pub.year);
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchLower) ||
        pub.author.some((author) => author.toLowerCase().includes(searchLower));

      return matchesTags && matchesYears && matchesSearch;
    });
  }, [publications, selectedTags, selectedYears, searchQuery]);

  return {
    uniqueTags,
    uniqueYears,
    filteredPublications,
  };
};

export default usePublicationFilters;
