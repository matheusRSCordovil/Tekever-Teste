import { CharacterInfoProvider } from "./CharacterInfoProvider";

interface Props {
  children: React.ReactNode;
}

const GlobalContext: React.FC<Props> = ({ children }) => {
  return <CharacterInfoProvider>{children}</CharacterInfoProvider>;
};

export default GlobalContext;
