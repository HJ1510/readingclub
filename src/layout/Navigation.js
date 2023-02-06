import "../assets/css/layout/Navigation.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <div className="Navigation">
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

export default Navigation;
