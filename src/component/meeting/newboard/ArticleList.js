import Tables from "./Tables";
import TableRow from "./TableRow";
import TableColumn from "./TableColumn";
import { Link } from "react-router-dom";
import ModalBasic from "./ModalBasic";
import { useState } from "react";

function ArticleList({ items, onDelete }) {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <h2>글 목록</h2>
      <Tables
        headersName={[
          "No.",
          "제목",
          "작성자",
          "작성일",
          "조회수",
          "댓글수",
          "",
        ]}
      >
        {items
          ? items.map((item, idx) => {
              return (
                <TableRow key={idx}>
                  <TableColumn>{item.id}</TableColumn>
                  <TableColumn>
                    <div>
                      <button onClick={showModal}>{item.title}</button>
                      {modalOpen && (
                        <ModalBasic
                          id={item.id}
                          title={item.title}
                          content={item.content}
                          setModalOpen={setModalOpen}
                        />
                      )}
                    </div>
                  </TableColumn>
                  <TableColumn>{item.content}</TableColumn>
                  <TableColumn>{item.createdAt}</TableColumn>
                  <TableColumn>{item.calorie}</TableColumn>
                  <TableColumn>{item.calorie}</TableColumn>
                  <TableColumn>
                    <button onClick={onDelete}>삭제</button>
                  </TableColumn>
                </TableRow>
              );
            })
          : ""}
      </Tables>
    </div>
  );
}

export default ArticleList;
