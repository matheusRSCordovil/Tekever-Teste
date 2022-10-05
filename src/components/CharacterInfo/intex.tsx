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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={characterInfo.sprites.front_default}
            alt="pokemon"
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "#d3c593",
            }}
          />
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
              style={{ width: 54, height: 54, marginTop: 20, color: "red" }}
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
              style={{ width: 54, height: 54, marginTop: 20, color: "red" }}
            />
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            textAlign: "left",
            paddingLeft: 20,
          }}
        >
          <div>Name: {characterInfo.name}</div>
          <div>Height: {characterInfo.height}</div>
          <div>Weight: {characterInfo.weight} </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            textAlign: "left",
            paddingLeft: 20,
          }}
        >
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
