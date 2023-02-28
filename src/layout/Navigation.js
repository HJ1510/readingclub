import "assets/css/layout/Layout.css";
import { Link,useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector,useDispatch } from 'react-redux';
import {useEffect, useState} from "react";
import { auth } from 'actions/user_action';
import axios from "axios";

function Navigation() {
  const handleMouseEnter = (e) => {
    e.target.querySelector("::before");
  };

  const handleMouseLeave = (e) => {
    e.target.querySelector("::before");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inlogin, setinlogin] = useState(false);
  const { userInfo } = useSelector(state => state.user);
  
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
    dispatch(auth()).then(response => {
        console.log(response)
        // 로그인 하지 않은상태
        if(!response.payload.isAuth){
          setinlogin(true);
            
        }else{
          setinlogin(false)
        }
  })
}, [])
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
            {inlogin ?(
             
              <Link
                to={"/login"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="login"
              >
                Login-in
              </Link>):(<><h1>{userInfo && userInfo.name}</h1>
              <Link to="#"  onClick={onClickHandler}>로그아웃</Link></>)}            </li>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
}

export default Navigation;
