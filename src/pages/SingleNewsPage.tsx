import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewsItem from "../componets/News/Newstem/NewsItem";

import { useDispatchAcions } from "../hooks/useDispatchActions";
import { useTypedSelector } from "../hooks/useTypedSelectors";
import { INews } from "../componets/News/types/NewsType";
import { getTitle } from "../helpers/getTitle";
import { replaceLetters } from "../helpers/replaceLetters";
import "./SingleNewsPage.scss";

const SingleNewsPage: FC = () => {
  const location = useLocation();
  const title = replaceLetters(getTitle(location.pathname), "汉", "/");
  const [isHovered, setHovered] = useState(false);

  console.log(title);
  let navigate = useNavigate();

  const { fetchOneNews } = useDispatchAcions();
  const oneNews: INews[] = useTypedSelector((state) => state.news.oneNews);

  useEffect(() => {
    fetchOneNews(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  const handleGoBack = () => {
    navigate("/");
  };
  let color: string = "";

  isHovered ? (color = "pink") : (color = "black");

  return (
    <>
      {oneNews[0] && <NewsItem data={oneNews[0]} />}
      <button
        className='back__btn'
        type='button'
        onClick={handleGoBack}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        color={isHovered ? "pink" : "black"}>
        <svg className='back__btn--arrow' viewBox='0 0 104 8'>
          <path
            d='M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H104V3.5H1V4.5Z'
            fill={color}
          />
        </svg>
        <span className='back__btn--text' style={{ color }}>
          Back to Hompage
        </span>
      </button>
    </>
  );
};

export default SingleNewsPage;
