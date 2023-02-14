import { useState } from "react";
import "../../assets/css/component/comment/Comment.css";
import { createComment } from "api";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function CommentForm() {
  const [values, setValues] = useState(INITIAL_VALUES);

  const commentChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const commentSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const formData = new FormData();
    formData.append("content", "내용");
    formData.append("title", "제목");
    formData.append("rating", 2);
    await createComment(formData);
    setValues(INITIAL_VALUES);
  };

  // const [values, setValues] = useState(INITIAL_VALUES);

  // const handleChange = (name, value) => {
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   handleChange(name, value);
  // };

  // const commentSubmit = async (e) => {
  //   e.preventDefault(); // preventDefault(): 기본 동작 막는 함수

  //   const formData = new FormData();
  //   formData.append("title", values.title);
  //   formData.append("rating", values.rating);
  //   formData.append("content", values.content);
  //   formData.append("imgFile", values.imgFile);

  //   await createComment(formData);

  //   setValues(INITIAL_VALUES);
  // };

  return (
    <div>
      <div>코멘트폼</div>
      <form className="ReviewForm" onSubmit={commentSubmit}>
        {/* <FileInput
          name="imgFile"
          defaultValue={values.imgFile}
          onChange={handleChange}
        /> */}
        <textarea
          name="content"
          value={values.content}
          placeholder="내용을 입력해주세요"
          onChange={commentChange}
        />
        <button type="sumbit">확인</button>{" "}
        {/** type="sumbit" -> onSubmit 이벤트 발생 */}
      </form>
    </div>
  );
}

export default CommentForm;
