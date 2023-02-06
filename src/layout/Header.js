import MainImg from "../assets/images/tmpheader2.jpg";
import "../assets/css/layout/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div>
        <Link to={"/"}>
          <img src={MainImg} className="Header-logo" alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
