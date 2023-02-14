import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../assets/css/component/note/Post.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PostView(props) {
  let navigate = useNavigate();
  let [notelist, setNoteList] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [number, setnumber] = useState("");
  const [result, setresult] = useState("");
  const { no } = useParams;

  //   useEffect(() => {
  //     setData(getPostByNo(no));
  //   }, [ ]);

  useEffect(() => {
    axios.get("/progress/list").then((response) => {
      setNoteList(response.data);
    });
  }, []);
  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {notelist.map((booknotlist) => {
          return (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{booknotlist.result}</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label></label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label></label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label></label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>{}</div>
              </div>
            </>
          );
        })}

        <button
          className="post-view-go-list-btn"
          onClick={() => navigate("/booknote")}
        >
          목록으로 돌아가기
        </button>
      </div>
    </>
  );
}

export default PostView;
