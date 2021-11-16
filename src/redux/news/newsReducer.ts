import { combineReducers } from "redux";
import {
  NEWS_TYPES,
  IFetchNewsSucces,
  IFetchNewsStart,
  IFetchNewsError,
} from "./newsActionsTypes";

const newsReducer = (state = [], { type, payload }: IFetchNewsSucces) => {
  switch (type) {
    case NEWS_TYPES.FETCH_NEWS_SUCCESS:
      return payload.news;
    default:
      return state;
  }
};

const errorReducer = (state = "", { type, payload }: IFetchNewsError) => {
  switch (type) {
    case NEWS_TYPES.FETCH_NEWS_ERROR:
      return payload.error;
    default:
      return state;
  }
};

const loadingReducer = (
  state = false,
  { type }: IFetchNewsSucces | IFetchNewsError | IFetchNewsStart
) => {
  switch (type) {
    case NEWS_TYPES.FETCH_NEWS_START:
      return true;
    case NEWS_TYPES.FETCH_NEWS_SUCCESS:
    case NEWS_TYPES.FETCH_NEWS_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  news: newsReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});
