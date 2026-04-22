import { createContext, useContext, useEffect, useReducer } from "react";

const FavoritesContext = createContext(null);

const initialState = {
  items: JSON.parse(localStorage.getItem("favorites")) || [],
};

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE": {
      const isExist = state.items.find(m => m.filmId === action.payload.filmId);
      if (isExist) return state;
      return { ...state, items: [...state.items, action.payload] };
    }
    default:
      return state;
  }
}

export function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.items));
  }, [state.items]);

  function addMovie(movie) {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  }

  // ВАЖНО: return должен быть ЗДЕСЬ, внутри функции FavoritesProvider
  return (
    <FavoritesContext.Provider value={{ favorites: state.items, addMovie }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}