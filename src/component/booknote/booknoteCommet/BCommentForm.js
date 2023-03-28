import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function BCommentForm() {
  const [values, setValues] = useState('');
  const [comments, setComments] = useState([]);
  const [book, setBook] = useState('');
  useEffect(() => {
    // 댓글 목록을 가져오는 API 호출
    axios
      .get('/api/Bcomments')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCommentChange = (e) => {
    setValues(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!values) {
      alert('코멘트 내용을 입력해주세요.');
      return;
    }
    let body = {
      content: values,
    };
    axios
      .post('/api/Bcomments', body)
      .then((response) => {
        // 새로운 댓글이 추가된 목록을 가져와서 상태를 업데이트합니다.
        axios
          .get('/api/Bcomments')
          .then((response) => {
            setComments(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        setValues('');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleCommentDelete = (id) => {
    axios.delete(`/api/Bcomments/${id}`).then((res) => {
      // console.log(res);
      setComments(comments.filter((comment) => comment.id !== id));
    });
  };
  useEffect(() => {
    axios.get('/api/Book').then((res) => {
      setBook(res);
    });
  }, []);
  return (
    <div class='row g-5'>
      <section>
        <form
          class='row g-3'
          id='comment-form'
          action='/comments/new'
          method='post'
        >
          <input
            type='hidden'
            name='_csrf'
            value='b6f4188d-b33d-4ef7-ae88-065721302f3a'
          />
          <input type='hidden' class='article-id' name='articleId' value='1' />
          <div class='col-md-9 col-lg-8'>
            <label for='comment-textbox' hidden>
              댓글
            </label>
            <textarea
              class='form-control'
              id='comment-textbox'
              placeholder='댓글 쓰기..'
              rows='3'
              required
              name='content'
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <div class='col-md-3 col-lg-4'>
            <label for='comment-submit' hidden>
              댓글 쓰기
            </label>
            <button
              class='btn btn-primary'
              onClick={handleCommentSubmit}
              type='submit'
            >
              쓰기
            </button>
          </div>
        </form>

        {comments.map((comment) => (
          <ul id='article-comments' class='row col-md-10 col-lg-8 pt-3'>
            <li>
              <form
                class='comment-form'
                action='/comments/2/delete'
                method='post'
              >
                <input
                  type='hidden'
                  name='_csrf'
                  value='b6f4188d-b33d-4ef7-ae88-065721302f3a'
                />
                <input
                  type='hidden'
                  class='article-id'
                  name='articleId'
                  value='1'
                />
                <div class='row'>
                  <div class='col-md-10 col-lg-9'>
                    <strong>Nickname</strong>
                    <small>
                      <time datetime='2023-03-26T16:47:57.669933'>
                        2023-03-26 16:47:57
                      </time>
                    </small>
                    <p>{comment.content}</p>
                  </div>
                  <div class='col-2 mb-3 align-self-center'>
                    <button
                      type='submit'
                      class='btn btn-outline-danger'
                      id='delete-comment-button'
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
}

export default BCommentForm;
