import Layout from "../../layout/Layout";
import Category from "./Category";
import MeetingCalender from "./MeetingCalender";
import LoginJoin from "./LoginJoin";
import MeetingList from "./MeetingList";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";

function Meeting() {
  return (
    <div className="Meeting">
      <Container fluid>
        <Layout>
          <h1>meeting</h1>
          <Row>
            <Col md={9}>{<MeetingCalender />}</Col>
            <Col md={3}>{<LoginJoin />}</Col>
          </Row>
          <Row className="Catergory">
            <Col md={9}>
              <Category />
            </Col>
            <Col md={3}>
              <input></input>
              <button>검색</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Dropdown className="sort">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  최신순
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">최신순</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">마감임박순</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <MeetingList />
              </div>
            </Col>
          </Row>
        </Layout>
      </Container>
    </div>
  );
}

export default Meeting;
