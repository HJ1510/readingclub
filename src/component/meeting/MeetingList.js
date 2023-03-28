import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMeetings } from 'api';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import styles from 'assets/css/component/meeting/Meeting.module.css';

function MeetingList({ title, searchMeetings, keyword }) {
  // console.log(searchMeetings);
  // console.log(keyword);
  const [meetingItems, setmeetingItems] = useState([]);
  const [order, setOrder] = useState('autoIncrementField');

  const handleAutoIncrementFieldClick = () => setOrder('autoIncrementField');
  const handleFirstDateClick = () => setOrder('firstDate');

  const sortedItems = meetingItems.sort((a, b) => {
    if (order === 'autoIncrementField') {
      return b.autoIncrementField - a.autoIncrementField;
    } else if (order === 'firstDate') {
      return new Date(a.order[0].date) - new Date(b.order[0].date);
    }
  });

  // node api
  const listLoad = async (search) => {
    const { meetings } = await getMeetings();
    // console.log(meetings);
    const sortedMeetings = meetings.sort(
      (a, b) => b.autoIncrementField - a.autoIncrementField
    );
    setmeetingItems(sortedMeetings);
  };

  useEffect(() => {
    listLoad();
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <Button
          variant='outline-secondary'
          size='sm'
          onClick={handleAutoIncrementFieldClick}
          style={{ marginLeft: '170px' }}
        >
          최신순
        </Button>
        <Button
          variant='outline-secondary'
          size='sm'
          onClick={handleFirstDateClick}
          style={{ marginRight: '200px' }}
        >
          최근날짜순
        </Button>
      </div>
      <div>
        {keyword
          ? // 검색 결과 렌더링
            searchMeetings.map((meeting, idx) => {
              return (
                <Container className={styles.meetingList} key={idx}>
                  <Link
                    to={`/meeting/info/${meeting.autoIncrementField}`}
                    className={styles.meetings}
                  >
                    <Row>
                      <Col md={1}></Col>
                      <Col md={2}>
                        <img src={meeting.imgFile} alt='sample' />
                      </Col>
                      <Col md={1}></Col>
                      <Col className={styles.meetingItem}>
                        <h5 className={styles.meetingTitle}>{meeting.title}</h5>
                        <p className={styles.meetingDetail}>
                          첫모임날짜: {meeting.order[0].date}/ 정원:{' '}
                          {meeting.maxNum} / 모임지역:{' '}
                          {meeting.order[0].location}
                        </p>
                        {/* <Link to={""}> */}
                        {meeting.hashtags.map((hashTag, idx) => {
                          return (
                            <p className={styles.hashTag} key={idx}>
                              {hashTag}
                            </p>
                          );
                        })}
                        {/* </Link> */}
                        <p>모임 개설자: {meeting.creatorName}</p>
                      </Col>
                    </Row>
                  </Link>
                </Container>
              );
            })
          : // 기본 데이터 렌더링
            meetingItems.map((item, idx) => {
              return (
                <Container className={styles.meetingList} key={idx}>
                  <Link
                    to={`/meeting/info/${item.autoIncrementField}`}
                    className={styles.meetings}
                  >
                    <Row>
                      <Col md={1}></Col>
                      <Col md={2}>
                        <img src={item.imgFile} alt='sample' />
                      </Col>
                      <Col md={1}></Col>
                      <Col className={styles.meetingItem}>
                        <h5 className={styles.meetingTitle}>{item.title}</h5>
                        <p className={styles.meetingDetail}>
                          첫모임날짜: {item.order[0].date}/ 정원: {item.maxNum}{' '}
                          / 모임지역: {item.order[0].location}
                        </p>
                        {/* <Link to={""}> */}
                        {item.hashtags.map((hashTag, idx) => {
                          return (
                            <p className={styles.hashTag} key={idx}>
                              {hashTag}
                            </p>
                          );
                        })}
                        {/* </Link> */}
                        <p>모임 개설자: {item.creatorName}</p>
                      </Col>
                    </Row>
                  </Link>
                </Container>
              );
            })}
      </div>
    </div>
  );
}
export default MeetingList;
