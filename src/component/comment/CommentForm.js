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
  // const [values, setValues] = useState(INITIAL_VALUES);

  // const handleChange = (name, value) => {
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   handleChange(name, value);
  // };

  // const handleSubmit = async (e) => {
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
    <div>코멘트폼</div>
    // <form className="ReviewForm" onSubmit={handleSubmit}>
    //   <FileInput
    //     name="imgFile"
    //     defaultValue={values.imgFile}
    //     onChange={handleChange}
    //   />
    //   <input
    //     name="title"
    //     defaultValue={values.title}
    //     placeholder="title"
    //     onChange={handleInputChange}
    //   />
    //   <textarea
    //     name="content"
    //     value={values.content}
    //     placeholder="content"
    //     onChange={handleInputChange}
    //   />
    //   <button type="sumbit">확인</button>{" "}
    //   {/** type="sumbit" -> onSubmit 이벤트 발생 */}
    // </form>
  );
}

export default CommentForm;
