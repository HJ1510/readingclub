import MainImg from "../assets/tmpheader2.jpg";
import "./Header.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div>
        <Link to={"/"}>
          <img src={MainImg} className="Header-logo" alt="logo" />
        </Link>
      </div>
      <div>
        <Link to={"/meeting"}>
          <Button className="Header-button" variant="secondary">
            MEETING
          </Button>
        </Link>
        <Link to={"/note"}>
          <Button className="Header-button" variant="secondary">
            NOTE
          </Button>
        </Link>
        <Link to={"/community"}>
          <Button className="Header-button" variant="secondary">
            COMMUNITY
          </Button>
        </Link>
      </div>
      <div className="LoginJoin">
        <Button variant="info">Login/Join</Button>
      </div>
    </div>
  );
}

export default Header;
