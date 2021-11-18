import axios from "axios";
import { Dispatch } from "react";
import {
  fetchActionsTypes,
  fetchOneNewsActionsType,
  NEWS_TYPES,
} from "./newsActionsTypes";

axios.defaults.baseURL = "https://newsapi.org/v2";
const KEY = "b537a33205e64cd999daf87a4c4819ce";

export const fetchOneNews = (title: string) => {
  return async (d: Dispatch<fetchOneNewsActionsType>) => {
    try {
      d({
        type: NEWS_TYPES.FETCH_NEWS_BY_TITILE_START,
      });
      const res = await axios.get(
        `/everything?qInTitle=${title}&language=en&sortBy=publishedAt&apiKey=${KEY}`
      );
      d({
        type: NEWS_TYPES.FETCH_NEWS_BY_TITLE_SUCCESS,
        payload: { oneNews: res?.data?.articles },
      });
    } catch {
      d({
        type: NEWS_TYPES.FETCH_NEWS_BY_TITLE_ERROR,
        payload: { error: "Fetch news with some error" },
      });
    }
  };
};

export const fetchNews = (
  query: string = "tesla",
  today: string = "2021-10-15",
  lastWeek: string = "2021-10-15"
) => {
  return async (d: Dispatch<fetchActionsTypes>) => {
    try {
      d({
        type: NEWS_TYPES.FETCH_NEWS_START,
      });
      const res = await axios.get(
        `/everything?q=${query}&language=en&from=${lastWeek}&to=${today}&sortBy=publishedAt&apiKey=${KEY}`
      );
      d({
        type: NEWS_TYPES.FETCH_NEWS_SUCCESS,
        payload: {
          news: res.data.articles,
        },
      });
    } catch (e) {
      d({
        type: NEWS_TYPES.FETCH_NEWS_ERROR,
        payload: {
          error: e,
        },
      });
    }
  };
};
