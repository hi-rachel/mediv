export const formatAuthors = (authors: string[]) => {
  if (authors.length === 0) return "";
  if (authors.length === 1) return authors[0];
  return `${authors[0]} et al.`;
};
