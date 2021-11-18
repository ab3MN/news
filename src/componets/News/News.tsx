import React, { FC, useEffect, useState } from "react";
import { getDate } from "../../helpers/getDate";
import NewsList from "./NewsList/NewsList";
import "./News.scss";
import { useDispatchAcions } from "../../hooks/useDispatchActions";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import { INews } from "./types/NewsType";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const News: FC = () => {
  const [filter, setFilter] = useState("");
  const news: Array<INews> = useTypedSelector((state) => state.news.news);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFilter(e.target.value);

  /*Fetch*/
  const { fetchNews } = useDispatchAcions();
  useEffect(() => {
    const today = getDate();
    const lastWeek = getDate(7);
    fetchNews("tesla", today, lastWeek); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtredNews = news.filter(
    (el) =>
      el?.title?.toLowerCase().includes(filter.toLowerCase()) ||
      el?.description?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <header className='search'>
        <h3 className='search__title'>Filter by keywords : </h3>{" "}
        <FormControl>
          <InputLabel htmlFor='news__filter'>News</InputLabel>
          <OutlinedInput
            type='text'
            className='search__input'
            placeholder='Find news'
            id='news__filter'
            value={filter}
            onChange={handleChange}
            label='filter'
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
          />{" "}
        </FormControl>
      </header>
      <main className='news__container'>
        <h3 className='news__container--title'>
          Result : {filtredNews.length || "No news"}
        </h3>
        <div className='news__container--hr'></div>
        <NewsList news={filtredNews} filter={filter} />
      </main>
    </>
  );
};

export default News;
