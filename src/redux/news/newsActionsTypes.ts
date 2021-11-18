import { INews } from "../../componets/News/types/NewsType";

export enum NEWS_TYPES {
  FETCH_NEWS_START = "FETCH_NEWS_START",
  FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",

  FETCH_NEWS_BY_TITILE_START = "FETCH_NEWS_BY_TITILE_START",
  FETCH_NEWS_BY_TITLE_SUCCESS = "FETCH_NEWS_BY_TITLE_SUCCESS",
  FETCH_NEWS_BY_TITLE_ERROR = "FETCH_NEWS_BY_TITLE_ERROR",
}
type errorType = any;

export interface IFetchOneNewsStart {
  type: NEWS_TYPES.FETCH_NEWS_BY_TITILE_START;
}
export interface IFetchOneNewsSuccess {
  type: NEWS_TYPES.FETCH_NEWS_BY_TITLE_SUCCESS;
  payload: { oneNews: INews[] };
}
export interface IFetchOneNewsError {
  type: NEWS_TYPES.FETCH_NEWS_BY_TITLE_ERROR;
  payload: { error: errorType };
}
export type fetchOneNewsActionsType =
  | IFetchOneNewsStart
  | IFetchOneNewsSuccess
  | IFetchOneNewsError;

export interface IFetchNewsStart {
  type: NEWS_TYPES.FETCH_NEWS_START;
}
export interface IFetchNewsSucces {
  type: NEWS_TYPES.FETCH_NEWS_SUCCESS;
  payload: { news: INews[] };
}
export interface IFetchNewsError {
  type: NEWS_TYPES.FETCH_NEWS_ERROR;
  payload: { error: errorType };
}

export type fetchActionsTypes =
  | IFetchNewsStart
  | IFetchNewsSucces
  | IFetchNewsError;
