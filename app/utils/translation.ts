export const getYearFilterText = (
  selectedYearsCount: number,
  locale: string,
  t: (key: string) => string
) => {
  if (selectedYearsCount === 0) {
    return t("layout.filterByYears");
  }

  if (locale === "ko") {
    return `${selectedYearsCount}개 ${t("layout.year")} ${t(
      "layout.selected"
    )}`;
  }

  return `${selectedYearsCount} ${t("layout.year")}${
    selectedYearsCount > 1 ? "s" : ""
  } ${t("layout.selected")}`;
};
