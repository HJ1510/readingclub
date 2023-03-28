import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import Layout from 'layout/Layout';
import parse from 'html-react-parser';
import {
  getFAQArticleById,
  deleteFAQArticleById,
  getReviewArticleById,
  deleteReviewArticleById,
  getMeetingBoardArticleById,
  deleteMeetingBoardArticleById,
} from 'api';
import Comment from 'component/comment';
import { Container } from 'react-bootstrap';
import profile from 'assets/images/profile.png';
import styles from 'assets/css/component/meeting/Board.module.css';

function formatDate(value) {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? '오후' : '오전';
  const formattedHours = hours % 12 || 12;
  return `${year}-${month}-${day} ${period} ${formattedHours}:${minutes}`;
}

function ArticleView() {
  const [data, setData] = useState({});
  const { no, id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const { title } = location.state;
  console.log(title);
  console.log(data);

  useEffect(() => {
    const articleLoad = async (no, id) => {
      let article;
      switch (title) {
        case 'FAQ':
          article = await getFAQArticleById(no, id);
          break;
        case 'review':
          article = await getReviewArticleById(no, id);
          break;
        case 'meetingBoard':
          article = await getMeetingBoardArticleById(no, id);
          break;
        default:
          throw new Error('게시판이 생성되지 않았습니다.');
      }
      setData(article);
    };
    articleLoad(no, id);
  }, [id]);

  const onDelete = async (no, id) => {
    switch (title) {
      case 'FAQ':
        await deleteFAQArticleById(no, id);
        break;
      case 'review':
        await deleteReviewArticleById(no, id);
        break;
      case 'meetingBoard':
        await deleteMeetingBoardArticleById(no, id);
        break;
      default:
        throw new Error('게시판이 생성되지 않았습니다.');
    }
    navigate(-1);
    return;
  };

  return (
    <div>
      <Layout>
        <Container>
          {data && data.creator ? (
            <div className={styles.ArticleContentBox}>
              <div className={styles.article_header}>
                <div className={styles.ArticleTitle}>
                  <h3>{data.title}</h3>
                </div>
                <div className={styles.WriterInfo}>
                  <div className={styles.Writer_profile_img}>
                    {data.creator.imgpath ? (
                      <img
                        src={`/${data.creator.imgpath.path}`}
                        alt='profile'
                      />
                    ) : (
                      <img src={profile} alt='profile' />
                    )}
                  </div>
                  <div className={styles.article_writer}>
                    <div>{data?.creator?.name}</div>
                  </div>
                  <div className={styles.article_info}>
                    <div>{formatDate(data.createdAt)}</div>
                  </div>
                  <div className={styles.article_hit}>
                    <div>조회수 {data.hitCount}</div>
                  </div>
                </div>
              </div>
              <div className={styles.article_body}>
                <div>{parse(data.content)}</div>
                <div>
                  {data?.hashtags?.map((hashtag, idx) => {
                    return (
                      <p className={styles.hashTag} key={idx}>
                        해시태그 : {hashtag}
                      </p>
                    );
                  })}
                </div>
              </div>
              <button
                className={styles.button + ' ' + styles.delete}
                onClick={() => {
                  onDelete(no, id);
                }}
              >
                삭제
              </button>
              <Link to={`../info/${no}/modi/${id}`} state={{ title: title }}>
                <button className={styles.button + ' ' + styles.edit}>
                  수정
                </button>
              </Link>
              <Link to={`../info/${no}`}>
                <button className={styles.button + ' ' + styles.list}>
                  목록으로
                </button>
              </Link>
              {/* <div className={styles.CommentBox}>
                <Comment />
              </div> */}
            </div>
          ) : (
            'loading...'
          )}
        </Container>
      </Layout>
    </div>
  );
}

export default ArticleView;
