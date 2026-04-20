const BASE_URL = "https://kinopoiskapiunofficial.tech";
const API_KEY = "dc2e56b4-9b1f-432f-8371-542669705498";

export function searchMoviesByKeyboard(keyword, page = 1, signal) {
  // Добавляем проверку, чтобы не отправлять пустой запрос
  if (!keyword) return Promise.resolve({ films: [] });

  return fetch(
    `${BASE_URL}/v2.1/films/search-by-keyword?keyword=${encodeURIComponent(keyword)}&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      signal,
    },
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.status}`);
    }
    return response.json();
  });
}
