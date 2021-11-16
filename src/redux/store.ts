import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import newsReducer from "./news/newsReducer";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

const rootReducer = storage.reducer(
  combineReducers({
    news: newsReducer,
  })
);

const engine = createEngine("news");
const engineMiddleWare = storage.createMiddleware(engine);
const middleWare = [ReduxThunk, logger, engineMiddleWare];

const enchancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleWare))
    : applyMiddleware(...middleWare);

export const store = createStore(rootReducer, enchancer);

const load = storage.createLoader(engine);
load(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
