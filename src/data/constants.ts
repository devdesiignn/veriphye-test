export const SORT_OPTIONS = [
  { label: "Stars", value: "stars" },
  { label: "Last Updated", value: "updatedAt" },
];

export const FILTER_OPTIONS = [
  "JavaScript",
  "Python",
  "TypeScript",
  "Go",
  "Ruby",
  "HTML",
  "CSS",
].map((item) => ({
  label: item,
  value: item,
}));
