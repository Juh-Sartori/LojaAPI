import { browserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
