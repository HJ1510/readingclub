import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  insertFAQArticle,
  insertReviewArticle,
  insertMeetingBoardArticle,
} from 'api';
import ArticleForm from './ArticleForm';
import Layout from 'layout/Layout';

function ArticleWrite() {
  const { no } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state;
  console.log(title);

  const userData = useSelector((state) => state.user.userData);

  const handleSubmit = async (formData) => {
    try {
      let response;
      switch (title) {
        case 'FAQ':
          response = await insertFAQArticle(no ? no : '', formData);
          break;
        case 'review':
          response = await insertReviewArticle(no ? no : '', formData);
          break;
        case 'meetingBoard':
          response = await insertMeetingBoardArticle(no ? no : '', formData);
          break;
        default:
          throw new Error('게시판이 생성되지 않았습니다.');
      }
      console.log(response);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h2>글 작성</h2>
      <p>{title}</p>
      <ArticleForm onSubmit={handleSubmit} user={userData} />
    </Layout>
  );
}

export default ArticleWrite;
