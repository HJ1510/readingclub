import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { getFAQArticleById, updateFAQArticleById } from 'api';
import ArticleForm from './ArticleForm';
import Layout from 'layout/Layout';

function ArticleEdit() {
  const { no, id } = useParams();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false); // 글 작성 모드인지, 글 수정 모드인지 구분하는 변수
  const [article, setArticle] = useState(null);

  const userData = useSelector((state) => state.user.userData);
  // console.log(userData);

  useEffect(() => {
    const articleLoad = async (no, id) => {
      const data = await getFAQArticleById(no, id);
      setArticle(data);
    };
    articleLoad(no, id);
  }, []);

  useEffect(() => {
    if (article) {
      setEditMode(true); // 글 수정 모드로 변경
    } else {
      setEditMode(false); // 글 작성 모드로 변경
    }
  }, [article]);

  const handleSubmit = async (formData) => {
    try {
      const response = await updateFAQArticleById({ no, id }, formData);
      console.log(response);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1>ArticleEdit</h1>
      <h2>{editMode ? '글 수정하기' : '글 작성하기'}</h2>
      <ArticleForm
        initialValues={editMode ? article : null}
        onSubmit={handleSubmit}
        user={userData}
      />
    </Layout>
  );
}

export default ArticleEdit;
