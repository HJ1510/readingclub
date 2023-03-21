import Layout from 'layout/Layout';
import { Col, Row } from 'react-bootstrap';
import MeetingCalender from './MeetingCalender';
import { useEffect, useState } from 'react';
import { meetingList } from 'MeetigData';
import MyMeetingList from './MyMeetingList';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';
import { getUserMeetings } from 'api';

function MyMeeting() {
  const [meeting, setMeeting] = useState([]);
  const dispatch = useDispatch();

  const listLoad = async (id) => {
    const loadMeetings = await getUserMeetings(id);
    console.log(loadMeetings);

    const meetings = loadMeetings.map((meeting) => ({
      title: meeting.title,
      role: meeting.members[0].role,
      no: meeting.autoIncrementField,
    }));
    setMeeting(meetings);
  };

  useEffect(() => {
    dispatch(auth()).then((response) => {
      const { _id } = response.payload;
      listLoad(_id);
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
            <MyMeetingList meeting={meeting} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default MyMeeting;
