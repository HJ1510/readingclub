import ArticleList from './ArticleList';
import styles from 'assets/css/component/meeting/Board.module.css';
import { getFAQArticlesByMeetingNo, getReviewArticlesByMeetingNo } from 'api';
import { useParams, useNavigate } from 'react-router-dom';

function Board({ title }) {
  const { no } = useParams();

  const loadFAQArticles = async (page) => {
    const FAQArticle = await getFAQArticlesByMeetingNo(no, page);
    return FAQArticle;
  };

  const loadReviewArticles = async (page) => {
    const reviewArticle = await getReviewArticlesByMeetingNo(no, page);
    return reviewArticle;
  };

  let loadData;
  if (title === 'FAQ') {
    loadData = loadFAQArticles;
  } else if (title === 'review') {
    loadData = loadReviewArticles;
  }

  return (
    <div className={styles.Board}>
      <h2>{title}</h2>
      <ArticleList title={title} loadData={loadData} no={no} />
    </div>
  );
}

export default Board;
