import Layout from 'layout/Layout';
import '../../assets/css/component/note/Booknote.css';
// import "../../assets/css/component/note/Booknote.module.css";
import Chartdata from './Chartdata';
import { useState, useEffect } from 'react';
import Chart from './Chart';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './Search';
import Progress from './Progress';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { CircularProgressbar } from 'react-circular-progressbar';
import styled, { keyframes } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Heatmap from './Heatmap';
import { useDispatch } from 'react-redux';
import { auth } from 'actions/user_action';

const progressBarAnimation = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: ${(props) =>
      ((100 - props.value) / 100) * props.circumference};
  }
`;

const StyledCircularProgressbar = styled(CircularProgressbar)`
  width: 120px;
  height: 120px;

  .CircularProgressbar-path {
    stroke: #3e98c7;
    stroke-linecap: round;
    stroke-dasharray: ${(props) => props.circumference};
    animation: ${progressBarAnimation} 1s linear forwards;
  }
`;

function Booknote() {
  const [target, setTarget] = useState('');

  let [countspan, setcountspan] = useState(5);
  const [percentage, setPercentage] = useState(0);

  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [notelist, setNoteList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleDelete = (no) => {
    axios
      .delete(`/api/notelist/${no}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      .then((res) => {
        if (res.data.success) {
          setNoteList(notelist.filter((notelist) => notelist.id !== no));
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    dispatch(auth()).then((response) => {
      const { _id } = response.payload;
      axios
        .get(`/api/user/${_id}/bookgoal`)
        .then((res) => {
          setId(res.data);
          setPercentage(
            Math.round((res.data.postCount / res.data.bookGoal) * 100)
          );
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, [target]);

  return (
    <Layout>
      <div className='main'>
        <div className='noteNav' style={{ display: '' }}>
          <Link to={'/booknote'}>
            <Button className='Header-button' variant='secondary'>
              나의 노트
            </Button>
          </Link>
          <Link to={'/booknote/notelist'}>
            <Button className='Header-button' variant='secondary'>
              노트리스트
            </Button>
          </Link>
          <Link to={'/note/notebookmark'}>
            <Button className='Header-button' variant='secondary'>
              저장노트
            </Button>
          </Link>
        </div>

        <div className='booknote'>
          <div className='booknotelay'>
            <div className='booknote-sidebar'>
              <div className='sidebar-card'></div>
              <img
                style={{ height: '300px', display: 'flex' }}
                className='avatar'
                src='https://avatars.githubusercontent.com/u/114986610?v=4'
              ></img>
              <div className='cardname'>
                <h1 className='carduser'>SunMoo</h1>
              </div>
              <div className='cardusercolum'>
                <Link
                  style={{
                    color: 'var(--color-fg-muted) !important',
                    textDecorationLine: 'none',
                  }}
                  to='https://github.com/YuumiNam?tab=followers'
                >
                  followers{' '}
                </Link>
                <span
                  onClick={() => {
                    setcountspan(countspan + 1);
                  }}
                >
                  🧡{countspan}
                </span>
                .
                <Link
                  style={{
                    color: 'var(--color-fg-muted) !important',
                    textDecorationLine: 'none',
                  }}
                  to='https://github.com/YuumiNam?tab=following'
                >
                  following{' '}
                </Link>
                <span
                  onClick={() => {
                    setcountspan(countspan + 1);
                  }}
                >
                  🧡{countspan}
                </span>
                <br />
                <Link
                  to='/booknote/writebook'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  노트 작성하기 📗
                </Link>
                <Link to='#' onClick={handleModalOpen}>
                  목표도서 설정하기
                </Link>
                <Modal show={showModal} onHide={handleModalClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>목표도서 설정하기</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Progress target={target} setTarget={setTarget}></Progress>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={handleModalClose}>
                      닫기
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>

            <div className='booknote-mian' style={{ height: '500px' }}>
              <div
                className='bookcontainer'
                style={{ display: 'flex', gap: '15px' }}
              >
                <div
                  style={{
                    width: '400px',
                    height: '100%',
                    marginTop: '20px',
                    marginBottom: '20px',
                  }}
                >
                  <Chart></Chart>
                </div>
                {id && (
                  <label
                    className='box-body'
                    style={{ width: '400px', height: '100%', display: 'block' }}
                  >
                    <h2
                      style={{
                        textAlign: 'center',
                        height: '50px',
                        margin: '10px',
                      }}
                    >
                      목표 도서수 {id.bookGoal} books
                    </h2>
                    <div style={{ width: '100%' }}>
                      <div className='d-flex justify-content-center align-items-center'>
                        <StyledCircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                        <div style={{ width: '400px' }}>
                          <span style={{ marginLeft: '10px' }}>
                            {`현재 권수: ${id.postCount} books`}
                            <br />
                            <span style={{ marginLeft: '10px' }}>
                              {`남은 권수: ${id.bookGoal - id.postCount} books`}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                )}
              </div>

              <div className='glassbox'>
                <Heatmap></Heatmap>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='booknote-under'>
            <div className='booknote-select'>
              <SearchBar />
            </div>
          </div>
        </div>
        <div className='page-nav'>
          <nav
            aria-label='Page navigation example'
            style={{ display: 'inline-block' }}
          >
            <ul className='pagination'>
              <li className='page-item'>
                <a className='page-link' href='#' aria-label='Previous'>
                  <span aria-hidden='true'>&laquo;</span>
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  1
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  2
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#'>
                  3
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href='#' aria-label='Next'>
                  <span aria-hidden='true'>&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
}
export default Booknote;
