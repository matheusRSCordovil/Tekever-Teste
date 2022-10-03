import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, []);

  return (
    <div>
      {favorites.map((pokemon: { id: number; name: string }) => (
        <CharacterCard
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id + ""}
        />
      ))}
    </div>
  );
};

export default Favorites;
