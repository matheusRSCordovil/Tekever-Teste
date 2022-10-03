import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../services";
import CharacterCard from "../CharacterCard";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([] as any[]);

  const navigate = useNavigate();

  useEffect(() => {
    API.get("pokemon").then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemonList.map((pokemon) => (
          <CharacterCard
            key={pokemon.url}
            name={pokemon.name}
            id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]}
          />
        ))}
      </div>
      <button onClick={() => navigate("/favorites")}>favoritos</button>
    </div>
  );
};

export default Home;
