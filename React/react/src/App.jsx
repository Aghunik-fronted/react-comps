import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function Home() {
  return <h1 className="p-10">Главная</h1>;
}
function ErrorPage() {
  return <h1 className="text-red-950 p-10">Error 404: Страница не найдена</h1>;
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/favorites"
          element={<h1 className="p-10">Мои избранные</h1>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
