import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/component/note/Booknoteno.css";
import "../../assets/css/component/note/Post.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Comment from "component/comment";
import Layout from "./../../layout/Layout";
import { Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

function PostView(props) {
  let navigate = useNavigate();
  const [notelist, setNoteList] = useState([]);
  const { no } = useParams();
 

  useEffect(() => {
    axios.get("/api/notelist").then((res) => setNoteList(res.data));
  }, []);

  const array = notelist.filter((x) => x.no === parseInt(no));

  const handleDeleteClick = async () => {
    const confirm = window.confirm("정말로 삭제하시겠습니까?");
    if (confirm) {
      try {
        await axios.delete(`/api/notelist/${no}`);
        navigate("/booknote");
      } catch (error) {
        console.error(error);
      }
    }
  };


  const handleEditClick = () => {
    navigate(`/booknote/${no}/edit`);
  };
 
 
  return (
    <Layout>
      <div className="post-view-wrapper">
        {array.map((data1) => {
          const date = new Date(data1.bookdatetime);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const formattedDate = `${year}년 ${month}월 ${day}일`;

          return (
            <Row>
              <Col md={2} className="tumb">
                <Link to={data1.url}>
                  <img
                    className="wirtenoteimg"
                    style={{ width: "100%", height: "100%" }}
                    src={data1.thumbnail}
                  ></img>
                </Link>
              </Col>
              <Col className="bookviewnotelisttitle1" style={{}}>
                <h1 style={{ margin: "15px" }}>제목: {data1.booktitle}</h1>
                <span className="bookspan">
                  <span>{data1.authors} 역 </span>
                  <em className="em"> | </em>
                  <span>출판사 :{data1.publisher} </span>
                  <em className="em"> | </em>
                  <span>출판일 :{formattedDate} </span>
                </span>

                <h3 style={{ margin: "15px" }}>내용: {data1.bookcontents}</h3>
              </Col>
              <h3 style={{ marginTop: "50px" }}>제목: {data1.title}</h3>

              <div className="bookviewcontent">
                <h5 style={{ margin: "20px" }}>내용: {parse(data1.content)}</h5>
              </div>
            </Row>
          );
        })}
        <div style={{display:"flex" ,float:"right"}}>
          <button style={{marginRight:"20px"}}
            className="post-view-go-list-btn"
            onClick={() => navigate("/booknote")}
          >
            목록으로 돌아가기
          </button>
          
          <button
            className="post-view-go-list-btn"
            onClick={handleEditClick}
          >
            수정하기
          </button>
          <button
            className="post-view-go-list-btn"
            onClick={handleDeleteClick}
          >
            삭제하기
          </button>
        </div>
      </div>
      <Comment></Comment>
    </Layout>
  );
}

export default PostView;
