import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../services";
import CharacterCard from "../CharacterCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteIcon from "../../assets/img/favoritesIcon.png";
import { MainContainer } from "./styles";

const Home = () => {
  const navigate = useNavigate();

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

  // similar to componentDidMount, with list of pokemons on first render with next and second page variables
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
    <MainContainer>
      <h4>Home</h4>

      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <CharacterCard
            key={pokemon.url}
            name={pokemon.name}
            // get id from url
            id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]}
          />
        ))}
      </div>

      <div
        className="favorite-button"
        onClick={() => navigate("/favorites")}
        data-testid="favorites-button"
      >
        <img alt="favorite-button" src={FavoriteIcon} />

        <p>Favorites</p>
      </div>

      <div className="pagination">
        <ArrowBackIosIcon
          onClick={handlePreviousPage}
          // if previous page is null, disable button
          style={{
            cursor: previousPage?.length ? "pointer" : "not-allowed",
            color: previousPage?.length ? "" : "#cdcdcd",
          }}
        />

        <ArrowForwardIosIcon
          onClick={handleNextPage}
          // if next page is null, disable button
          style={{
            cursor: nextPage?.length ? "pointer" : "not-allowed",
            color: nextPage?.length ? "" : "#cdcdcd",
          }}
        />
      </div>
    </MainContainer>
  );
};

export default Home;
