import "assets/css/layout/Layout.css";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "actions/user_action";
import axios from "axios";

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inlogin, setinlogin] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const [activeMenu, setActiveMenu] = useState("");

  const handleMouseEnter = (e) => {
    e.target.querySelector("::before");
  };

  const handleMouseLeave = (e) => {
    e.target.querySelector("::before");
  };

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃에 실패했습니다");
      }
    });
  };

  useEffect(() => {
    dispatch(auth()).then((response) => {
      console.log(response);
      // 로그인 하지 않은상태
      if (!response.payload.isAuth) {
        setinlogin(true);
      } else {
        setinlogin(false);
      }
    });
  }, []);
  return (
    <header className="site-header">
      <div className="container">
        <nav>
          <ul className="nav-menu">
            <li>
              <a
                href="/"
                className={activeMenu === "home" ? "active" : ""}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setActiveMenu("home")}
              >
                Meetings
              </a>
            </li>
            <li>
              <Link
                to={"/meeting"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                My Meeting
              </Link>
            </li>
            <li>
              <Link
                to={"/meeting"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Notes
              </Link>
            </li>
            <li>
              <Link
                to={"/meeting"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                My Note
              </Link>
            </li>

            <li>
              <Link
                to={"/booknote"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Boomarked
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
              {inlogin ? (
                <Link
                  to={"/login"}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="login"
                >
                  Login-in
                </Link>
              ) : (
                <>
                  <Link to="#" onClick={onClickHandler} className="login">
                    로그아웃 / {userInfo && userInfo.name + "님"}
                  </Link>
                </>
              )}{" "}
            </li>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
}

export default Navigation;
