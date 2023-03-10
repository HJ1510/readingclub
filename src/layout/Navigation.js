import "assets/css/layout/Layout.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
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
            {/*               <Link
                to={"/meeting"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Meetings
              </Link>
            </li>
            <li>
              <Link
                to={"/meeting/mymeeting"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                My Meeting
              </Link>
            </li>
            <li>
              <Link
                to={"/booknote/notelist"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Notes
              </Link>
            </li>
            <li>
              <Link
                to={"/booknote"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                My Note
              </Link>
            </li>
            <li>
              <Link
                to={"/note/notebookmark"}
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
            {inlogin ? (
              <li>
                <Link
                  to={"/login"}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="login"
                > */}
            <li>
              <NavLink to={"/meeting"} activeClassName="active" exact>
                Meetings
              </NavLink>
            </li>
            <li>
              <NavLink to={"/mymeeting"} activeClassName="active">
                My Meeting
              </NavLink>
            </li>
            <li>
              <NavLink to={"/booknote/notelist"} activeClassName="active">
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink to={"/booknote"} activeClassName="active">
                My Note
              </NavLink>
            </li>
            <li>
              <NavLink to={"/note/notebookmark"} activeClassName="active">
                Boomarked
              </NavLink>
            </li>
            <li>
              <NavLink to={"/community"} activeClassName="active">
                Community
              </NavLink>
            </li>
            {inlogin ? (
              <li>
                <Link to={"/login"} className="login">
                  Login-in
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="#" onClick={onClickHandler} className="login">
                    로그아웃 / {userInfo && userInfo.name + "님"}
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={onClickHandler} className="login">
                    회원정보
                  </Link>
                </li>
              </>
            )}{" "}
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
}

export default Navigation;
