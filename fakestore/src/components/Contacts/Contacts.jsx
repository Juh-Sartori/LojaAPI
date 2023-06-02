import { Route } from "react-router-dom";
import "./styles.css";
import Home from "../../screens/Home/Home";

const Contacts = () => {
  return (
    <div className="NotFound">
      <h1>ERROR 404</h1>
      <h2>Page Not Found</h2>
      {/* <img
        src="https://img.freepik.com/vetores-gratis/glitch-error-404-page-background_23-2148090410.jpg?w=2000"
        alt=""
      /> */}
      <button>
        Home
        {/* <Route path="/" element={<Home />} /> */}
      </button>
    </div>
  );
};

export default Contacts;
