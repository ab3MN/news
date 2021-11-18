import React, { FC } from "react";
import { INews } from "../types/NewsType";
import { Link } from "react-router-dom";

import "./NewsItem.scss";

interface INewsProp {
  data: INews;
}

const NewsItem: FC<INewsProp> = ({ data }) => {
  return (
    <section className='singleNews__container'>
      <h2 className='singleNews__container--title'>{data?.title}</h2>
      <p className='singleNews__container--content'>
        {data?.content.slice(0, -13)}
        <span>
          <Link
            to={data.url}
            target='_blank'
            className='singleNews__container--link'>
            read more
          </Link>
        </span>
      </p>
    </section>
  );
};

export default NewsItem;
