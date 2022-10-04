import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../services";
import CharacterCard from "../CharacterCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([] as any[]);
  const [nextPage, setNextPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("");

  const handleNextPage = () => {
    if (nextPage) {
      API.get(nextPage).then((response) => {
        setPokemonList(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
      });
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      API.get(previousPage).then((response) => {
        setPokemonList(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
      });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    API.get("pokemon").then((response) => {
      setPokemonList(response.data.results);

      if (response.data.next) {
        setNextPage(response.data.next);
      }

      if (response.data.previous) {
        setPreviousPage(response.data.previous);
      }
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "90%",
          margin: "auto",
        }}
      >
        {pokemonList.map((pokemon) => (
          <CharacterCard
            key={pokemon.url}
            name={pokemon.name}
            id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]}
          />
        ))}
      </div>

      <button
        style={{ position: "fixed", right: "5%", bottom: "5%" }}
        onClick={() => navigate("/favorites")}
      >
        favoritos
      </button>

      <div
        style={{
          display: "flex",
          width: "4%",
          margin: "20px auto",
          justifyContent: "space-between",
        }}
      >
        <ArrowBackIosIcon
          onClick={handlePreviousPage}
          style={{
            cursor: previousPage?.length ? "pointer" : "not-allowed",
            color: previousPage?.length ? "" : "#cdcdcd",
          }}
        />

        <ArrowForwardIosIcon
          onClick={handleNextPage}
          style={{
            cursor: nextPage?.length ? "pointer" : "not-allowed",
            color: nextPage?.length ? "" : "#cdcdcd",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
