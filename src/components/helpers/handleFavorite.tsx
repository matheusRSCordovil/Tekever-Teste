export const handleFavorite = (
  id: string,
  favorites: any[],
  characterInfo: string,
  setFavorites: (arg0: string[]) => void
) => {
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
