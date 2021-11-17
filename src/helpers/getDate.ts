const getDate = (week: number = 0): string => {
  const fixedDate = (x: string) => {
    const y: string = "0" + x;
    return +x < 10 ? y : x;
  };
  const d = new Date();
  let date = fixedDate(`${d.getDate()}`);
  let month = fixedDate(`${1 + d.getMonth()}`);
  const year = d.getFullYear();

  return ` ${year}-${+month}-${+date}`;
};

export default getDate;
