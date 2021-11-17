import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import newsReducer from "./news/newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

const middleWare = [ReduxThunk, logger];

const enchancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleWare))
    : applyMiddleware(...middleWare);

export const store = createStore(rootReducer, enchancer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
