import React, { FC } from "react";
import { INews } from "../types/NewsType";

interface INewsProp {
  item: INews;
}

const NewsItem: FC<INewsProp> = ({ item }) => {
  const date = item.publishedAt.slice(0, 10);
  return (
    <section>
      <h2>{item?.title}</h2>
      <h4>
        Author: <span> {item.author ? item.author : "Author unknown"}</span>
      </h4>
      <h5>
        Published At: <span>{date}</span>
      </h5>
      <p>{item?.content}</p>
    </section>
  );
};

export default NewsItem;
