import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "layout/Layout";
import parse from "html-react-parser";
import { getArticle, deleteArticle } from "api";
import Comment from "component/comment";
import { Container } from "react-bootstrap";
import profile from "assets/images/profile.png";
import styles from "assets/css/component/meeting/Board.module.css";

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
            <div className={styles.ArticleContentBox}>
              <div className={styles.article_header}>
                <div className={styles.ArticleTitle}>
                  <div>{data.id}</div>
                  <h3>{data.title}</h3>
                </div>
                <div className={styles.WriterInfo}>
                  <div className={styles.Writer_profile_img}>
                    <img src={profile}></img>
                  </div>
                  <div className={styles.article_writer}>
                    <div>글쓴이 id</div>
                  </div>
                  <div className={styles.article_info}>
                    <div>작성일</div>
                  </div>
                  <div className={styles.article_hit}>
                    <div>조회수</div>
                  </div>
                </div>
              </div>
              <div className={styles.article_body}>
                <div>내용: {parse(data.content)}</div>
                <div>hashTag {data.hashTag}</div>
              </div>
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
              <div className={styles.CommentBox}>
                <Comment />
              </div>
            </div>
          ) : (
            "글이 없음"
          )}
        </Container>
      </Layout>
    </div>
  );
}

export default ArticleView;
