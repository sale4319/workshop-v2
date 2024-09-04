import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Homepage } from "./pages/Home";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
        <ToastContainer autoClose={1000} hideProgressBar theme="dark" />
      </div>
    </>
  );
}

export default App;
