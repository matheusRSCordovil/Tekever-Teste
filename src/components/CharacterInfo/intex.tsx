import { useCharacterInfoProvider } from "../../providers/CharacterInfoProvider";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { handleFavorite } from "../helpers/handleFavorite";

const CharacterInfo = () => {
  const { characterInfo, favorites, setFavorites } = useCharacterInfoProvider();

  return (
    <div
      style={{
        display: "flex",
        color: "blue",
        width: "100%",
        minHeight: "100vh",
        background: "aliceblue",
        textAlign: "center",
      }}
    >
      <p>{characterInfo.name}</p>

      <button
        onClick={() =>
          handleFavorite(
            characterInfo.id,
            favorites,
            characterInfo,
            setFavorites
          )
        }
      >
        Favoritar
      </button>
    </div>
  );
};

export default CharacterInfo;
