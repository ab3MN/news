import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./componets/App";
import MyLoader from "./shared/MyLoader";
import "./index.scss";

render(
  <Suspense fallback={<MyLoader />}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>{" "}
      </React.StrictMode>{" "}
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
