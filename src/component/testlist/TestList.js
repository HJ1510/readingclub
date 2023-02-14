import items from "mock.json";

function TestList() {
  console.log(items);
  const { _embedded } = items;
  console.log(_embedded);
  const { articles } = _embedded;
  console.log(articles);

  return (
    <ul>
      {articles.map((article) => {
        return <li>{article.title}</li>;
      })}
    </ul>
  );
}

export default TestList;
