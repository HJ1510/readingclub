import Layout from "layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";
import { useCallback, useState } from "react";

const checkboxList = ["글쓰기", "토론"];

function MeetingCreate() {
  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value, isChecked) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      return;
    }
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      return;
    }

    return;
  };

  const checkedHandler = (e, value) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
    console.log(`checkedHandler+${(value, e.target.checked)}`);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("checkedList:", checkboxList);
    },
    [checkboxList]
  );

  return (
    <Layout>
      <Row>
        <Col>
          <input type="text" placeholder="모임명"></input>
        </Col>
      </Row>
      <form onSubmit={onSubmit}>
        <Row>
          {checkboxList.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                id={item}
                checked={checkboxList.includes(item)} // 여기부터 봐야할것
                onChange={(e) => checkedHandler(e, item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </Row>
      </form>
      <Row>
        <Col>카테고리</Col>
      </Row>
      <Row>
        <Col>해시태크</Col>
      </Row>
      <Row>
        <Col>장소</Col>
      </Row>
      <Row>
        <Col>인원</Col>
      </Row>
      <Row>
        <Col>소개</Col>
      </Row>
      <Row>
        <Col>일정</Col>
      </Row>
      <Row>
        <Col>성별 공개 여부</Col>
      </Row>
      <Row>
        <Col>나이 공개 여부</Col>
      </Row>

      <Row>
        <Col>
          <button>모임개설</button>
        </Col>
      </Row>
    </Layout>
  );
}

export default MeetingCreate;
