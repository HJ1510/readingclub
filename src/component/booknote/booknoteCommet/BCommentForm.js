import axios from "axios";
import { useState } from "react";


function BCommentForm(){


  const [values, setValues] = useState("");

  const handleCommentChange = (e) => {
    setValues(e.values.target)
  };
  const handleCommentSubmit =  (e) => {
    e.preventDefault();
    let body ={
      content:"asds"
    }
    axios.post("/api/Bcomments",body).then((res)=>{
        console.log(res)
    })
  };

  return (
    <div class="row g-5">
    <section>
      <form class="row g-3" id="comment-form" action="/comments/new" method="post"><input type="hidden" name="_csrf" value="b6f4188d-b33d-4ef7-ae88-065721302f3a"/>
        <input type="hidden" class="article-id" name="articleId" value="1"/>
        <div class="col-md-9 col-lg-8">
          <label for="comment-textbox" hidden>댓글</label>
          <textarea class="form-control" id="comment-textbox" placeholder="댓글 쓰기.." rows="3" required name="content"></textarea>
        </div>
        <div class="col-md-3 col-lg-4">
          <label for="comment-submit" hidden>댓글 쓰기</label>
          <button class="btn btn-primary" onClick={handleCommentSubmit} type="submit">쓰기</button>
        </div>
      </form>

      <ul id="article-comments" class="row col-md-10 col-lg-8 pt-3">
        <li>
          <form class="comment-form" action="/comments/2/delete" method="post"><input type="hidden" name="_csrf" value="b6f4188d-b33d-4ef7-ae88-065721302f3a"/>
            <input type="hidden" class="article-id" name="articleId" value="1"/>
            <div class="row">
              <div class="col-md-10 col-lg-9">
                <strong>Nickname</strong>
                <small><time datetime="2023-03-26T16:47:57.669933">2023-03-26 16:47:57</time></small>
                <p>댓글 내용</p>
              </div>
              <div class="col-2 mb-3 align-self-center">
                <button type="submit" class="btn btn-outline-danger" id="delete-comment-button">삭제</button>
              </div>
            </div>
          </form>
        </li>
      
        
      </ul>

    </section>
  </div>
  );
}

export default BCommentForm;