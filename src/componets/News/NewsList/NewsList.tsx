import React, { FC } from "react";
import { Link } from "react-router-dom";
import { INews } from "../types/NewsType";
import "./NewsList.scss";

interface INewsListProps {
  news: INews[];
}

const NewsList: FC<INewsListProps> = ({ news }) => {
  return (
    <ul className='news__list'>
      {news.map((el: INews, i) => (
        <article key={i} className='news__list--item'>
          <li>
            <Link to={`/${el.title}`} className='news__list--link'>
              <h3 className='news__list--title'>{el?.title}</h3>{" "}
            </Link>
            <h4>Description:</h4>
            <p className='news__list--description'>{el?.description}</p>{" "}
          </li>{" "}
        </article>
      ))}
    </ul>
  );
};

export default NewsList;
