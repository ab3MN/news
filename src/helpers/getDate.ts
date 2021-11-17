export const getDate = (day: number = 0): string => {
  const fixedDate = (x: any) => (+x < 10 ? `0${x}` : x);

  const x = new Date();
  const y = new Date(x.getFullYear(), x.getMonth(), x.getDate() - day);
  let date = fixedDate(`${y.getDate()}`);
  let month = fixedDate(`${1 + y.getMonth()}`);
  const year = y.getFullYear();

  return ` ${year}-${+month}-${+date}`;
};
