interface IHightlightProps {
  filter: string;
  str: string;
}

const Hightlight = ({ filter = "", str = "" }: IHightlightProps): any => {
  if (!filter) return str;
  const regexp = new RegExp(filter, "ig");
  const matchValue = str?.match(regexp);

  if (matchValue) {
    return str?.split(regexp).map((s, index, array) => {
      if (index < array?.length - 1) {
        const c = matchValue?.shift();
        return (
          <span>
            {s}
            <span className='hightlight'>{c}</span>
          </span>
        );
      }
      return s;
    });
  }
  return str;
};

export default Hightlight;
