import Board from './board';
import Layout from 'layout/Layout';
import MeetingCalender from './MeetingCalender';
import { Col, Container, Row, Card, ProgressBar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Button } from 'react-bootstrap';
import ChatModal from './ChatModal';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { useMembers } from 'hooks/useMembers';
import { useMeetingInfo } from 'hooks/useMeetingInfo';
import { getOrdersByNo } from 'api';
import styles from 'assets/css/component/meeting/Meeting.module.css';

function MeetingGroup() {
  const now = 60;
  const { no } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const members = useMembers(no);
  const meetingInfo = useMeetingInfo(no);
  // console.log(meetingInfo);
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   socket.on("chat message", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });
  // }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handlechat = () => {
    navigate(`/jo/${no}`);
  };

  return (
    <Layout className={styles.meeting}>
      <Container>
        <Row>
          <section className='py-5 text-center container'>
            <div className='row py-lg-5'>
              <div className='col-lg-6 col-md-8 mx-auto'>
                <h1 className='fw-light'>{meetingInfo.title}</h1>
                <p className='lead text-muted'>{meetingInfo.introduce}</p>

                {meetingInfo.order?.map((order) => (
                  <p className='lead text-muted'>일정 : {order.date}</p>
                ))}
                <p className='lead text-muted'>장소 : {meetingInfo.location}</p>
                <p>
                  <Button onClick={() => handlechat(no)}>채팅 열기</Button>
                </p>
              </div>
            </div>
          </section>
          <Col>
            <MeetingCalender
              apiFunction={getOrdersByNo}
              no={no}
              title='groupScheduleCalendar'
            />
          </Col>
        </Row>
        <h1 style={{ margin: '20px' }}>Members</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'>
          {members &&
            members.map((member, idx) => {
              return (
                <div className='col' key={idx}>
                  <div className='card shadow-sm'>
                    <img
                      style={{ height: '200px' }}
                      src={`/${member.imgpath.path}`}
                      alt='member'
                    />
                    <strong style={{ margin: '10px' }} class=' text-success'>
                      {member.role}
                    </strong>
                    <div class='card-body'>
                      <strong
                        className='card-text'
                        style={{ fontSize: '1.5em' }}
                      >
                        {member.name}
                      </strong>
                      <p>{member.status}</p>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='btn-group'>
                          {/* <button type="button" className="btn btn-sm btn-outline-secondary">승인</button>
               <button type="button" className="btn btn-sm btn-outline-secondary">거부</button> */}
                        </div>
                        <small className='text-muted'>
                          {meetingInfo.createdAt}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Row>
          <Board title='meetingBoard' />
        </Row>
      </Container>
    </Layout>
  );
}
export default MeetingGroup;
