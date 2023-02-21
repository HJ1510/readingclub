import Layout from "layout/Layout";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function MeetingCreate2() {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [topics, setTopics] = useState({ writing: false, discussion: false });
  const [hashtags, setHashtags] = useState([]);
  const [category, setCategory] = useState({
    novel: false,
    poem: false,
    science: false,
  });
  const [gender, setGender] = useState("");

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

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Meeting name: ${name}`);
    console.log(`Capacity: ${capacity}`);
    console.log(`Topics: ${JSON.stringify(topics)}`);
    console.log(`Hashtags: ${JSON.stringify(hashtags)}`);
    console.log(`category: ${JSON.stringify(category)}`);
    console.log(`Gender: ${gender}`);

    const formData = new FormData();
    formData.append("meetingTitle", name);
    formData.append("capacity", capacity);
    formData.append("writing", topics.writing);
    formData.append("discussion", topics.discussion);
    formData.append("hashtags", hashtags.join(","));
    formData.append("gender", gender);

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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="meetingTitle">
          <Form.Label>모임명</Form.Label>
          <Form.Control
            type="text"
            placeholder="모임명"
            value={name}
            onChange={handleNameChange}
          />
          <Form.Text className="text-muted">모임명을 적으세요</Form.Text>
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
          <Form.Text className="text-muted">모임명을 적으세요</Form.Text>
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

        <Form.Group className="mb-3" controlId="meetingType">
          성별
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="남성"
              name="gender"
              type="radio"
              id={`inline-radio-1`}
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            <Form.Check
              inline
              label="여성"
              name="gender"
              type="radio"
              id={`inline-radio-2`}
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
          </div>
        </Form.Group>
        <button type="submit">제출</button>
      </Form>
    </Layout>
  );
}

export default MeetingCreate2;
