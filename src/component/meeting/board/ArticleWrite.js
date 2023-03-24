import { createArticle, insertFAQArticle } from 'api';
import Layout from 'layout/Layout';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';
import Editor from './Editor';
import styles from 'assets/css/component/meeting/Board.module.css';

const INITIAL_VALUES = {
  title: '',
  content: '',
  writer: '',
  createAt: null,
  hashTag: '',
};

function ArticleWrite() {
  const { no } = useParams();

  const navigate = useNavigate();
  const [values, setValues] = useState(INITIAL_VALUES);
  const [authUser, setAuthUser] = useState({});
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit called');
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('content', values.content);
    formData.append('creator', authUser._id);

    try {
      const response = await insertFAQArticle(no, formData);
      console.log(response);
      navigate(-1);
      setValues(INITIAL_VALUES);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(auth()).then((response) => {
      setAuthUser(response.payload);
    });
  }, []);

  return (
    <div>
      <Layout>
        <div className={styles.Write}>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              autoComplete='off'
              name='title'
              value={values.title}
              placeholder='title'
              onChange={handleInputChange}
              id={styles.title_txt}
            ></input>

            <textarea
              name='content'
              value={values.content}
              placeholder='content'
              onChange={handleInputChange}
              id={styles.content_txt}
            ></textarea>

            <button type='submit'>글쓰기</button>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default ArticleWrite;
