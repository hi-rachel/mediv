"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getMonthName } from "@/app/utils/date";
import { Publication } from "@/types/publication";
import SearchBar from "./SearchBar";
import FilterToggle from "./FilterToggle";
import TagFilter from "./TagFilter";
import YearFilter from "./YearFilter";
import ActiveFilters from "./ActiveFilter";
import usePublicationFilters from "@/app/hooks/usePublicationFilters";
import useUrlParams from "@/app/hooks/useUrlParams";
// import { formatAuthors } from "@/app/utils/publication";
import { getYearFilterText } from "@/app/utils/translation";
import { PublicationCard } from "./PublicationCard";

const Publications = () => {
  const locale = useLocale();
  const t = useTranslations("Publications");
  const publications = t.raw("list") as Publication[];

  // Mobile filter state
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showYearFilter, setShowYearFilter] = useState(false);

  // URL params and filtering logic
  const {
    selectedTags,
    selectedYears,
    searchQuery,
    setSelectedTags,
    setSearchQuery,
    toggleTag,
    toggleYear,
    clearAllFilters,
  } = useUrlParams();

  // Publication filtering
  const { uniqueTags, uniqueYears, filteredPublications } =
    usePublicationFilters({
      publications,
      selectedTags,
      selectedYears,
      searchQuery,
    });

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 gap-4">
      {/* Mobile Search and Filter */}
      <div className="lg:hidden">
        <div className="mb-4">
          <SearchBar
            placeholder={t("layout.searchPlaceholder")}
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>
        <FilterToggle
          showFilter={showMobileFilter}
          onToggle={() => setShowMobileFilter(!showMobileFilter)}
        />
      </div>

      {/* Sidebar */}
      <aside
        className={`${showMobileFilter ? "block" : "hidden"} lg:block lg:w-48`}
      >
        <div className="lg:sticky lg:top-24 space-y-6 mb-3">
          {/* Desktop Search */}
          <div className="hidden lg:block">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Search</h2>
            <SearchBar
              placeholder={t("layout.smallSearchPlaceholder")}
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>

          {/* Filters */}
          <TagFilter
            t={t}
            tags={uniqueTags}
            selectedTags={selectedTags}
            onToggle={toggleTag}
            onClear={() => setSelectedTags([])}
          />

          <YearFilter
            years={uniqueYears}
            selectedYears={selectedYears}
            onToggle={toggleYear}
            showFilter={showYearFilter}
            onShowFilterToggle={() => setShowYearFilter(!showYearFilter)}
            yearText={getYearFilterText(selectedYears.length, locale, t)}
          />

          <ActiveFilters
            t={t}
            searchQuery={searchQuery}
            selectedTags={selectedTags}
            selectedYears={selectedYears}
            onClear={clearAllFilters}
          />
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
              <PublicationCard
                key={publication.title + index}
                publication={publication}
                // formatAuthors={formatAuthors}
                getMonthName={getMonthName}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Publications;
