import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NewsPage from "../pages/NewsPage";
import SingleNewsPage from "../pages/SingleNewsPage";

const App = () => {
  return (
    <Routes>
      <Route path='/:newsId' element={<SingleNewsPage />} />
      <Route path='/' element={<NewsPage />} />
    </Routes>
  );
};

export default App;
