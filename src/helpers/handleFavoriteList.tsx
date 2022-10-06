/* eslint-disable array-callback-return */
export const handleFavorite = (
  id: string,
  favorites: any[],
  characterInfo: string,
  setFavorites: (arg0: string[]) => void
) => {
  let array: string[] | [""] = favorites;
  let addArray = true;

  // if id is already in favorites, remove it
  array.map((item: any) => {
    if (item.id === id) {
      array.splice(array.indexOf(item), 1);
      addArray = false;
    }
  });

  // if id is not in favorites, add it
  if (addArray) {
    array.push(characterInfo);
  }

  setFavorites([...array]);
  localStorage.setItem("favorites", JSON.stringify(array));
};
