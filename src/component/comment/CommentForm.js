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
  const [isSubmitting, setIsubmitting] = useState(false);

  const [submittingError, setSubmittingError] = useState(null);

  const commentChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const commentSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", values.content);
    formData.append("title", "제목");
    formData.append("rating", 2);


    try {
      setSubmittingError(null);
      setIsubmitting(true);
      await createComment(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsubmitting(false);
    }
    setValues(INITIAL_VALUES);
  };

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
        <button type="sumbit" disabled={isSubmitting}>
          확인
        </button>
        {submittingError && <div>{submittingError.message}</div>}
        {/** type="sumbit" -> onSubmit 이벤트 발생 */}
      </form>
    </div>
  );
}

export default CommentForm;
