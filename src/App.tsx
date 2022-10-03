import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";
import GlobalContext from "./providers";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <div className="App">
          <Routing />
        </div>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
