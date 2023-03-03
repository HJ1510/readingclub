import Layout from "layout/Layout";
import "../../assets/css/component/note/Booknote.css";
import Chartdata from "./Chartdata";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import parse from 'html-react-parser';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Booknote() {
  let [countspan, setcountspan] = useState(5);
  let [name, setName] = useState("");
  const [categoryname, setcategoryname] = useState([]);
  const [notelist, setNoteList] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = (no) => {
    axios.delete(`/api/notelist/${no}`,{   headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
    
      .then(res => {
        if (res.data.success) {
          setNoteList(notelist.filter(notelist => notelist.id !== no));
        }
      })
      .catch(err => console.error(err));
  }
  useEffect(() => {
    axios.get("/api/notelist").then((response) => {
      setNoteList(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/category").then((response) => {
      setcategoryname(response.data);
    });
  }, []);
  return (
    <Layout>
    <div className="main">

        <div className="noteNav" style={{ display: "" }}>
          <Link to={"/booknote"}>
            <Button className="Header-button" variant="secondary">
              나의 노트
            </Button>
          </Link>
          <Link to={"/booknote/notelist"}>
            <Button className="Header-button" variant="secondary">
              노트리스트
            </Button>
          </Link>
          <Link to={"/note/notebookmark"}>
            <Button className="Header-button" variant="secondary">
              저장노트
            </Button>
          </Link>
        </div>

        <div className="booknote">
          <div className="booknotelay">
            <div className="booknote-sidebar">
              <div className="sidebar-card"></div>
              <img
                style={{ height: "300px", display: "flex" }}
                className="avatar"
                src="https://avatars.githubusercontent.com/u/114986610?v=4"
              ></img>
              <div className="cardname">
                <h1 className="carduser">SunMoo</h1>
              </div>
              <div className="cardusercolum">
                <Link
                  style={{
                    color: "var(--color-fg-muted) !important",
                    textDecorationLine: "none",
                  }}
                  to="https://github.com/YuumiNam?tab=followers"
                >
                  followers{" "}
                </Link>
                <span
                  onClick={() => {
                    setcountspan(countspan + 1);
                  }}
                >
                  🧡{countspan}
                </span>
                .
                <Link
                  style={{
                    color: "var(--color-fg-muted) !important",
                    textDecorationLine: "none"
                  }}
                  to="https://github.com/YuumiNam?tab=following"
                >
                  following{" "}
                </Link>
                <span
                  onClick={() => {
                    setcountspan(countspan + 1);
                  }}
                >
                  🧡{countspan}
                </span>
                <br />
                <Link
                  to="/booknote/writebook"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  노트 작성하기 📗
                </Link>
              </div>
            </div>

            <div className="booknote-mian" style={{ height: "500px" }}>
              <div
                className="container"
                style={{ display: "flex", gap: "15px", marginTop: "20px" }}
              >
                <div
                  style={{
                    width: "400px",
                    height: "100%",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Chart></Chart>
                </div>
                <label
                  className="box-body"
                  style={{ width: "350px", height: "100%", display: "block" }}
                >
                  <h2
                    style={{
                      textAlign: "center",
                      height: "50px",
                      margin: "10px",
                    }}
                  >
                    {" "}
                    목표 도서수 {100}
                  </h2>
                  <Chartdata />
                </label>
              </div>

              <div className="glassbox">
                <div style={{ margin: "5px" }}>
                  <img
                    style={{ width: "100%" }}
                    src="https://ghchart.rshah.org/yuumiNam"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="booknote-under" >
            <div className="booknote-select">
              <select
                className="form-select"
                style={{ width: "300px", fontSize: "1.4em" }}
              >
                {categoryname.map((category) => {
                  return (
                    <option key={category.name} value={category}>
                      {category.name}
                    </option>
                  );
                })}
              </select>

              <form
                className="d-flex"
                role="search"
                style={{ width: "400px", float: "right" }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ fontSize: "1.5em" }}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="booknote-undermain">
              <div>
                <div
                  className="booknote-underlist"
                  style={{ fontSize: "2.0em" }}
                >
                  <div
                    className="booknotelist"
                    style={{
                      paddingTop: "30px",
                      paddingBottom: "20px",
                      display: "block",
                    }}
                  >
                    {notelist.map((booknotlist) => {
                      return (
                        <div
                          key={booknotlist.id}
                          className="booklist"
                          style={{
                            paddingTop: "30px",
                            paddingBottom: "20px",
                            display: "flex",
                            borderBottom:'1px solid  #e6e0e0'
                          }}
                        >
                          <Col md={2} className="tumb">
                            <img
                             src={booknotlist.thumbnail}
                            ></img>
                          </Col>
                          <Col
                            className="booknotelisttitle1"
                            style={{
                              width: "900px",
                            }}
                          >
                            <h3 style={{ margin: "15px" }}> #카테고리</h3>
                            <h3 style={{ margin: "15px" }}>
                              <Link to={`/booknote/${booknotlist.no}`}>
                                제목: {booknotlist.title}
                              </Link>
                            </h3>

                            <h5 style={{ margin: "10px" }}>
                              내용: {parse(booknotlist.content)}
                            </h5>
                          </Col>
                          <div
                            className="booknotelisticon"
                            style={{ display: "block" }}
                          >
                            <span
                              style={{ height: "100px" }}
                              onClick={() => {
                                setcountspan(countspan + 1);
                              }}
                            >
                              👍{countspan}
                            </span>
                            <br />
                            <span
                              onClick={handleDelete}
                              style={{ height: "50px", width: "80px" }}
                            >
                              🗑
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
export default Booknote;
