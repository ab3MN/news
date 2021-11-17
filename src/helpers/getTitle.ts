export const getTitle = (title: string): string =>
  title.slice(1, 3) +
  title
    .slice(1)
    .slice(0, 100)
    .replace(/%/g, " ")
    .split(" ")
    .map((el) => el.slice(2))
    .join(" ");
