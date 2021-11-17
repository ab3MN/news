import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import NewsPage from "../pages/NewsPage";
import SingleNewsPage from "../pages/SingleNewsPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path='/:title' element={<SingleNewsPage />} />
      <Route path='/' element={<NewsPage />} />
    </Routes>
  );
};

export default App;
