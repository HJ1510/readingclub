import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";
import { Dropdown } from "react-bootstrap";

function Category() {
  const categorys = ["건강/취미", "경제경영", "공무원수험서", "과학", "달력"];

  return (
    <Row>
      <Col md={6}>
        <Form>
          {["checkbox"].map((type) => (
            <div key={type} className="mb-3">
              {categorys.map(function (category) {
                return (
                  <Form.Check
                    inline
                    label={category}
                    key={category}
                  />
                );
              })}
            </div>
          ))}
        </Form>
      </Col>
      <Col md={3} className="meetingSearch">
        <input></input>
        <button>검색</button>
      </Col>
      <Col md={1}>
        <Dropdown className="meetingSort">
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
  );
}

export default Category;
