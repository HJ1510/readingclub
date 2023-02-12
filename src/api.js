export async function getArticle() {
  const response = await fetch("https://learn.codeit.kr/1636/foods");
  if (!response.ok) {
    throw new Error("불러오는데 실패하였습니다");
  }
  const body = await response.json();
  return body;
}

export async function createArticle(formData) {
  const response = await fetch("https://learn.codeit.kr/1636/foods", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("생성하는데 실패하였습니다");
  }
  const body = await response.json();
  return body;
}

export async function deleteArticle(id) {
  console.log(id);
  const response = await fetch(`https://learn.codeit.kr/1636/foods/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("삭제에 실패하였습니다");
  }
  const body = await response.json();
  return body;
}
