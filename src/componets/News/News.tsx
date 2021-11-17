import React, { FC, useEffect } from "react";
import getDate from "../../helpers/getDate";
import { useDispatchAcions } from "../../hooks/useDispatchActions";
import NewsList from "./NewsList/NewsList";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import "./News.scss";

const News: FC = () => {
  const { fetchNews } = useDispatchAcions();

  useEffect(() => {
    const date = getDate();
    fetchNews("tesla", date);
  });

  return (
    <>
      <header className='search'>
        <h3 className='search__title'>Filter by keywords: </h3>
        <TextField
          className='search__input'
          label='Find news'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </header>
      <main className='news__container'>
        <h3 className='news__container--title'>Result: 4</h3>
        <div className='news__container--hr'></div>
        <NewsList />
      </main>
    </>
  );
};

export default News;
