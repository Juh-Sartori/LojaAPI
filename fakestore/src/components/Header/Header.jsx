import "./styles.css";
import { BsCart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="topo">
      <div id="logo">GREENMIND</div>

      <ul>
        <li>
          <NavLink className="links" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="/contacts">
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="icon">
        <BsCart />
        <BsPerson />
        <p>|</p>
        <BiMenuAltRight />
      </div>
    </header>
  );
};

export default Header;
