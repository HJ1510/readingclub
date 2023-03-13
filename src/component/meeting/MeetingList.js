import { Link } from "react-router-dom";
import { meetingList } from "MeetigData";
import { useEffect, useState } from "react";
import meetingImgSample from "assets/images/meetingsample.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "assets/css/component/meeting/Meeting.module.css";

function MeetingList({ title }) {
  const [mockList, setMockList] = useState([]);

  useEffect(() => {
    setMockList(meetingList);
  }, []);

  return (
    <div>
      <div>
        <p>{title}</p>
        {mockList
          ? mockList.map((item, idx) => {
              return (
                <Container className={styles.meetingList} key={idx}>
                  <Link
                    to={`/meeting/info/${item.no}`}
                    className={styles.meetings}
                  >
                    <Row>
                      <Col md={1}></Col>
                      <Col md={2}>
                        <img src={meetingImgSample} alt="sample" />
                      </Col>
                      <Col md={1}></Col>
                      <Col className={styles.meetingItem}>
                        <h5 className={styles.meetingTitle}>{item.title}</h5>

                        <p className={styles.meetingDetail}>
                          모임날짜: {item.firstDate} / 정원: {item.maxNum} /
                          모임지역: {item.location} / 개설일: {item.createdAt}
                        </p>

                        {/* <Link to={""}> */}
                        {item.hashTags.map((hashTag, idx) => {
                          return (
                            <p className={styles.hashTag} key={idx}>
                              {hashTag}
                            </p>
                          );
                        })}
                        {/* </Link> */}
                      </Col>
                    </Row>
                  </Link>
                </Container>
              );
            })
          : ""}
      </div>
    </div>
  );
}
export default MeetingList;
