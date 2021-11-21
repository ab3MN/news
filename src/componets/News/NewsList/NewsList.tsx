import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { INews } from "../types/NewsType";
import HightLight from "../../../helpers/HightLight";
import "./NewsList.scss";

interface INewsListProps {
  news: INews[];
  filter: string;
}

const NewsList: FC<INewsListProps> = ({ news, filter }) => {
  const light = useCallback(
    (str) => <HightLight filter={filter} str={str} />,
    [filter]
  );

  return (
    <ul className='news__list'>
      {news.map((el: INews, i) => (
        <article key={i} className='news__list--item'>
          <li>
            <Link
              to={`/${el?.title.replace(/\//g, "汉")}`}
              className='news__list--link'>
              <h3 className='news__list--title'>{light(el?.title)}</h3>{" "}
            </Link>
            <h4 className='news__list--description-title'>Description:</h4>
            <p className='news__list--description'>
              {light(el?.description)}
            </p>{" "}
          </li>{" "}
        </article>
      ))}
    </ul>
  );
};

export default NewsList;
