import React, { useState, useEffect } from "react";
import { noteList } from "../../actions/borad_action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../assets/css/component/note/WirteEdbook.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import Libray from "./searchbook";
import { useParams } from "react-router-dom";
import Layout from './../../layout/Layout';
const Booknoteupdate = () => {
  const dispatch = useDispatch();
  const [imageList, setImageList] = useState([]);
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null); // 추가: 수정할 데이터 상태
  const [isEditMode, setIsEditMode] = useState(false); // 추가: 수정 모드 상태
  const [selectedBook, setSelectedBook] = useState(null);
  const { no } = useParams();
  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const [movieContent, setMovieContent] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    axios.get(`/api/notelist/${no}`).then((res) => setPostData(res.data)); // 추가: 수정할 데이터 가져오기
  }, [no]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      title: movieContent.title,
      content: movieContent.content,
      thumbnail: selectedBook.thumbnail,
      url: selectedBook.url,
      bookcontents: selectedBook.contents,
      booktitle: selectedBook.title,
      publisher: selectedBook.publisher,
      authors: selectedBook.authors,
      bookdatetime: selectedBook.datetime,
    };
    dispatch(noteList(body)).then((response) => {
      if (response.payload.success) {
        alert("등록완료");
        navigate("/booknote");
      }
    });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value,
    });
  };
  const onChangeImageInput = (e) => {
    setImageList([...imageList, ...e.target.files]);
  };
  return (
    <Layout>
     
      <Container className="cs">
        <h1 style={{ marginLeft: "20px" }}>독서 노트 만들기</h1>
        <Libray  />
        <div className="App">
          <div className="form-wrapper">
            <input
              className="title-input"
              type="text"
              placeholder="제목"
              onChange={getValue}
              name="title"
              style={{ width: "500px" }}
              value={postData?.noteList.title || ""}
            />

            <input
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              multiple
              onChange={onChangeImageInput}
            />
            <CKEditor
              editor={ClassicEditor}
              data={postData?.noteList.content || ""}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setMovieContent({
                  ...movieContent,
                  content: data,
                });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>

          <Button variant="primary" onClick={handleSubmit}>
            수정완료
          </Button>

          <Button variant="primary" type="submit">
            수정 취소
          </Button>
        </div>
        </Container>
    
    </Layout>
  );
};

export default Booknoteupdate;
