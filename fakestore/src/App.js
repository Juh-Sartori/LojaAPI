// import { browserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import Home from "./screens/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <browserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </browserRouter> */}
    </div>
  );
}

export default App;
