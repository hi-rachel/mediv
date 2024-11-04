"use client";

import React, { useState, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getMonthName } from "@/app/utils/helpers";
import { Publication } from "@/types/publication";
import { Filter, ChevronDown, Search, Calendar, X } from "lucide-react";
// import Link from "next/link";

const Publications = () => {
  const t = useTranslations("Publications");
  const publications = t.raw("list") as Publication[];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showYearFilter, setShowYearFilter] = useState(false);

  // Extract unique tags and years
  const uniqueTags = Array.from(
    new Set(publications.flatMap((pub) => pub.keywords))
  ).sort();

  const uniqueYears = Array.from(
    new Set(publications.map((pub) => pub.year))
  ).sort((a, b) => b - a);

  // Toggle selection functions
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

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedTags([]);
    setSelectedYears([]);
    setSearchQuery("");
  };

  // Combined filtering logic
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

  const formatAuthors = (authors: string[]) => {
    if (authors.length === 0) return "";
    if (authors.length === 1) return authors[0];
    return `${authors[0]} et al.`;
  };

  // Year filter toggle button
  const YearFilterToggle = () => {
    const locale = useLocale();

    const getYearText = () => {
      if (selectedYears.length === 0) {
        return t("layout.filterByYears");
      }

      if (locale === "ko") {
        return `${selectedYears.length}개 ${t("layout.year")} ${t(
          "layout.selected"
        )}`;
      } else {
        return `${selectedYears.length} ${t("layout.year")}${
          selectedYears.length > 1 ? "s" : ""
        } ${t("layout.selected")}`;
      }
    };

    return (
      <button
        onClick={() => setShowYearFilter(!showYearFilter)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <span>{getYearText()}</span>
        </div>
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-200 ${
            showYearFilter ? "rotate-180" : ""
          }`}
        />
      </button>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 max-w-7xl mx-auto p-4">
      {/* Mobile Search and Filter Toggle */}
      <div className="lg:hidden">
        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder={t("layout.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg w-full lg:mb-4"
        >
          <Filter size={20} />
          <span>Filters</span>
          <ChevronDown
            size={20}
            className={`ml-auto transform transition-transform ${
              showMobileFilter ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Sidebar with Search and Filters */}
      <aside
        className={`${showMobileFilter ? "block" : "hidden"} lg:block lg:w-48`}
      >
        <div className="lg:sticky lg:top-24 space-y-6 mb-3">
          {/* Search Bar for Desktop */}
          <div className="hidden lg:block">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Search</h2>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder={t("layout.smallSearchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Keywords Filter */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Keywords</h2>
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {t("layout.clearAll")}
                </button>
              )}
            </div>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 flex justify-between items-center ${
                    selectedTags.includes(tag)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span>{tag}</span>
                  {selectedTags.includes(tag) && (
                    <X size={14} className="ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter with Toggle */}
          <div>
            <YearFilterToggle />
            {showYearFilter && (
              <div className="mt-2 flex flex-wrap lg:flex-col gap-2 animate-fadeIn">
                {uniqueYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => toggleYear(year)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 flex justify-between items-center ${
                      selectedYears.includes(year)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <span>{year}</span>
                    {selectedYears.includes(year) && (
                      <X size={14} className="ml-2" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Active Filters Display */}
          {(selectedTags.length > 0 ||
            selectedYears.length > 0 ||
            searchQuery) && (
            <div className="lg:block hidden">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">
                  {t("layout.activeFilters")}
                </h2>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {t("layout.clearAll")}
                </button>
              </div>
              <div className="space-y-2 text-sm">
                {selectedYears.length > 0 && (
                  <div className="text-blue-600">
                    <span>
                      {selectedYears.length > 1
                        ? `Years: ${selectedYears.join(", ")}`
                        : `Year: ${selectedYears[0]}`}
                    </span>
                  </div>
                )}
                {selectedTags.length > 0 && (
                  <div className="text-blue-600">
                    <span>Keywords: {selectedTags.join(", ")}</span>
                  </div>
                )}
                {searchQuery && (
                  <div className="text-blue-600">
                    <span className="truncate">Search: {searchQuery}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="grid gap-6">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {t("layout.noPublications")}
            </div>
          ) : (
            filteredPublications.map((publication, index) => (
              // <Link
              //   key={publication.title}
              //   href={`/research/publications/${encodeURIComponent(
              //     publication.title
              //   )}?tab=publications`}
              // >
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() =>
                  console.log(
                    "Navigate to publication details",
                    publication.title
                  )
                }
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 rounded-sm bg-slate-50 p-1 mb-4 w-fit">
                      {getMonthName(publication.month)}. {publication.year}
                    </div>

                    {publication.publication && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                          IF{" "}
                          {
                            publication.publication.match(
                              /\(IF ([\d.]+)\)/
                            )?.[1]
                          }
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-semibold mb-4 line-clamp-2">
                      {publication.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {formatAuthors(publication.author)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  {publication.keywords.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              // </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Publications;
