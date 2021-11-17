import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NewsItem from "../componets/News/Newstem/NewsItem";

import { useDispatchAcions } from "../hooks/useDispatchActions";
import { useTypedSelector } from "../hooks/useTypedSelectors";
import { INews } from "../componets/News/types/NewsType";
import { getTitle } from "../helpers/getTitle";

const SingleNewsPage: FC = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);

  const { fetchOneNews } = useDispatchAcions();
  const oneNews: INews[] = useTypedSelector((state) => state.news.oneNews);

  useEffect(() => {
    fetchOneNews(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {oneNews[0] && <NewsItem data={oneNews[0]} />}
      <button> ---- Back to Hompage</button>
    </>
  );
};

export default SingleNewsPage;
