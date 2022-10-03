import { useCharacterInfoProvider } from "../../providers/CharacterInfoProvider";

const CharacterInfo = () => {
  const { characterInfo, favorites, setFavorites } = useCharacterInfoProvider();

  const handleFavorite = (id: string) => {
    let array: string[] | [""] = favorites;
    let addArray = true;

    // eslint-disable-next-line array-callback-return
    array.map((item: any) => {
      if (item.id === id) {
        array.splice(array.indexOf(item), 1);
        addArray = false;
      }
    });

    if (addArray) {
      array.push(characterInfo);
    }

    setFavorites([...array]);
    localStorage.setItem("favorites", JSON.stringify(array));
  };

  console.log(characterInfo);

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
      <button onClick={() => handleFavorite(characterInfo.id)}>
        Favoritar
      </button>
    </div>
  );
};

export default CharacterInfo;
