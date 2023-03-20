import React, { useState } from 'react';
import Layout from 'layout/Layout';
import { meetingList } from 'MeetigData';
import { Col, Container, Row, Card, ProgressBar } from 'react-bootstrap';
import profile from 'assets/images/profile.png';
import AttendanceList from './AttendanceList';
import data from 'mockAttend.json';
import styles from 'assets/css/component/meeting/Meeting.module.css';

function MeetingAdmin() {
  const now = 60;

  return (
    <Layout className='meeting'>
      <Container>
        <h5>모임장이 보는 페이지</h5>
        <h2>모임명</h2>
        <Row>
          <Col>
            <Card>
              <Card.Header>#... #...</Card.Header>
              <Card.Body>
                <Card.Text>소개글</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <p>지역</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='member'>
              <img src={profile} />
              참여자1
              <ProgressBar
                className='attendanceBar'
                now={now}
                label={`${now}%`}
              />
              <button>승인</button>
              <button>승인거부</button>
            </div>
            <div className='member'>
              <img src={profile} />
              참여자2
              <ProgressBar
                className='attendanceBar'
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
            <div className='member'>
              <img src={profile} />
              참여자3
              <ProgressBar
                className='attendanceBar'
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
            <div className='member'>
              <img src={profile} />
              참여자4
              <ProgressBar
                className='attendanceBar'
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
            <div className='member'>
              <img src={profile} />
              참여자5
              <ProgressBar
                className='attendanceBar'
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
          </Col>
        </Row>
        <p>출석부</p>
        <AttendanceList orders={data.order} />
      </Container>
    </Layout>
  );
}
export default MeetingAdmin;
