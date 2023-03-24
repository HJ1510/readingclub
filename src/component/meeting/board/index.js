import ArticleList from './ArticleList';
import styles from 'assets/css/component/meeting/Board.module.css';
import { getFAQArticlesByMeetingNo } from 'api';
import { useParams } from 'react-router-dom';

function Board({ title }) {
  const { no } = useParams();

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
  } else if (title === '모임후기') {
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
