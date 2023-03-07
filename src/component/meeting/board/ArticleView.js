import "./Board.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "layout/Layout";
import { getArticle, deleteArticle } from "api";
import Comment from "component/comment";
import { Container } from "react-bootstrap";

function ArticleView() {
  const [data, setData] = useState({});
  const { id, no } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const articleLoad = async (id) => {
      const { foods } = await getArticle();

      const article = foods.filter((item) => item.id === parseInt(id));

      setData(article[0]);
      // console.log(article[0]);
    };
    articleLoad(id);
    // console.log(`2+${id}`);
  }, [id]);

  const onDelete = () => {
    deleteArticle(id);
    return;
  };

  return (
    <div>
      <Layout>
        <Container>
          <h4>글 상세 페이지</h4>
          {data ? (
            <div className="ArticleContentBox">
              <div className="article_header">
                <div className="ArticleTitle">
                  <div>{data.id}</div>
                  <h3>{data.title}</h3>
                </div>
                <div className="WriterInfo">
                  <div>글쓴이 프로필</div>
                  <div>글쓴이 id</div>
                  <div className="article_info">
                    <div>작성일</div>
                    <div>조회수</div>
                  </div>
                </div>
              </div>
              <div className="article_body">
                <div>{data.content}</div>
              </div>
            </div>
          ) : (
            "글이 없음"
          )}
          {data ? (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{data.id}</label>
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
              <div className="post-view-row">
                <label>hashTag</label>
                <div>{data.hashTag}</div>
              </div>
            </>
          ) : (
            "해당 게시글을 찾을 수 없습니다."
          )}
        </Container>
        <button
          onClick={() => {
            onDelete();
            navigate(-1);
          }}
        >
          삭제
        </button>
        <Link to={`../info/${no}/modi/${id}`}>
          <button>수정</button>
        </Link>
        <Link to={`../info/${no}`}>
          <button>목록으로</button>
        </Link>
        <Comment />
      </Layout>
    </div>
  );
}

export default ArticleView;
