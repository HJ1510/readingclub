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
    <div>
      <div>코멘트폼</div>
      <div className="ReviewForm">
        <textarea
          name="content"
          placeholder="내용을 입력해주세요"
          onChange={handleCommentChange}
        />
        <button  onClick={handleCommentSubmit}>
          확인
        </button>
        <button>취소</button>
  
      </div>
    </div>
  );
}

export default BCommentForm;