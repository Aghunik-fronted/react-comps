import { createContext, useContext, useEffect, useReducer } from "react";

const FavoritesContext = createContext(null);
const initialState = {
  items: [],
};

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
  }
}

export function FavoritesProviver({ chidren }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.items));
  }, [state.items]);

  function addMovie(movie) {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  }
}

return (
  <FavoritesContext.Provider value={{ favorites: state.items, addMovie }}>
    {chidren}
  </FavoritesContext.Provider>
);

export function useFavorites() {
  return useContext(FavoritesContext);
}
