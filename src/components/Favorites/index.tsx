import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../CharacterCard";
import FavoriteHomeIcon from "../../assets/img/pokeHomeIcon.png";
import { MainContainer } from "./styles";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  // similar to componentDidMount
  useEffect(() => {
    const favorites = localStorage.getItem("favorites");

    // if favorites is not null, setFavorites to favorites. Else, keep state as an empty array
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, []);

  return (
    <MainContainer>
      <h4>Favorites</h4>

      <div className="pokemon-favorites-list">
        {favorites.map((pokemon: { id: number; name: string }) => (
          <CharacterCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id + ""}
          />
        ))}
      </div>

      <div className="to-home-button" onClick={() => navigate("/")}>
        <img alt="favorite-button" src={FavoriteHomeIcon} />

        <p>To Home</p>
      </div>
    </MainContainer>
  );
};

export default Favorites;
