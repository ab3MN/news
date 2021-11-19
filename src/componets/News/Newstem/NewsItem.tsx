import React, { FC } from "react";
import { INews } from "../types/NewsType";

import "./NewsItem.scss";

interface INewsProp {
  data: INews;
}

const NewsItem: FC<INewsProp> = ({ data }) => {
  return (
    <section className='singleNews__container'>
      <h2 className='singleNews__container--title'>{data?.title}</h2>
      <p className='singleNews__container--content'>
        {data?.content.slice(0, -14)}
      </p>
    </section>
  );
};

export default NewsItem;
