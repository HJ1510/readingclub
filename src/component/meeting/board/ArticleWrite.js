import { createArticle } from "api";
import Layout from "layout/Layout";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import TextEditor from "../TextEditor";
import "./Board.css";

const INITIAL_VALUES = {
  title: "",
  content: "",
  writer: "",
  createAt: null,
  hashTag: "",
};

function ArticleWrite() {
  const navigate = useNavigate();

  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // preventDefault(): 기본 동작 막는 함수
    // console.log(e.target.title);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);

    await createArticle(formData);

    setValues(values);
  };

  return (
    <div>
      <Layout>
        <div>글쓰기</div>
        <div className="Write">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={values.title}
              placeholder="title"
              onChange={handleInputChange}
              id="title_txt"
            ></input>
            <textarea
              name="content"
              value={values.content}
              placeholder="content"
              onChange={handleInputChange}
              id="content_txt"
            ></textarea>
            <input
              type="text"
              name="hashTag"
              value={values.hashTag}
              placeholder="hashTag"
              onChange={handleInputChange}
              id="title_txt"
            ></input>
            <div id="post_submit">
              <button
                type="submit"
                value="create"
                onClick={() => {
                  navigate(-1);
                }}
              >
                작성
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default ArticleWrite;
