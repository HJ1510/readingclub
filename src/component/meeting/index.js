import Layout from '../../layout/Layout';
import Category from './Category';
import MeetingCalender from './MeetingCalender';
import UserForm from './UserForm';
import MeetingList from './MeetingList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { getAllOrders } from 'api';
import { useState } from 'react';

function Meeting() {
  const [searchMeetings, setSearchMeetings] = useState([]);
  const [keyword, setKeyword] = useState('');
  console.log(searchMeetings);

  const handleMeetingsChange = (meetings) => {
    setSearchMeetings(meetings);
  };

  return (
    <div className={styles.Meeting}>
      <Layout>
        <Row>
          <Col md={9}>
            {
              <MeetingCalender
                apiFunction={getAllOrders}
                title='allScheduleCalendar'
              />
            }
          </Col>
          <Col md={2} className={styles.UserForm}>
            <UserForm inLogin='True' />
          </Col>
        </Row>
        <Row className={styles.Category}>
          <Col>
            <Category
              onMeetingsChange={handleMeetingsChange}
              onKeywordChange={setKeyword}
            />
          </Col>
        </Row>
        <Row>
          <Col className={styles.MeetingList}>
            <MeetingList
              title='wholeMeeting'
              searchMeetings={searchMeetings}
              keyword={keyword}
            />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default Meeting;
