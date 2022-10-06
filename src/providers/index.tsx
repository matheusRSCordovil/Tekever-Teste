import { PokemonProvider } from "./PokemonProvider";

interface Props {
  children: React.ReactNode;
}

const GlobalContext: React.FC<Props> = ({ children }) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};

export default GlobalContext;
