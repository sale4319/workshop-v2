import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Homepage } from "./Homepage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
