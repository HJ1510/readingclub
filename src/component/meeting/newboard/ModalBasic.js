import { useEffect, useRef } from "react";
import styles from "./ModalBasic.module.css";
import "../../../assets/css/component/meeting/Board.css";

function ModalBasic({ setModalOpen, id, title, content, writer }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <div className="post-view-wrapper">
        {
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{id}</label>
            </div>
            <div className="post-view-row">
              <label>제목</label>
              <label>{title}</label>
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
              <div>{content}</div>
            </div>
          </>
        }
      </div>
      <button>삭제</button>
      <button>수정</button>
    </div>
  );
}
export default ModalBasic;
