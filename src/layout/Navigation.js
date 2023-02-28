import "assets/css/layout/Layout.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  const handleMouseEnter = (e) => {
    e.target.querySelector("::before");
  };

  const handleMouseLeave = (e) => {
    e.target.querySelector("::before");
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav>
          <ul className="nav-menu">
            <li>
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <li>
              <Link
                to={"/meeting"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Meeting
              </Link>
            </li>
            <li>
              <Link
                to={"/booknote"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                booknote
              </Link>
            </li>
            <li>
              <Link
                to={"/community"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="login"
              >
                Login-in
              </Link>
            </li>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
}

export default Navigation;
