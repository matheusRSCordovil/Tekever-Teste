import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type PokemonProviderProps = {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
  characterInfo: any;
  setCharacterInfo: (characterInfo: any) => void;
  favorites: any[];
  setFavorites: (favorites: any[]) => void;
};

const DEFAULT_VALUE = {
  currentPage: "",
  setCurrentPage: () => {},
  characterInfo: "",
  setCharacterInfo: () => {},
  favorites: [],
  setFavorites: () => {},
};

const PokemonContext = createContext<PokemonProviderProps>(DEFAULT_VALUE);

// provider to share character info and favorites between components and avoid prop drilling, with better component separation
export const PokemonProvider: React.FC<Props> = ({ children }) => {
  const [characterInfo, setCharacterInfo] = useState<string>(
    DEFAULT_VALUE.characterInfo
  );
  const [favorites, setFavorites] = useState<any[]>(DEFAULT_VALUE.favorites);
  const [currentPage, setCurrentPage] = useState<string>(
    DEFAULT_VALUE.currentPage
  );

  return (
    <PokemonContext.Provider
      value={{
        characterInfo,
        setCharacterInfo,
        favorites,
        setFavorites,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonProvider = () => useContext(PokemonContext);
