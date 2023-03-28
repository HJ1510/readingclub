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
  console.log(members);

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

        <div
          className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'
          style={{ marginTop: '20px', marginBottom: '30px' }}
        >
          {members &&
            members.map((member, idx) => {
              return (
                <div className='col' key={idx}>
                  <div className='card shadow-sm'>
                    {member.imgpath.path ? (
                      <img
                        style={{ height: '200px' }}
                        src={`/${member.imgpath.path}`}
                        alt='member'
                      />
                    ) : (
                      <img src={profile} alt='profile' />
                    )}

                    <strong style={{ margin: '10px' }} class=' text-success'>
                      {' '}
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
                        {member.status === 'provisional_member' && (
                          <div className='btn-group'>
                            <button
                              type='button'
                              className='btn btn-sm btn-outline-secondary'
                              onClick={() =>
                                handleClick(no, member.userId, 'full_member')
                              }
                            >
                              승인
                            </button>
                            <button
                              type='button'
                              className='btn btn-sm btn-outline-secondary'
                              onClick={() =>
                                handleClick(
                                  no,
                                  member.userId,
                                  'rejected_member'
                                )
                              }
                            >
                              거부
                            </button>
                          </div>
                        )}
                        {member.status === 'full_member' && (
                          <button
                            className='btn btn-sm btn-outline-secondary'
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
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </Layout>
  );
}
export default MeetingAdmin;
