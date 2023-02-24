import Layout from "layout/Layout";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "assets/css/component/meeting/Meeting.css";
import axios from "axios";

function MeetingCreate() {
  const [values, setValues] = useState({
    title: "",
    maxNum: 0,
    types: { writing: false, discussion: false },
    hashtags: [],
    location: "",
    category: { novel: false, poem: false, science: false },
    genderOpened: "",
    ageOpened: "",
    introduce: "",
  });

  const handleChange = (e) => {
    const { name, value, id } = e.target;

    if (id === "types") {
      setValues((prevValues) => ({
        ...prevValues,
        types: {
          ...prevValues.types,
          [name]: !prevValues.types[name],
        },
      }));
    } else if (id === "category") {
      setValues((prevValues) => ({
        ...prevValues,
        category: {
          ...prevValues.category,
          [name]: !prevValues.category[name],
        },
      }));
    } else if (name === "maxNum") {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: Number(value) || 0,
      }));
    } else if (name === "hashtags") {
      const hashtags = value.split(","); // 입력된 값을 쉼표로 분리하여 배열로 변환
      setValues((prevValues) => ({ ...prevValues, [name]: hashtags }));
    } else {
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (name === "") {
    //   alert("모임명을 작성해주세요");
    //   return;
    // }
    // if (capacity === "") {
    //   alert("모임정원을 지정해주세요");
    //   return;
    // }
    // if (location === "") {
    //   alert("지역을 적어주세요");
    //   return;
    // }
    // if (genderOpened === "") {
    //   alert("성비공개여부는 필수입력사항입니다");
    //   return;
    // }
    // if (content === "") {
    //   alert("모임 소개글을 작성해주세요");
    //   return;
    // }
    console.log(values);

    // const formData = new FormData();
    // formData.append("meetingTitle", values.title);
    // formData.append("maxNum", values.maxNum);
    // formData.append("writing", values.types.writing);
    // formData.append("discussion", values.types.discussion);
    // formData.append("hashtags", values.hashtags.join(","));
    // formData.append("genderOpened", values.genderOpened);

    const form = e.target; // 이벤트가 발생한 폼 요소
    console.log(form);
    const formData = new FormData(form); // 폼 데이터 추출

    fetch("https://jsonplaceholder.typicode.com/posts", {
      // 서버의 API 엔드포인트 지정
      method: "POST", // HTTP 메소드 설정
      body: formData, // 전송할 데이터 설정
    })
      .then((response) => response.json()) // 서버 응답 데이터를 JSON 형식으로 파싱
      .then((data) => {
        console.log("서버 응답 데이터:", data); // 응답 데이터 콘솔에 출력
        form.reset(); // 폼 초기화
      })
      .catch((error) => console.error("에러 발생:", error)); // 네트워크 에러 처리

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit} className="meetingCreateForm">
        <Form.Group className="mb-3" controlId="meetingTitle">
          <Form.Label>모임명</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="모임명"
            value={values.title}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">모임명을 적어주세요</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="meetingMaxNum">
          <Form.Label>정원</Form.Label>
          <Form.Control
            name="maxNum"
            type="number"
            min="2"
            max="10"
            placeholder="2~10"
            value={values.maxNum}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            정원은 숫자로만 입력 가능하며, 2명~10명 사이입니다
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="meetingType">
          모임방식
          <div key={`inline-checkbox`} className="mb-3">
            <Form.Check
              inline
              label="글쓰기"
              name="writing"
              type="checkbox"
              id="types"
              value={values.types.writing}
              checked={values.types.writing}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="토론"
              name="discussion"
              type="checkbox"
              id="types"
              value={values.types.discussion}
              checked={values.types.discussion}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          카테고리
          <div key={`inline-checkbox`} className="mb-3">
            <Form.Check
              inline
              label="소설"
              name="novel"
              type="checkbox"
              id="category"
              checked={values.category.novel}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="시"
              name="poem"
              type="checkbox"
              id="category"
              checked={values.category.poem}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="과학"
              name="science"
              type="checkbox"
              id="category"
              checked={values.category.science}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="hashtags">
          <Form.Label>해시태그</Form.Label>
          <Form.Control
            name="hashtags"
            type="text"
            value={values.hashtags}
            placeholder="#"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            해시태그는 ,(쉼표)로 구분합니다
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="meetingTitle">
          <Form.Label>지역</Form.Label>
          <Form.Control
            name="location"
            type="text"
            placeholder="지역"
            value={values.location}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            모임이 열릴 지역을 적어주세요
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="gender">
          성비
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="공개"
              name="genderOpened"
              type="radio"
              id="genderOpened"
              value="true"
              checked={values.genderOpened === "true"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="비공개"
              name="genderOpened"
              type="radio"
              id="genderOpened"
              value="false"
              checked={values.genderOpened === "false"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ages">
          연령비
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="공개"
              name="ageOpened"
              type="radio"
              id="ageOpened"
              value="true"
              checked={values.ageOpened === "true"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="비공개"
              name="ageOpened"
              type="radio"
              id="ageOpened"
              value="false"
              checked={values.ageOpened === "false"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="meetingTitle">
          <Form.Label>모임소개</Form.Label>
          <Form.Control
            name="introduce"
            as="textarea"
            type="text"
            placeholder="모임 소개"
            value={values.introduce}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            모임 소개글을 상세히 적어주세요
          </Form.Text>
        </Form.Group>

        <Form.Group>일정</Form.Group>
        <Button variant="outline-secondary" type="submit">
          제출
        </Button>
      </Form>
    </Layout>
  );
}

export default MeetingCreate;
