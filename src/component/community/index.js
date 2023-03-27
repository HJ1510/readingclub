import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { noteList } from "actions/borad_action";
import { useNavigate } from "react-router-dom";
function Community() {
  const dispatch = useDispatch();
  const [user, setuser] = useState();
  const [notes, setNotes] = useState([]);
  const navigate =useNavigate();
  const [showTable, setShowTable] = useState(false);
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
  const handleClick = async (bookid) => {
    try {
   
      navigate(`/booknote/${bookid}`);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(notes)
  return (
    <Layout>

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {notes.map((book, index) => (
              <div class="col">
                      <div style={{width: "100%",borderRadius:"50" ,border:"10"}}>
                <div class="card shadow-sm">
            
               <img src={book.thumbnail} style={{ width: "100%", height: "100" }} />
                

                  <div class="card-body">
                  <h4 class="card-text">{book.booktitle}</h4>
                    <p class="card-text">{book.title}</p>
                    <p>좋아요: {book.likes}</p>
                    <p>조회수: {book.hit}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary"onClick={() => handleClick(book._id)}>View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">{book.createdAt}</small>
                    </div>
                  </div>
                </div>
                </div>
              </div>

            ))}
          </div>

        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
      {notes.map((book, index) => (
      <div class="row mb-1" >
    <div class="col-md6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
   
      </div>
      </div>
         ))}
         </div>
    </Layout>
  );
}

export default Community;
