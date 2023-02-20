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
        <label htmlFor="meeting_title">모임명</label>
        <input type="text" placeholder="모임명" id="meeting_title"></input>
        <div>
          모임방식
          {meetingTypeList.map((item, idx) => (
            <div key={idx}>
              <input
                name="meetingType"
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
        </div>
        <div>
          카테고리
          {meetingCategoryList.map((item, idx) => (
            <div key={idx}>
              <input
                name="meetingCategory"
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
        </div>
        <div>
          <label htmlFor="hashtag">hashtag</label>
          <input type="text" placeholder="해시태그" id="hashtag" />
        </div>
        <div>
          <label htmlFor="location">장소</label>
          <input type="text" placeholder="장소" id="location" />
        </div>
        <div>
          <label htmlFor="max_num">정원</label>
          <input
            type="number"
            placeholder="2~10"
            id="max_num"
            min="2"
            max="10"
          />
        </div>
        <div>
          <label htmlFor="content">소개</label>
          <textarea name="content" id="content"></textarea>
        </div>
        <div>
          첫 모임일
          <input type="date" />
          <Calendar />
        </div>
        <div>
          <label>성별</label>
          <label htmlFor="sex">
            <input name="sex" value="male" type="radio" />
            남성
          </label>
          <label>
            <input name="sex" value="female" type="radio" />
            여성
          </label>
        </div>
        <div>
          <label>나이</label>
          <label htmlFor="age">
            <input name="age" value="true" type="radio" />
            공개
          </label>
          <label>
            <input name="age" value="false" type="radio" />
            비공개
          </label>
        </div>
      </form>
      <button type="submit">모임개설</button>
    </Layout>
  );
}

export default MeetingCreate;
