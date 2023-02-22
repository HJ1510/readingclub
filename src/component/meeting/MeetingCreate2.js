import Layout from "layout/Layout";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "assets/css/component/meeting/Meeting.css";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function MeetingCreate2() {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [topics, setTopics] = useState({ writing: false, discussion: false });
  const [hashtags, setHashtags] = useState([]);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState({
    novel: false,
    poem: false,
    science: false,
  });
  const [genderOpened, setGenderOpened] = useState("");
  const [agesOpened, setAgesOpened] = useState("");
  const [content, setContent] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const handleTopicChange = (event) => {
    const { name, checked } = event.target;
    setTopics((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleHashtagsChange = (e) => {
    const { value } = e.target;
    setHashtags(value.split(","));
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleGenderOpenedChange = (e) => {
    setGenderOpened(e.target.value);
  };

  const handleAgesOpenedChange = (e) => {
    setAgesOpened(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const [meetups, setMeetups] = useState([]);

  const fetchMeetups = () => {
    axios
      .get("/api/meetups")
      .then((response) => {
        setMeetups(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMeetups();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("모임명을 작성해주세요");
      return;
    }
    if (capacity === "") {
      alert("모임정원을 지정해주세요");
      return;
    }
    if (location === "") {
      alert("지역을 적어주세요");
      return;
    }
    if (genderOpened === "") {
      alert("성비공개여부는 필수입력사항입니다");
      return;
    }
    if (content === "") {
      alert("모임 소개글을 작성해주세요");
      return;
    }
    console.log(`Meeting name: ${name}`);
    console.log(`Capacity: ${capacity}`);
    console.log(`Topics: ${JSON.stringify(topics)}`);
    console.log(`Hashtags: ${JSON.stringify(hashtags)}`);
    console.log(`category: ${JSON.stringify(category)}`);
    console.log(`Location: ${location}`);
    console.log(`genderOpened: ${genderOpened}`);
    console.log(`agesOpened: ${agesOpened}`);
    console.log(`content: ${content}`);

    const formData = new FormData();
    formData.append("meetingTitle", name);
    formData.append("capacity", capacity);
    formData.append("writing", topics.writing);
    formData.append("discussion", topics.discussion);
    formData.append("hashtags", hashtags.join(","));
    formData.append("genderOpened", genderOpened);

    const data = {
      name,
      capacity,
      topics,
      category,
      genderOpened,
      hashtags,
      location,
      agesOpened,
      content,
    };

    axios
      .post("/api/meetups", data)
      .then((response) => {
        console.log(response);
        fetchMeetups();
      })
      .catch((error) => {
        console.log(error);
      });

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
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Form onSubmit={handleSubmit} className="meetingCreateForm">
            <Form.Group className="mb-3" controlId="meetingTitle">
              <Form.Label>모임명</Form.Label>
              <Form.Control
                type="text"
                placeholder="모임명"
                value={name}
                onChange={handleNameChange}
              />
              <Form.Text className="text-muted">모임명을 적어주세요</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="meetingMaxNum">
              <Form.Label>정원</Form.Label>
              <Form.Control
                type="number"
                min="2"
                max="10"
                placeholder="2~10"
                value={capacity}
                onChange={handleCapacityChange}
              />
              <Form.Text className="text-muted">
                정원은 2명~10명 사이입니다
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
                  id="writing"
                  checked={topics.writing}
                  onChange={handleTopicChange}
                />
                <Form.Check
                  inline
                  label="토론"
                  name="discussion"
                  type="checkbox"
                  id="discussion"
                  checked={topics.discussion}
                  onChange={handleTopicChange}
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
                  id="novel"
                  checked={category.novel}
                  onChange={handleCategoryChange}
                />
                <Form.Check
                  inline
                  label="시"
                  name="poem"
                  type="checkbox"
                  id="poem"
                  checked={category.poem}
                  onChange={handleCategoryChange}
                />
                <Form.Check
                  inline
                  label="과학"
                  name="science"
                  type="checkbox"
                  id="science"
                  checked={category.science}
                  onChange={handleCategoryChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
              성비
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="공개"
                  name="genderOpened"
                  type="radio"
                  id={`inline-radio-1`}
                  value="true"
                  checked={genderOpened === "true"}
                  onChange={handleGenderOpenedChange}
                />
                <Form.Check
                  inline
                  label="비공개"
                  name="genderOpened"
                  type="radio"
                  id={`inline-radio-2`}
                  value="false"
                  checked={genderOpened === "false"}
                  onChange={handleGenderOpenedChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="hashtags">
              <Form.Label>해시태그</Form.Label>
              <Form.Control
                type="text"
                value={hashtags}
                placeholder="#"
                onChange={handleHashtagsChange}
              />
              <Form.Text className="text-muted">
                해시태그는 ,(쉼표)로 구분합니다
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="meetingTitle">
              <Form.Label>지역</Form.Label>
              <Form.Control
                type="text"
                placeholder="지역"
                value={location}
                onChange={handleLocationChange}
              />
              <Form.Text className="text-muted">
                모임이 열릴 지역을 적어주세요
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="ages">
              연령비
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="공개"
                  name="agesOpened"
                  type="radio"
                  id={`inline-radio-1`}
                  value="true"
                  checked={agesOpened === "true"}
                  onChange={handleAgesOpenedChange}
                />
                <Form.Check
                  inline
                  label="비공개"
                  name="agesOpened"
                  type="radio"
                  id={`inline-radio-2`}
                  value="false"
                  checked={agesOpened === "false"}
                  onChange={handleAgesOpenedChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="meetingTitle">
              <Form.Label>모임소개</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="모임 소개"
                value={content}
                onChange={handleContentChange}
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
        </Col>
        <Col md={4}></Col>
      </Row>
    </Layout>
  );
}

export default MeetingCreate2;
