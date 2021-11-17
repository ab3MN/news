import { combineReducers } from "redux";
import {
  IFetchOneNewsSuccess,
  IFetchOneNewsError,
  fetchActionsTypes,
  fetchOneNewsActionsType,
  NEWS_TYPES,
  IFetchNewsSucces,
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

const errorReducer = (
  state = "",
  { type, payload }: IFetchNewsError | IFetchOneNewsError
) => {
  switch (type) {
    case NEWS_TYPES.FETCH_NEWS_ERROR:
    case NEWS_TYPES.FETCH_NEWS_BY_TITLE_ERROR:
      return payload.error;
    default:
      return state;
  }
};

const loadingReducer = (
  state = false,
  { type }: fetchActionsTypes | fetchOneNewsActionsType
) => {
  switch (type) {
    case NEWS_TYPES.FETCH_NEWS_START:
    case NEWS_TYPES.FETCH_NEWS_BY_TITILE_START:
      return true;
    case NEWS_TYPES.FETCH_NEWS_SUCCESS:
    case NEWS_TYPES.FETCH_NEWS_ERROR:
    case NEWS_TYPES.FETCH_NEWS_BY_TITLE_ERROR:
    case NEWS_TYPES.FETCH_NEWS_BY_TITLE_SUCCESS:
      return false;
    default:
      return state;
  }
};

const oneNewsReducer = (
  state = [],
  { type, payload }: IFetchOneNewsSuccess
) => {
  switch (type) {
    case NEWS_TYPES.FETCH_NEWS_BY_TITLE_SUCCESS:
      return payload.oneNews;
    default:
      return state;
  }
};

export default combineReducers({
  news: newsReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  oneNews: oneNewsReducer,
});
