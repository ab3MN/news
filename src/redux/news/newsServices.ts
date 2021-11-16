import axios from "axios";
import { Dispatch } from "react";
import { fetchActionsTypes, NEWS_TYPES } from "./newsActionsTypes";

axios.defaults.baseURL = "https://newsapi.org/v2";
const KEY = "b537a33205e64cd999daf87a4c4819ce";

export const fetchNews = (
  query: string = "tesla",
  date: string = "2021-10-15"
) => {
  return async (d: Dispatch<fetchActionsTypes>) => {
    try {
      d({
        type: NEWS_TYPES.FETCH_NEWS_START,
      });
      const res = await axios.get(
        `/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${KEY}`
      );
      d({
        type: NEWS_TYPES.FETCH_NEWS_SUCCESS,
        payload: {
          news: res?.data?.articles,
        },
      });
    } catch {
      d({
        type: NEWS_TYPES.FETCH_NEWS_ERROR,
        payload: {
          error: "Fetch news with some error",
        },
      });
    }
  };
};
