import ArticleList from './ArticleList';
import styles from 'assets/css/component/meeting/Board.module.css';
import { getFAQArticlesByMeetingNo } from 'api';
import { useParams, useNavigate } from 'react-router-dom';

function Board({ title }) {
  const { no } = useParams();
  const navigate = useNavigate();
  const loadFAQArticles = async () => {
    const FAQArticle = await getFAQArticlesByMeetingNo(no);
    return FAQArticle;
  };

  const loadReviewArticles = async () => {
    // 모임 후기 데이터 로드 로직
  };

  let loadData;
  if (title === 'FAQ') {
    loadData = loadFAQArticles;
  } else if (title === 'review') {
    loadData = loadReviewArticles;
  }

  const insertFAQArticle = async (no, formData) => {
    try {
      const response = await insertFAQArticle(no ? no : '', formData);
      console.log(response);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  const insertReviewArticle = async (no, formData) => {
    // review 글 작성 로직
  };

  let handleSubmit;
  if (title === 'FAQ') {
    handleSubmit = insertFAQArticle;
  } else if (title === 'review') {
    handleSubmit = insertReviewArticle;
  }

  return (
    <div className={styles.Board}>
      <h2>{title}</h2>
      <ArticleList
        title={title}
        loadData={loadData}
        handleSubmit={handleSubmit}
        no={no}
      />
    </div>
  );
}

export default Board;
