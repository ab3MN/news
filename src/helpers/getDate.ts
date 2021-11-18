export const getDate = (day: number = 0): string =>
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() - day
  )
    .toISOString()
    .slice(0, 10);
