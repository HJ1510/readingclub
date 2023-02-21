import Layout from "layout/Layout";
import { useState } from "react";

const INITIAL_VALUES = {
  title: "",
  type: [false, false],
  content: "",
  createAt: null,
  hashTag: [],
  location: "",
  maxNum: "",
  sex: "",
};

function MeetingCreate2() {
  const [meetingName, setMeetingName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [topics, setTopics] = useState({ writing: false, discussion: false });
  const [hashtags, setHashtags] = useState([]);
  const [gender, setGender] = useState("");

  const handleMeetingNameChange = (event) => {
    setMeetingName(event.target.value);
  };

  const handleCapacityChange = (event) => {
    const value = parseInt(event.target.value);
    setCapacity(value);
  };

  const handleTopicChange = (event) => {
    const { name, checked } = event.target;
    setTopics((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleHashtagsChange = (event) => {
    const value = event.target.value;
    const tags = value.split(" ");
    setHashtags(tags);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Meeting name: ${meetingName}`);
    console.log(`Capacity: ${capacity}`);
    console.log(`Topics: ${JSON.stringify(topics)}`);
    console.log(`Hashtags: ${JSON.stringify(hashtags)}`);
    console.log(`Gender: ${gender}`);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label>
          Meeting name:
          <input
            type="text"
            value={meetingName}
            onChange={handleMeetingNameChange}
          />
        </label>
        <br />
        <label>
          Capacity:
          <input
            type="number"
            value={capacity}
            onChange={handleCapacityChange}
          />
        </label>
        <br />
        <label>
          Topics:
          <input
            type="checkbox"
            name="writing"
            checked={topics.writing}
            onChange={handleTopicChange}
          />{" "}
          Writing
          <input
            type="checkbox"
            name="discussion"
            checked={topics.discussion}
            onChange={handleTopicChange}
          />{" "}
          Discussion
        </label>
        <br />
        <label>
          Hashtags:
          <input
            type="text"
            value={hashtags.join(" ")}
            onChange={handleHashtagsChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />{" "}
          Female
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}

export default MeetingCreate2;
