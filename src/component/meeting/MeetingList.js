import { Link } from "react-router-dom";
import { meetingList } from "MeetigData";
import { useEffect, useState } from "react";
import "assets/css/component/meeting/Meeting.css";
import meetingImgSample from "assets/images/meetingsample.jpg";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";

function MeetingList() {
  const [mockList, setMockList] = useState([]);

  useEffect(() => {
    setMockList(meetingList);
  }, []);

  return (
    <Container>
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
      <div>
        {mockList
          ? mockList.map((item, idx) => {
              return (
                <div key={idx}>
                  <Link to={`/meeting/${item.no}`}>
                    <Row className="meetingList">
                      <Col md={2}>
                        <img src={meetingImgSample} alt="sample" />
                      </Col>
                      <Col>
                        <p>이름:{item.title}</p>
                        <p>모임날짜: {item.firstDate}</p>
                        <p>정원: {item.maxNum}</p>
                        <p>모임지역: {item.location}</p>
                        <Link to={""}>
                          {item.hashTags.map((hashTag, idx) => {
                            return (
                              <p className="hashTag" key={idx}>
                                {hashTag}
                              </p>
                            );
                          })}
                        </Link>
                      </Col>
                    </Row>
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </Container>
  );
}
export default MeetingList;
