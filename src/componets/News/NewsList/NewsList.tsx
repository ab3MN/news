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
        <li key={i} className='news__list--item'>
          <Link to={`/${i}`} className='news__list--link'>
            <h2 className='news__list--title'>{el?.title}</h2>{" "}
          </Link>
          <h4>Description:</h4>
          <p className='news__list--description'>{el?.description}</p>{" "}
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
