import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../assets/css/component/note/Post.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getnotebook } from './../../actions/borad_action';
import { async } from './../../api';



function PostView(props) {
 
  let navigate = useNavigate();
  const [notelist, setNoteList] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [number, setnumber] = useState("");
  const [result, setresult] = useState("");
  const { no } = useParams();

 
  const[data, setData]= useState([]);
  
  // const getPosts = async () => {
  //   await axios.get(
  //     "/api/notelist"
  //   )
  //   .then((res) => setNoteList(res.data));

  // };

  // useEffect(() => {

  //   setData(getPostByNo(no))
  // }, []);


  // const getPostByNo = no => {
  //   const array = notelist.filter(x => x.no === no);
    
  //   if (array.length === 1) {
  //     return array[0];
  //   }
  //   return null;
  // }



  useEffect(()=>{
    axios.get("/api/notelist").then((res)=>setNoteList(res.data))
   
 
  },[])

  const array = notelist.filter((x) => x.no === parseInt(no));


  return (
    <>
    <h2 align="center">게시글 상세정보</h2>

    <div className="post-view-wrapper">
    {array.map ((data1)=>{
      return(
        <div   >
           <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ data1.no }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data1.title }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{ data1.createDate }</label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label>{ data1.readCount }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {
                    data1.content
                  }
                </div>
              </div>
          </div>
      ) 
      })}  
         
          
        
     
      
         
     <button
          className="post-view-go-list-btn"
          onClick={() => navigate("/booknote")}
        >
          목록으로 돌아가기
        </button>
    </div>
  </>
)
}

   
export default PostView;
