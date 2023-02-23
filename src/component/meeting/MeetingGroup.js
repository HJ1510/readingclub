import Board from "./board";
import Layout from "layout/Layout";
import { meetingList } from "MeetigData";
import MeetingCalender from "./MeetingCalender";
import { Col, Container, Row, Card, ProgressBar } from "react-bootstrap";
import profile from "assets/images/profile.png";

function MeetingGroup() {
  const now = 60;
  return (
    <Layout className="meeting">
      <Container>
        <h5>모임원들이 보는 모임페이지</h5>
        <h2>모임명</h2>
        <Row>
          <Col>
            <MeetingCalender />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>#... #...</Card.Header>
              <Card.Body>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <p>지역</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="member">
              <img src={profile} />
              참여자1
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
            </div>
            <div className="member">
              <img src={profile} />
              참여자2
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
            </div>
            <div className="member">
              <img src={profile} />
              참여자3
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
            </div>
            <div className="member">
              <img src={profile} />
              참여자4
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
            </div>
            <div className="member">
              <img src={profile} />
              참여자5
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
            </div>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Board title="모임원 게시판" />
        </Row>
      </Container>
    </Layout>
  );
}
export default MeetingGroup;
