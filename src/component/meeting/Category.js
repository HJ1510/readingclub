import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";

function Category() {
  const categorys = ["건강/취미", "경제경영", "공무원수험서", "과학", "달력"];

  return (
    <Row>
      <Col>
        <Form>
          {["checkbox"].map((type) => (
            <div key={type} className="mb-3">
              {categorys.map(function (category) {
                return <Form.Check inline label={category} key={category} />;
              })}
            </div>
          ))}
        </Form>
      </Col>
      <Col>
        <input></input>
        <button>검색</button>
      </Col>
    </Row>
  );
}

export default Category;
