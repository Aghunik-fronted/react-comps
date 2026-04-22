import { Heart, Search, Home } from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";
import { Link } from "react-router-dom"; // Обязательно импортируем Link
import { Button } from "../ui/Button";

export default function Header() {
  const { favorites } = useFavorites();
  const title = "КиноПоиск React";

  return (
    <>
      <button>
        <Heart size={24} color="red" fill="red" />
        {favorites.length}
      </button>
    </>
  );
}
