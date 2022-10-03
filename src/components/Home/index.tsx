import { useEffect, useState } from "react";
import { API } from "../../services";
import CharacterCard from "../CharacterCard";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([] as any[]);

  useEffect(() => {
    API.get("pokemon").then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pokemonList.map((pokemon) => (
        <CharacterCard
          key={pokemon.url}
          name={pokemon.name}
          id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]}
        />
      ))}
    </div>
  );
};

export default Home;
