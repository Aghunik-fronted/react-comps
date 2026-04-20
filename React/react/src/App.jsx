import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import SearchPages from "./components/SearchPages";
import Header from "./components/Header";

// function Home() {
//     return <h1>Главная</h1>
// }
//   function AboutPage() {
//     return <h1>О нас</h1>;
//   }

//   function ContactPage() {
//     return <h1>Контакты</h1>
//   }
//   function ErrorPage() {
//     return <h1 className='text-red-950'>Error</h1>
//   }
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <nav className="bg-white shadow-sm p-4 flex gap-4 justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-emerald-600 font-bold" : "text-gray-600"
          }
        >
          Поиск
        </NavLink>
        {/* Здесь можно добавить ссылки на "Избранное" и т.д. */}
      </nav>

      <Routes>
        <Route path="/" element={<SearchPages />} />
        {/* <Route path="/movie/:id" element={<MovieDetail />} /> */}
      </Routes>
    </div>
  );
}
