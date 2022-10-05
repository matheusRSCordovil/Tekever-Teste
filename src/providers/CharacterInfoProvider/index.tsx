import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type CharacterInfoProviderProps = {
  characterInfo: any;
  setCharacterInfo: (characterInfo: any) => void;
  favorites: any[];
  setFavorites: (favorites: any[]) => void;
};

const DEFAULT_VALUE = {
  characterInfo: "",
  setCharacterInfo: () => {},
  favorites: [],
  setFavorites: () => {},
};

const CharacterInfoContext =
  createContext<CharacterInfoProviderProps>(DEFAULT_VALUE);

// provider to share character info and favorites between components and avoid prop drilling, with better component separation
export const CharacterInfoProvider: React.FC<Props> = ({ children }) => {
  const [characterInfo, setCharacterInfo] = useState<string>(
    DEFAULT_VALUE.characterInfo
  );
  const [favorites, setFavorites] = useState<any[]>(DEFAULT_VALUE.favorites);

  return (
    <CharacterInfoContext.Provider
      value={{
        characterInfo,
        setCharacterInfo,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </CharacterInfoContext.Provider>
  );
};

export const useCharacterInfoProvider = () => useContext(CharacterInfoContext);
