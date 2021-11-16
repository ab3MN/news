import React, { FC, useEffect } from "react";
import getDate from "../../helpers/getDate";
import { useDispatchAcions } from "../../hooks/useDispatchActions";
import NewsList from "./NewsList/NewsList";

const News: FC = () => {
  const { fetchNews } = useDispatchAcions();

  useEffect(() => {
    const news = localStorage.getItem("news");
    const date = getDate();
    if (news) {
      return;
    }
    fetchNews("tesla", date);
  });

  return <NewsList />;
};

export default News;
