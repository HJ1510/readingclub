import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../actions/user_action";
import styles from "./Login.module.css";
import Auth from "hoc/auth";



function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      email: email,
      password: password,
    };
  
 
  
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        localStorage.setItem("token", response.payload.usertoken);
  
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.header} onClick={()=>{
          navigate("/")
      }}>
     
      π Go book 
    
      </h1>
      <div style={{height:"200px"}}></div>
      <div id="container" >
        <div className="content">
          <div className={styles.Loginwrap}>
            <h1 style={{ textAlign: "center" ,fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Log-in</h1>

            <ul className={styles.menuwrap} role="tablist"></ul>
            {/*μμ΄λ λΉλ°λ²νΈ input */}
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={onSubmitHandler}
            >
              <ul className={styles.panelwrap}>
                <li className={styles.pitem}>
                  <div className={styles.pinner}>
                    <div className="id-pw">
                      <div className={styles.inputrow} id="id-line">
                        <div className="icon-cell"></div>
                        <input
                          type="email"
                        
                          value={email}
                          onChange={onEmailHandler}
                          placeholder="μ΄λ©μΌ"
                        />
                      </div>
                      <div className={styles.inputrow}>
                        <div className="icon-cell"></div>
                        <input
                          type="password"
                          value={password}
                          onChange={onPasswordHandler}
                          placeholder="λΉλ°λ²νΈ"
                        />
                      </div>
                    </div>
                    <div className={styles.loginuder}></div>
                    <div className={styles.btnlogin}>
                      <button type="sumbit" className={styles.btn1}>
                        <span className={styles.btntext}>λ‘κ·ΈμΈ</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          <ul className={styles.find}>
            <li>
              <Link to={"/join"}  className={styles.findtext}>
                νμκ°μ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Auth(LoginPage, false);