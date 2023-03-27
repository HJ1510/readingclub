import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import "./Rangking.modules.css";
import { BiMedal } from "react-icons/bi";
import { FaMedal } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Layout from "layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { noteList } from "actions/borad_action";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${TableCell}head`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${TableCell}body`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // MUI의 TableRow에 적용할 스타일을 정의합니다.
}));

export default function Ranking() {
  const dispatch = useDispatch();
    const [notes, setNotes] = useState([]);

  const [showTable, setShowTable] = useState(false);

  const [user, setuser] = useState([]);

  const navigate = useNavigate();


  const handleClick = async (bookid) => {
    try {
      await axios.put(`/api/notelist/${bookid}/hit`);
      navigate(`/booknote/${bookid}`);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    axios.get("/api/notelist/post").then((res) => {
      setuser(res.data.users); // 수정된 부분: res.data.users로 설정
    });
  }, [setuser]);
  useEffect(() => {
    dispatch(noteList()).then((response) => {
      setNotes(response.payload);
      setTimeout(() => {
        setShowTable(true);
      }, 1500); // 5초 후에 showTable을 true로 변경
    });
  }, [dispatch]);
  return (
    <Layout>
      <Grid
        container
        spacing={2}
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <Grid
          item
          xs={4}
          className="rank"
          style={{ marginRight: "20px", maxWidth: "300px" }}
        >
          <Typography variant="h5" gutterBottom>
            조회 수 👓
          </Typography>
          {notes
            .sort((a, b) => b.hit - a.hit)
            .slice(0, 5) // add this line to only keep the top 5 notes
            .map((note, index) => {
              let icon;
              if (index === 0) {
                icon = <FaMedal size="24" color="gold" />;
              } else if (index === 1) {
                icon = <FaMedal size="24" color="silver" />;
              } else if (index === 2) {
                icon = <FaMedal size="24" color="#8B4513" />;
              } else {
                icon = index + 1;
              }
              return (
                <div
                  key={note._id}
                  className="ranking"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  {icon} {` ${note.title}`}
                </div>
              );
            })}
        </Grid>
        <Grid
          item
          xs={4}
          className="rank"
          style={{ marginRight: "20px", maxWidth: "300px" }}
        >
          <Typography variant="h5" gutterBottom>
            게시글 수 💻
          </Typography>
          <div>
            {user
              .sort((a, b) => b.postCount - a.postCount)
              .slice(0, 5)
              .map((post, index) => {
                let icon;
                if (index === 0) {
                  icon = <FaMedal size="24" color="gold" />;
                } else if (index === 1) {
                  icon = <FaMedal size="24" color="silver" />;
                } else if (index === 2) {
                  icon = <FaMedal size="24" color="#8B4513" />;
                } else {
                  icon = index + 1;
                }
                return (
                  <div
                    key={post._id}
                    className="ranking"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    {icon} {` ${post.name}  ${post.postCount}개`}
                  </div>
                );
              })}
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          className="rank"
          style={{ marginRight: "20px", maxWidth: "300px" }}
        >
          <Typography variant="h5" gutterBottom>
            좋아요 수 🧡
          </Typography>
          <div>
            {notes
              .sort((a, b) => b.likes - a.likes)
              .slice(0, 5)
              .map((note, index) => {
                let icon;
                if (index === 0) {
                  icon = <FaMedal size="24" color="gold" />;
                } else if (index === 1) {
                  icon = <FaMedal size="24" color="silver" />;
                } else if (index === 2) {
                  icon = <FaMedal size="24" color="#8B4513" />;
                } else {
                  icon = `${index + 1}.  `;
                }
                return (
                  <div
                    key={note._id}
                    className="ranking"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    {icon} {` ${note.title}`}
                  </div>
                );
              })}
          </div>
        </Grid>
      </Grid>

      <div
        className={`talbel123 ${showTable ? "show" : ""}`}
        component={Paper}
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        <div
          style={{
            marginLeft: "500px",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <blockquote>
            벽의 문을 통해 돌아온 사람은 나갔던 사람과 결코 똑같지 않을
            것입니다.
          </blockquote>
          <cite>Aldous Huxley</cite>
        </div>

        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-2 g-5 " style={{ marginTop: "20px" }}>
        {notes.map((book, index) => (

          <div class="row mb-4" key={book._id}>

            <div class="col-md-12">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success"> {book.category}</strong>
                  <h3 class="mb-0">{book.title}</h3>
                  <div class="mb-1 text-muted">Created at: {book.createdAt}</div>
                  <div style={{display:"flex"}}>
                  <p>[조회수 👓: {book.hit}]</p>
                
                  
                  <p style={{marginLeft:"10px"}}>[좋아요 <img style={{height:"30px"}} src="https://cdn-icons-png.flaticon.com/512/7579/7579706.png"/>: {book.likes}] </p>
                  
                  </div>
                  <a  style={{marginTop:"50px"}}to class="btn btn-warning md-2"onClick={() => handleClick(book._id)}>Continue Reading</a>
             
                </div>
                <div class="col-auto d-none d-lg-block">
                  
                <img className="bd-placeholder-img" width="200" height="270" src={book.thumbnail} >

</img>
                </div>
              </div>
            </div>
          </div>

        ))}
  </div>
        <div className="page-nav">
          <nav
            aria-label="Page navigation example"
            style={{ display: "inline-block" }}
          >
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </Layout>
  );
}
