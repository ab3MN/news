import React, { FC } from "react";
import { INews } from "../types/NewsType";

interface INewsProp {
  data: INews;
}

const NewsItem: FC<INewsProp> = ({ data }) => {
  return (
    <section>
      <h2>{data?.title}</h2>

      <p>{data?.content}</p>
    </section>
  );
};

export default NewsItem;
