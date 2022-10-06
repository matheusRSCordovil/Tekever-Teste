import { Routes, Route, Navigate } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo/intex";
import Favorites from "../components/Favorites";
import Home from "../components/Home";
import NotFoundPage from "../components/NotFoundPage";
import { usePokemonProvider } from "../providers/PokemonProvider";

const Routing = () => {
  const { characterInfo } = usePokemonProvider();

  // since the character info is saved on context and is not available after a refresh, we need to redirect to home page
  function RequireCharacterInfo({ children, redirectTo }: any) {
    return characterInfo ? children : <Navigate to={redirectTo} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route
        path="/character-info"
        element={
          <RequireCharacterInfo redirectTo="/">
            <CharacterInfo />
          </RequireCharacterInfo>
        }
      />
      {/* if the user tries to access a page that does not exist, redirect to not found page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
