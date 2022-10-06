import { useCharacterInfoProvider } from "../../providers/CharacterInfoProvider";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { handleFavorite } from "../../helpers/handleFavoriteList";
import FavoriteHomeIcon from "../../assets/img/pokeHomeIcon.png";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./styles";
import { handleIsFavorite } from "../../helpers/handleIsFavorite";

const CharacterInfo = () => {
  const { characterInfo, favorites, setFavorites } = useCharacterInfoProvider();

  const navigate = useNavigate();

  // render character info set on context
  return (
    <MainContainer>
      <div className="profile-card">
        <div>
          <img src={characterInfo.sprites.front_default} alt="pokemon" />
          {handleIsFavorite(characterInfo.id + "") ? (
            <AiFillHeart
              className="heart-icon"
              onClick={() =>
                handleFavorite(
                  characterInfo.id,
                  favorites,
                  characterInfo,
                  setFavorites
                )
              }
            />
          ) : (
            <AiOutlineHeart
              className="heart-icon"
              onClick={() =>
                handleFavorite(
                  characterInfo.id,
                  favorites,
                  characterInfo,
                  setFavorites
                )
              }
            />
          )}
        </div>

        <div>
          <div>Name: {characterInfo.name}</div>
          <div>Height: {characterInfo.height}</div>
          <div>Weight: {characterInfo.weight} </div>
        </div>

        <div>
          <div>Species: {characterInfo.species.name} </div>
          <div>Base XP: {characterInfo.base_experience}</div>
        </div>
      </div>

      <div className="sprites-container">
        {characterInfo.sprites.front_default && (
          <img src={characterInfo.sprites.front_default} alt="pokemon" />
        )}
        {characterInfo.sprites.back_default && (
          <img src={characterInfo.sprites.back_default} alt="pokemon" />
        )}
        {characterInfo.sprites.back_female && (
          <img src={characterInfo.sprites.back_female} alt="pokemon" />
        )}
        {characterInfo.sprites.front_female && (
          <img src={characterInfo.sprites.front_female} alt="pokemon" />
        )}
        {characterInfo.sprites.front_shiny && (
          <img src={characterInfo.sprites.front_shiny} alt="pokemon" />
        )}
        {characterInfo.sprites.back_shiny && (
          <img src={characterInfo.sprites.back_shiny} alt="pokemon" />
        )}
        {characterInfo.sprites.back_shiny_female && (
          <img src={characterInfo.sprites.back_shiny_female} alt="pokemon" />
        )}
        {characterInfo.sprites.front_shiny_female && (
          <img src={characterInfo.sprites.front_shiny_female} alt="pokemon" />
        )}
      </div>

      <div className="to-home-button" onClick={() => navigate("/")}>
        <img alt="favorite-button" src={FavoriteHomeIcon} />

        <p>To Home</p>
      </div>
    </MainContainer>
  );
};

export default CharacterInfo;
