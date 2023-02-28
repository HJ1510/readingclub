import Layout from "../../layout/Layout";
import axios from "axios";

function Main() {
  function user() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        console.log(Response.data[2].name);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  return (
    <Layout>
      <div>
        <h1>Main</h1>
        <p>Main, 그 페이지는 가장 먼저 보여지는 페이지.</p>
      </div>
      <button onClick={user}>안녕</button>
    </Layout>
  );
}

export default Main;