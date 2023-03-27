import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'layout/Layout';
import { Col, Container, Row, Card, ProgressBar } from 'react-bootstrap';
import profile from 'assets/images/profile.png';
import AttendanceList from './AttendanceList';
import data from 'mockAttend.json';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { useMembers } from 'hooks/useMembers';
import { getMeetingByNo, updateMemberStatus } from 'api';

function MeetingAdmin() {
  const { no } = useParams();
  const [meetinginfo, setMeetinginfo] = useState('');
  const members = useMembers(no);
  const now = 60;

  const handleClick = async (no, memberId, status) => {
    try {
      const body = { status: status };
      await updateMemberStatus({ no, memberId }, body);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMeetingByNo(parseInt(no)).then((meeting) => {
      setMeetinginfo(meeting);
    });
  }, []);

  return (
    <Layout className={styles.meeting}>
      <Container>
        <h5>모임장이 보는 페이지</h5>
        <h2>{meetinginfo.title}</h2>
        <Row>
          <Col>
            <Card>
              <Card.Header>{meetinginfo.hashtags}</Card.Header>
              <Card.Body>
                <Card.Text>{meetinginfo.introduce}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <p>{meetinginfo.location}</p>
          </Col>
        </Row>
        {members &&
          members.map((member, idx) => {
            console.log(member.imgpath.path);
            return (
              <Row key={idx}>
                <Col>
                  <div className={styles.member}>
                    <img src={`/${member.imgpath.path}`} alt='member' />
                    <div>
                      <p>이름: {member.name}</p>
                      <p>권한: {member.role}</p>
                      <p>상태: {member.status}</p>
                    </div>
                    <ProgressBar
                      className={styles.attendanceBar}
                      now={now}
                      label={`${now}%`}
                    />
                    {member.status === 'provisional_member' && (
                      <>
                        <button
                          onClick={() =>
                            handleClick(no, member.userId, 'full_member')
                          }
                        >
                          승인
                        </button>
                        <button
                          onClick={() =>
                            handleClick(no, member.userId, 'rejected_member')
                          }
                        >
                          승인거부
                        </button>
                      </>
                    )}
                    {member.status === 'full_member' && (
                      <button
                        onClick={() =>
                          handleClick(no, member.userId, 'rejected_member')
                        }
                      >
                        내보내기
                      </button>
                    )}
                    {member.status === 'rejected_member' && (
                      <span>탈퇴회원입니다</span>
                    )}
                  </div>
                </Col>
              </Row>
            );
          })}
        <p>출석부</p>
        <AttendanceList orders={data.order} />
      </Container>
    </Layout>
  );
}
export default MeetingAdmin;
