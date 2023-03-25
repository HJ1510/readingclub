import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useArticle } from 'hooks/useArticle';
import styles from 'assets/css/component/meeting/Board.module.css';
import { HiPencilSquare } from 'react-icons/hi2';
import Pagination from './Pagination';
import { useState } from 'react';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

function ArticleList({ title, loadData, no }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, handlePageChange] = useArticle(loadData);
  const items =
    title === 'FAQ'
      ? data.faqArticles
      : title === 'review'
      ? data.reviewArticles
      : data.meetingBoardArticles;
  const totalPages = data.totalPages;

  const handlePaginationPageChange = (page) => {
    setCurrentPage(page);
    handlePageChange(page);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link
              to={`/meeting/${no}/write`}
              state={{ title: title }}
              className={styles.articleWriteButton}
            >
              <HiPencilSquare size='24' />
            </Link>
          </Col>
        </Row>
        {items && items.length !== 0 ? (
          <div className={styles.articleList}>
            {items.map((item, idx) => (
              <div key={idx}>
                <Row className={styles.articles}>
                  <Col md={1}></Col>
                  <Col md={1}>{item.autoIncrementField}</Col>
                  <Col md={5} className={styles.articlesTitle}>
                    <Link to={`${item._id}`} state={{ title: title }}>
                      {item.title}
                    </Link>
                  </Col>
                  <Col md={1}>{item.creator.name}</Col>
                  <Col md={2}>{formatDate(item.createdAt)}</Col>
                  <Col md={1}>{item.hitCount}</Col>
                </Row>
              </div>
            ))}
            <Row>
              <Col>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePaginationPageChange}
                />
              </Col>
            </Row>
          </div>
        ) : (
          '글이 없습니다. 글을 작성해주세요.'
        )}
      </Container>
    </div>
  );
}

export default ArticleList;
