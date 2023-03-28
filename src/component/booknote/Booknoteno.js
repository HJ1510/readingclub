import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/component/note/Booknoteno.css';
import '../../assets/css/component/note/Post.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { AiFillHeart } from 'react-icons/ai';
import BComment from './booknoteCommet';
import Layout from './../../layout/Layout';
import { Row, Col, Button } from 'react-bootstrap';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';
import BCommentForm from './booknoteCommet/BCommentForm';
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

function Booknoteno(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [notelist, setNoteList] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState('');
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    axios.get('/api/notelist').then((res) => setNoteList(res.data));
  }, []);

  const array = notelist.filter((x) => x._id === id);

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const confirm = window.confirm('정말로 삭제하시겠습니까?');
    if (confirm) {
      try {
        await axios.delete(`/api/notelist/${id}`);
        navigate('/booknote');
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    dispatch(auth()).then((response) => {
      setUser(response.payload);
    });
  }, []);
  const handleEditClick = () => {
    navigate(`/booknote/${id}/edit`);
  };
  const handleLikeClick = async () => {
    try {
      const authResponse = await axios.get('/api/users/auth');
      const isAuth = authResponse.data.isAuth;
      const userId = authResponse.data._id;

      if (!isAuth) {
        // If user is not authenticated, redirect to login page
        navigate('/login');
        return;
      }

      const response = await axios.get(`/api/notelist/${id}`);
      const note = response.data.note;
      const isLiked = note.likesBy.includes(userId);

      if (isLiked) {
        // Unlike the note
        const response = await axios.delete(`/api/notelist/${id}/unlike`);
        const updatedNote = response.data.note;
        setLikes(updatedNote.likes);
        setIsLiked(false);
      } else {
        // Like the note
        const response = await axios.put(`/api/notelist/${id}/like`);
        const updatedNote = response.data.note;
        setLikes(updatedNote.likes);
        setIsLiked(updatedNote.likesBy.includes(userId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/notelist/${id}`);
        const note = response.data.note;
        setLikes(note.likes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Layout>
      {array.map((data1) => {
        const date = new Date(data1.bookdatetime);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${year}년 ${month}월 ${day}일`;

        return (
          <div className='post-view-wrapper'>
            <Row>
              <Col md={2} className='tumb'>
                <Link to={data1.url}>
                  <img
                    className='wirtenoteimg'
                    style={{ width: '100%', height: '100%' }}
                    src={data1.thumbnail}
                    alt={data1.booktitle}
                  />
                </Link>
              </Col>
              <Col className='bookviewnotelisttitle1'>
                <h1 style={{ margin: '15px' }}>{data1.booktitle}</h1>
                <span className='bookspan'>
                  <span>{data1.authors} 역 </span>
                  <em className='em'> | </em>
                  <span>출판사: {data1.publisher} </span>
                  <em className='em'> | </em>
                  <span>출판일: {formattedDate} </span>
                </span>

                <div style={{ margin: '15px' }}>{data1.bookcontents}</div>
              </Col>
              <>
                <main id='article-main' class='container' />
                <header id='article-header' class='py-5 text-center'>
                  <h1>{data1.title}</h1>
                </header>
                <div class='row g-5'>
                  <section class='col-md-3 col-lg-4 order-md-last'>
                    <aside>
                      <p>
                        <span id='nickname'>{data1._}</span>
                      </p>
                      <p>
                        <a id='email' href='mailto:djkehh@gmail.com'>
                          email@email.com
                        </a>
                      </p>
                      <p>
                        <time id='created-at'>
                          {formatDate(data1.createdAt)}
                        </time>
                      </p>
                    </aside>
                  </section>

                  <article id='article-content' class='col-md-9 col-lg-8'>
                    <textbox>{parse(data1.content)}</textbox>
                  </article>
                </div>
                <div class='row g-5' id='article-buttons'>
                  <form id='delete-article-form'>
                    <div class='pb-5 d-grid gap-2 d-md-block'>
                      {data1.author === user._id && (
                        <>
                          <button
                            class='btn btn-primary me-md-2'
                            onClick={handleEditClick}
                            role='button'
                          >
                            수정
                          </button>
                          <button
                            class='btn btn-danger me-md-2'
                            onClick={handleDeleteClick}
                          >
                            삭제
                          </button>
                        </>
                      )}
                      <button
                        style={{ marginLeft: '500px' }}
                        className='btn btn-success me-md-2'
                        onClick={() => navigate('/booknote')}
                      >
                        목록으로 돌아가기
                      </button>
                      <div style={{ marginTop: '10px' }}>
                        <Button variant='outline-danger'>좋아요 {likes}</Button>

                        <AiFillHeart
                          onClick={handleLikeClick}
                          style={{ color: isLiked ? 'gray' : 'red' }}
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <BCommentForm></BCommentForm>
              </>
            </Row>
          </div>
        );
      })}
    </Layout>
  );
}
export default Booknoteno;
