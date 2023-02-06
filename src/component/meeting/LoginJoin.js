function LoginJoin() {
  return (
    <div className="LoginForm">
      <p>
        <input type={"text"} placeholder="ID"></input>
      </p>
      <p>
        <input type={"text"} placeholder="PASSWORD"></input>
      </p>
      <p>
        <button>회원가입</button>
        <button>로그인</button>
      </p>
    </div>
  );
}

export default LoginJoin;
