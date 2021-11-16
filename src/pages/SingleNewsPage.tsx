import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { INews } from "../componets/News/types/NewsType";
import NewsItem from "../componets/News/Newstem/NewsItem";
import getDate from "../helpers/getDate";

import { useDispatchAcions } from "../hooks/useDispatchActions";
import { useTypedSelector } from "../hooks/useTypedSelectors";

const SingleNewsPage: FC = () => {
  const location = useLocation();
  const { fetchNews } = useDispatchAcions();
  const news: INews[] = useTypedSelector((state) => state.news.news);
  const i = +location.pathname.slice(1);

  useEffect(() => {
    const news = localStorage.getItem("news");
    const date = getDate();
    if (news) {
      return;
    }
    fetchNews("tesla", date);
  });

  return (
    <>
      {news[i] && <NewsItem item={news[i]} />}
      <button> ---- Back to Hompage</button>
    </>
  );
};

export default SingleNewsPage;
