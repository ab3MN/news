export const getTitle = (title: string): string =>
  title.slice(1).replace(/%20/g, " ");
