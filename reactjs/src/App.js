import "./stylesheets/app.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
