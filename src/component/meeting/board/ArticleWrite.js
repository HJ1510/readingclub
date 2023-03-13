import { createArticle } from "api";
import Layout from "layout/Layout";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Editor from "./Editor";
import styles from "assets/css/component/meeting/Board.module.css";

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
        <div className={styles.Write}>
          <div>
            <input
              type="text"
              autoComplete="off"
              name="title"
              value={values.title}
              placeholder="title"
              onChange={handleInputChange}
              id={styles.title_txt}
            ></input>
          </div>
          <Editor
            handleSubmit={handleSubmit}
            content={values.content}
            setContent={(content) =>
              setValues((prevValues) => ({ ...prevValues, content }))
            }
          />
        </div>
      </Layout>
    </div>
  );
}

export default ArticleWrite;
