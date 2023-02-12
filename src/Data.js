const articleList = [
  {
    no: 1,
    title: "첫번째 게시글입니다.",
    content: "첫번째 게시글 내용입니다.",
    createUser: "둘리",
    createDate: "2023-02-01",
    readCount: 6,
    replyCount: 0,
  },
  {
    no: 2,
    title: "두번째 게시글입니다.",
    content: "두번째 게시글 내용입니다.",
    createUser: "고길동",
    createDate: "2023-02-02",
    readCount: 5,
    replyCount: 1,
  },
  {
    no: 3,
    title: "세번째 게시글입니다.",
    content: "세번째 게시글 내용입니다.",
    createUser: "마이콜",
    createDate: "2023-02-03",
    readCount: 1,
    replyCount: 2,
  },
  {
    no: 4,
    title: "네번째 게시글입니다.",
    content: "네번째 게시글 내용입니다.",
    createUser: "또치",
    createDate: "2023-02-04",
    readCount: 2,
    replyCount: 0,
  },
  {
    no: 5,
    title: "다섯번째 게시글입니다.",
    content: "다섯번째 게시글 내용입니다.",
    createUser: "희동",
    createDate: "2023-02-05",
    readCount: 4,
    replyCount: 2,
  },
];

const getArticleByNo = (no) => {
  const array = articleList.filter((x) => x.no === no);
  console.log(articleList);
  if (array.length === 1) {
    return array[0];
  }
  return null;
};

export { articleList, getArticleByNo };
