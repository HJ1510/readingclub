import Layout from "layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";
import { useCallback, useState } from "react";

// const checkboxList = ["글쓰기", "토론"];
const meetingTypeList = ["글쓰기", "토론"];
const meetingCategoryList = ["소설", "시", "인문"];

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
      console.log("meetingTypeList:", meetingTypeList);
      console.log("meetingCategoryList:", meetingCategoryList);
    },
    [meetingTypeList, meetingCategoryList]
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
          {meetingTypeList.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                id={item}
                checked={meetingTypeList.includes(item)} // 여기부터 봐야할것
                onChange={(e) => checkedHandler(e, item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </Row>
      </form>
      <Row>
        <Col>
          {meetingCategoryList.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                id={item}
                checked={meetingCategoryList.includes(item)} // 여기부터 봐야할것
                onChange={(e) => checkedHandler(e, item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
          <input type="checkbox"></input>
          <label>카테고리</label>
          <input type="checkbox"></input>
          <label>카테고리</label>
          <input type="checkbox"></input>
          <label>카테고리</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="해시태그" />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="장소" />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="인원" />
        </Col>
      </Row>
      <Row>
        <Col>
          <textarea name="content" placeholder="내용을 입력하세요" />
        </Col>
      </Row>
      <Row>
        <Col>일정</Col>
      </Row>
      <Row>
        <Col>
          성별
          <input type="checkbox"></input>
          <label>공개</label>
          <input type="checkbox"></input>
          <label>비공개</label>
        </Col>
      </Row>
      <Row>
        <Col>
          나이
          <input type="checkbox"></input>
          <label>공개</label>
          <input type="checkbox"></input>
          <label>비공개</label>
        </Col>
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
