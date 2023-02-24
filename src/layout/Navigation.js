import "assets/css/layout/Layout.css";
import { Link,useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector,useDispatch } from 'react-redux';
import {useEffect, useState} from "react";
import { auth } from 'actions/user_action';
import axios from "axios";

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inlogin, setinlogin] = useState(false);

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
    <div className="Navigation">
      <div>
        <Link to={"/meeting"}>
          <Button className="Header-button" variant="secondary">
            MEETING
          </Button>
        </Link>
        <Link to={"/booknote"}>
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
      {inlogin ? (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
          Login-in
        </Link>
            
         
          </>
        ) : (
          <>
              <Link to="#"  onClick={onClickHandler}>로그아웃</Link>
          </>
        )}
      
      </div>
    </div>
  );
}

export default Navigation;
