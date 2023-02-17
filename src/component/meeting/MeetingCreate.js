import Layout from "layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";
import { useCallback, useState } from "react";

// // const checkboxList = ["글쓰기", "토론"];
const meetingTypeList = ["글쓰기", "토론"];
const meetingCategoryList = ["소설", "시", "인문"];

function MeetingCreate() {
  const [isCheckedType, setIsCheckedType] = useState("false");
  const [isCheckedCategory, setIsCheckedCategory] = useState("false");

  return (
    <Layout>
      <Row>
        <Col>
          <input type="text" placeholder="모임명"></input>
        </Col>
      </Row>
      <form /*onSubmit=""*/>
        <Row>
          <Col>
            모임방식
            {meetingTypeList.map((item, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  id={item}
                  checked={true}
                  // checked="" onChange=""
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </Col>
        </Row>
      </form>
      <Row>
        <Col>
          카테고리
          {meetingCategoryList.map((item, idx) => (
            <div key={idx}>
              <input
                type="checkbox"
                id={item}
                // checked="" onChange=""
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
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
        <Col>소개</Col>
      </Row>
      <Row>
        <Col>
          < />
        </Col>
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
