import Layout from "layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";
import "assets/css/Calendar.css";
import { useCallback, useState } from "react";
import { Calendar } from "react-calendar";

const meetingTypeList = ["글쓰기", "토론"];
const meetingCategoryList = ["소설", "시", "인문"];

function MeetingCreate() {
  const [meetingType, setMeetingType] = useState([]);
  const [meetingCategory, setMeetingCategory] = useState([]);

  const onMeetingTypeChecked = (selected) => {
    setMeetingType(selected);
    console.log("meetingCategory" + meetingType);
  };

  const onMeetingCategoryChecked = (selected) => {
    setMeetingCategory(selected);
    console.log("meetingCategory" + meetingCategory);
  };

  return (
    <Layout>
      <form /*onSubmit=""*/>
        <Row>
          <Col>
            <input type="text" placeholder="모임명"></input>
          </Col>
        </Row>

        <Row>
          <Col>
            모임방식
            {meetingTypeList.map((item, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  id={item}
                  checked={meetingType?.includes(item)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onMeetingTypeChecked([...meetingType, item]);
                    } else {
                      onMeetingTypeChecked(
                        meetingType.filter((_item) => _item !== item)
                      );
                    }
                  }}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </Col>
        </Row>

        <Row>
          <Col>
            카테고리
            {meetingCategoryList.map((item, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  id={item}
                  checked={meetingCategory?.includes(item)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onMeetingCategoryChecked([...meetingCategory, item]);
                    } else {
                      onMeetingCategoryChecked(
                        meetingCategory.filter((_item) => _item !== item)
                      );
                    }
                  }}
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
            <Calendar />
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
      </form>

      <Row>
        <Col>
          <button>모임개설</button>
        </Col>
      </Row>
    </Layout>
  );
}

export default MeetingCreate;
