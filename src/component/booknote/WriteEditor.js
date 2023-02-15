import React, { useState ,useEffect} from 'react';
// import { Editor } from 'react-draft-wysiwyg';

import styled from 'styled-components';
// import { EditorState } from 'draft-js';
import {insertBoard, noteList} from "../../actions/borad_action"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/component/note/WirteEdbook.css";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// const MyBlock = styled.div`
//     .wrapper-class{
//         width: 50%;
//         margin: 0 auto;
//         margin-bottom: 4rem;
//     }
//   .editor {
//     height: 500px !important;
//     border: 1px solid #f1f1f1 !important;
//     padding: 5px !important;
//     border-radius: 2px !important;
//   }import { useNavigate } from 'react-router-dom';
import Writebook from './Writebook';

// `;

// const TestEditorForm = () => {
//   // useState로 상태관리하기 초기값은 EditorState.createEmpty()
//   // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());

//   const onEditorStateChange = (editorState) => {
//     // editorState에 값 설정
//     setEditorState(editorState);
  
//   };

function WriteEditor(){
  const dispatch = useDispatch();
  const [name, setName]=useState("");
  const [value,setValue]= useState("");
  const navigate = useNavigate();

  const onNameHandler=(e)=>{
    setName(e.target.value);
  }
  const onvalueHandler=(e)=>{
    setValue(e.target.value);
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    let body={
      name: name,
      value: value,
    }
    dispatch(insertBoard(body)).then((response)=>{
      if(response.payload.success){
        navigate("/booknote");
      }else{
        alert("Error");
      }
    })
  };

  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/notelist').then((response)=>{
      setViewContent(response.data);

    })
  },[])

  const submitReview = (e)=>{
    e.preventDefault() 
   let body= {
      title: movieContent.title,
      content: movieContent.content
    }
    dispatch(noteList(body)).then((response)=>{
      if(response.payload.success){
        alert("등록완료")
      }
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value
    })
  };

  return (
    <div>
      <input type="name" onChange={onNameHandler}></input>
      
      <input type="text" onChange={onvalueHandler}></input>
      
       <button onClick={onSubmitHandler}>입력하기</button>




       <div className="App" style={{height:"500px"}}>
      <h1>독서 노트 만들기</h1>
      <div className='movie-container'>
   
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
          style={{width:"500px"}}
        />
        <CKEditor 
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <div >
        <select placeholder='카테고리를 선택해주세요'>카테고리</select>
      </div>
      <button
        className="submit-button"
        onClick={submitReview}
        >입력</button>
    </div>
    </div>

    
  );
};

export default WriteEditor;
    // <MyBlock>
    //   <Editor
    //     // 에디터와 툴바 모두에 적용되는 클래스
    //     wrapperClassName="wrapper-class"
    //     // 에디터 주변에 적용된 클래스
    //     editorClassName="editor"
    //     // 툴바 주위에 적용된 클래스
    //     toolbarClassName="toolbar-class"
    //     // 툴바 설정
    //     toolbar={{
    //       // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
    //       list: { inDropdown: true },
    //       textAlign: { inDropdown: true },
    //       link: { inDropdown: true },
    //       history: { inDropdown: false },
    //     }} 
    //     placeholder="내용을 작성해주세요."
    //     // 한국어 설정
    //     localization={{
    //       locale: 'ko',
    //     }}
    //     // 초기값 설정
    //     editorState={editorState}
    //     // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
    //     onEditorStateChange={onEditorStateChange}
    //   />
     
    // </MyBlock>