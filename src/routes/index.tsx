import { Routes, Route } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo/intex";
import Favorites from "../components/Favorites";
import Home from "../components/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/character-info" element={<CharacterInfo />} />
    </Routes>
  );
};

export default Routing;
