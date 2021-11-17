import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelectors";
import { INews } from "../types/NewsType";
import "./NewsList.scss";

const NewsList: FC = () => {
  const news: Array<INews> = useTypedSelector((state) => state.news.news);
  return (
    <ul>
      {news.map((el: INews, i) => (
        <article key={i}>
          <li className='news__list--item'>
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
