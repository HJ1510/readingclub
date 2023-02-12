export async function getArticle() {
  const response = await fetch("https://learn.codeit.kr/1636/foods");
  const body = await response.json();

  return body;
}
