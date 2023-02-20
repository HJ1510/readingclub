import Layout from "layout/Layout";
import { useState } from "react";

function MeetingCreate2() {
  // 초기값 세팅
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [location, setLocation] = useState("");
  const [maxNum, setMaxNum] = useState("");
  const [content, setContent] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");

  // 오류메세지
  const [titleMessage, setTitleMessage] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const [hashtagMessage, setHashtagMessage] = useState("");
  const [locationMessage, setLocationMessage] = useState("");
  const [maxNumMessage, setMaxNumMessage] = useState("");
  const [contentMessage, setContentMessage] = useState("");
  const [sexMessage, setSexMessage] = useState("");
  const [ageMessage, setAgeMessage] = useState("");

  // 유효성 검사
  const [isTitle, setIsTitle] = useState(false);
  const [isType, setIsType] = useState(false);
  const [isHashtag, setIsHashtag] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isMaxNum, setIsMaxNum] = useState(false);
  const [isContent, setIsContent] = useState(false);
  const [isSex, setIsSex] = useState(false);
  const [isAge, setIsAge] = useState(false);

  return (
    <Layout>
      <div className="">
        <label htmlFor="meeting_title">모임명</label>
        <input
          type="text"
          id="meeting_title"
          name="meeting_title"
          value={""}
          onChange={""}
          placeholder="모임명"
        />
      </div>
      <div>
        <label htmlFor="meeting_type">모임 방식</label>
        <label>
          글쓰기
          <input
            type="checkbox"
            id="meeting_type"
            name="meeting_type"
            value="writing"
            onChange={""}
          />
        </label>
        <label>
          토론
          <input
            type="checkbox"
            id="meeting_type"
            name="meeting_type"
            value="discussion"
            onChange={""}
          />
        </label>
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
        <input type="number" placeholder="2~10" id="max_num" min="2" max="10" />
      </div>
      <div>
        <label htmlFor="content">소개</label>
        <textarea name="content" id="content"></textarea>
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
    </Layout>
  );
}

export default MeetingCreate2;
