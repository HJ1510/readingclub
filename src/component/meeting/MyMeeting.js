import Layout from 'layout/Layout';
import { Col, Row } from 'react-bootstrap';
import MeetingCalender from './MeetingCalender';
import { useEffect, useState } from 'react';
import { meetingList } from 'MeetigData';
import MyMeetingList from './MyMeetingList';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';

function MyMeeting() {
  // const [mockList, setMockList] = useState([]);

  // useEffect(() => {
  //   setMockList(meetingList);
  // }, []);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(auth()).then((response) => {
      const { _id } = response.payload;
      console.log(_id);
    });
  }, []);

  return (
    <Layout>
      <div className={styles.MyMeeting}>
        <Row>
          <Col md={7}>
            <MeetingCalender className={styles.Calender} />
          </Col>
          <Col md={5}>
            <MyMeetingList />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default MyMeeting;
