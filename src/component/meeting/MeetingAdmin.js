import Layout from "layout/Layout";
import { meetingList } from "MeetigData";
import {
  Col,
  Container,
  Row,
  Card,
  ProgressBar,
  Table,
  Button,
} from "react-bootstrap";
import profile from "assets/images/profile.png";

function MeetingAdmin() {
  const now = 60;
  return (
    <Layout className="meeting">
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
            <div className="member">
              <img src={profile} />
              참여자1
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
            <div className="member">
              <img src={profile} />
              참여자2
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
            <div className="member">
              <img src={profile} />
              참여자3
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
            <div className="member">
              <img src={profile} />
              참여자4
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
            <div className="member">
              <img src={profile} />
              참여자5
              <ProgressBar
                className="attendanceBar"
                now={now}
                label={`${now}%`}
              />
              <button>내보내기</button>
            </div>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>관리자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4</td>
              <td>
                
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Button variant="light">O</Button>{" "}
                <Button variant="light">X</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Button variant="light">O</Button>{" "}
                <Button variant="light">X</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Button variant="light">O</Button>{" "}
                <Button variant="light">X</Button>{" "}
              </td>
            </tr>
            <tr>
              <td>합산</td>
              <td>Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
}
export default MeetingAdmin;
