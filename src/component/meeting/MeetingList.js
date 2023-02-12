import { Link } from "react-router-dom";
import { meetingList } from "MeetigData";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function MeetingList() {
  const [mockList, setMockList] = useState([]);

  useEffect(() => {
    setMockList(meetingList);
  }, []);

  return (
    <>
      <div>모임목록</div>
      {mockList.map((item, index) => {
        <Row xs={1} md={2} className="g-4" key={index}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>;
      })}

      <div>
        {mockList
          ? mockList.map((item, idx) => {
              return (
                <div key={idx}>
                  <Link to={`/meeting/${item.no}`}>
                    {item.title}/ 정원 {item.maxNum}
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
export default MeetingList;
