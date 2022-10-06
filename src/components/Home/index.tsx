import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../services";
import CharacterCard from "../CharacterCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteIcon from "../../assets/img/favoritesIcon.png";
import { MainContainer } from "./styles";
import { usePokemonProvider } from "../../providers/PokemonProvider";

const Home = () => {
  const { currentPage, setCurrentPage } = usePokemonProvider();

  const navigate = useNavigate();

  const [pokemonList, setPokemonList] = useState([] as any[]);
  const [nextPage, setNextPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("");

  // set the states with the data from the API on first render and pages changes
  const handleChangePage = (url: string) => {
    API.get(url).then((res) => {
      setCurrentPage(url);
      setPokemonList(res.data.results);
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);
    });
  };

  const handleNextPage = () => {
    if (nextPage) {
      handleChangePage(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      handleChangePage(previousPage);
    }
  };

  // similar to componentDidMount, with list of pokemons on first render with next and second page variables
  useEffect(() => {
    // if currentPage has a url, go to that url. Else go to first page
    if (currentPage.length) {
      handleChangePage(currentPage);
      return;
    }

    handleChangePage("pokemon");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer>
      <h4>Home</h4>

      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <CharacterCard
            data-testid={pokemon.name}
            key={pokemon.url}
            name={pokemon.name}
            // get id from url
            id={pokemon.url.split("/")[pokemon.url.split("/").length - 2]}
          />
        ))}
      </div>

      <div
        className="favorite-button"
        onClick={() => navigate(`/favorites`)}
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
