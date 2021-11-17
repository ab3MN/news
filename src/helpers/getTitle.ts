export const getTitle = (title: string): string => {
  const x = title.slice(1).slice(0, 100).replace(/%/g, " ").split(" ");
  const y = [x[0]];
  for (let i = 1; i < x.length; ++i) {
    y.push(x[i].slice(2));
  }
  return y.join(" ");
};
