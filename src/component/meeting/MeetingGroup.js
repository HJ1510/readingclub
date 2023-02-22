import Board from "./board";
import Layout from "layout/Layout";
import { meetingList } from "MeetigData";
import MeetingCalender from "./MeetingCalender";
import { Col, Container, Row, Card } from "react-bootstrap";

function MeetingGroup() {
  return (
    <Layout>
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
            <p>참여자</p>
          </Col>
        </Row>
        <Row>
          <Board title="모임원 게시판" />
        </Row>
      </Container>
    </Layout>
  );
}
export default MeetingGroup;
