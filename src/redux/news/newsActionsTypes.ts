import { INews } from "../../componets/News/types/NewsType";

export enum NEWS_TYPES {
  FETCH_NEWS_START = "FETCH_NEWS_START",
  FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",
}
type errorType = string;

export interface IFetchNewsStart {
  type: NEWS_TYPES.FETCH_NEWS_START;
}

export interface IFetchNewsSucces {
  type: NEWS_TYPES.FETCH_NEWS_SUCCESS;
  payload: { news: INews };
}
export interface IFetchNewsError {
  type: NEWS_TYPES.FETCH_NEWS_ERROR;
  payload: { error: errorType };
}

export type fetchActionsTypes =
  | IFetchNewsStart
  | IFetchNewsSucces
  | IFetchNewsError;
