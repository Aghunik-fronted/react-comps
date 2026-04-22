import { createContext, useContext, useEffect, useReducer } from "react";

const FavoritesContext = createContext(null);

const initialState = {
  items: JSON.parse(localStorage.getItem("favorites")) || [],
};

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE": {
      const exist = state.items.some(
        (item) => item.filmId === action.payload.id,
      );
      if (exist) return state;
      return { ...state, items: [...state.items, action.payload] };
    }

    case "TOGGLE_MOVIE": {
      const exists = state.items.some(
        (item) => item.filmId === action.payload.filmId,
      );
      if (exists) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.filmId !== action.payload.filmId,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
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

  function toggleMovie(movie) {
    dispatch({ type: "TOGGLE_MOVIE", payload: movie });
  }

  function isFavorite(id) {
    return state.items.some((item) => item.filmId == id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites: state.items, addMovie, toggleMovie, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
