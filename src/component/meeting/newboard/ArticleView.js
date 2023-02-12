import "../../../assets/css/component/meeting/Board.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "layout/Layout";
import { getArticle } from "api";

function ArticleView() {
  const [data, setData] = useState({});
  const { no } = useParams();

  const articleLoad = async () => {
    const { foods } = await getArticle();
    setData(foods);
  };

  const getArticleByNo =(no)=>{
    console.log(no+1);
  };

  useEffect(() => {
    setData(getArticleByNo(no));
    console.log(no);
  }, []);

  return (
    <Layout>
      <h4>글 상세 페이지</h4>
      <div className="post-view-wrapper">
        {data ? (
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{data.no}</label>
            </div>
            <div className="post-view-row">
              <label>제목</label>
              <label>{data.title}</label>
            </div>
            <div className="post-view-row">
              <label>작성일</label>
              <label>{data.createDate}</label>
            </div>
            <div className="post-view-row">
              <label>조회수</label>
              <label>{data.readCount}</label>
            </div>
            <div className="post-view-row">
              <label>내용</label>
              <div>{data.content}</div>
            </div>
          </>
        ) : (
          "해당 게시글을 찾을 수 없습니다."
        )}
      </div>
    </Layout>
  );
}

export default ArticleView;
