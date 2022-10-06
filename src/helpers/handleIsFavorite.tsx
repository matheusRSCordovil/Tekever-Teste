export const handleIsFavorite = (id: string) => {
  const favorites = localStorage.getItem("favorites");
  // if favorites is not null, parse favorites and check if id is in favorites. Else, return false
  if (favorites) {
    const favoritesList = JSON.parse(favorites);

    const isFavorite = favoritesList.find(
      (pokemon: { id: number }) => pokemon.id + "" === id
    );

    if (isFavorite) {
      return true;
    }
  }
  return false;
};
