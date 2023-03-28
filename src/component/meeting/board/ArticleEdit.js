import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  getFAQArticleById,
  updateFAQArticleById,
  getReviewArticleById,
  updateReviewArticleById,
  getMeetingBoardArticleById,
  updateMeetingBoardArticleById,
} from 'api';
import ArticleForm from './ArticleForm';
import Layout from 'layout/Layout';

function ArticleEdit() {
  const { no, id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state;
  // console.log(title);

  const [editMode, setEditMode] = useState(false);
  const [article, setArticle] = useState(null);

  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    const articleLoad = async (no, id) => {
      let data;
      switch (title) {
        case 'FAQ':
          data = await getFAQArticleById(no, id);
          break;
        case 'review':
          data = await getReviewArticleById(no, id);
          break;
        case 'meetingBoard':
          data = await getMeetingBoardArticleById(no, id);
          break;
        default:
          throw new Error('게시판이 생성되지 않았습니다.');
      }
      setArticle(data);
    };
    articleLoad(no, id);
  }, []);

  useEffect(() => {
    if (article) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [article]);

  const handleSubmit = async (formData) => {
    try {
      let response;
      switch (title) {
        case 'FAQ':
          response = await updateFAQArticleById({ no, id }, formData);
          break;
        case 'review':
          response = await updateReviewArticleById({ no, id }, formData);
          break;
        case 'meetingBoard':
          response = await updateMeetingBoardArticleById({ no, id }, formData);
          break;
        default:
          throw new Error('게시판이 생성되지 않았습니다.');
      }
      // console.log(response);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <p>{title} 수정</p>
      <ArticleForm
        initialValues={editMode ? article : null}
        onSubmit={handleSubmit}
        user={userData}
      />
    </Layout>
  );
}

export default ArticleEdit;
