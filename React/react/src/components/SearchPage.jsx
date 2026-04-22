import React, { useState, useEffect } from "react";
import { searchMoviesByKeyboard } from "../lib/api";
import { useFavorites } from "../context/FavoritesContext";

// Если FavoritesContext еще не создан, закомментируйте эту строку
// import { useFavorites } from "../context/FavoritesContext";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [movies, setMovies] = useState([]);
  
  // Временная функция, если контекст не подключен
  const addMovie = (movie) => console.log("Добавлено:", movie.nameRu);

  useEffect(() => {
    if (!submittedQuery) return;
    const controller = new AbortController();

    searchMoviesByKeyboard(submittedQuery, 1, controller.signal)
      .then((data) => {
        setMovies(data.films || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") console.error("Ошибка API:", err);
      });

    return () => controller.abort();
  }, [submittedQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(query);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите название фильма"
          className="flex-1 rounded-xl border border-slate-300 px-4 py-4 text-black"
          type="text"
        />
        <button type="submit" className="rounded-xl bg-emerald-600 text-white px-8">
          Искать
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie.filmId} className="p-4 border rounded-xl bg-white shadow-sm flex flex-col">
            <img
              src={movie.posterUrlPreview}
              alt=""
              className="w-full h-72 object-cover rounded-md mb-3"
            />
            <h3 className="font-bold text-black">{movie.nameRu || movie.nameEn}</h3>
            <p className="text-slate-500 mb-4">{movie.year}</p>
            <button 
              type="button" 
              onClick={() => addMovie(movie)}
              className="mt-auto bg-blue-500 text-white py-2 rounded-lg"
            >
              В избранное
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}