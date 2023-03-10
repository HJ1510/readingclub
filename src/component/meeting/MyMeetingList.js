import { meetingList } from "MeetigData";
import React, { useState } from "react";

function MyMeetingList() {
  const [currentPage, setCurrentPage] = useState(1);
  const meetingsPerPage = 4; // 한 페이지에 보여줄 모임의 수

  // 페이징된 데이터 가져오기
  const indexOfLastMeeting = currentPage * meetingsPerPage;
  const indexOfFirstMeeting = indexOfLastMeeting - meetingsPerPage;
  const currentMeetings = meetingList.slice(
    indexOfFirstMeeting,
    indexOfLastMeeting
  );

  // 페이지 이동 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* 현재 페이지에 해당하는 모임들 보여주기 */}
      {currentMeetings.map((item) => {
        return (
          <div key={item.no}>
            {item.title}

            {item.meetingStatus === "모집중" ? (
              <h3>모집중</h3>
            ) : item.meetingStatus === "진행중" ? (
              <h3>진행중</h3>
            ) : (
              <h3>진행완료</h3>
            )}

            {item.roll === "host" ? (
              <div>
                <h3>host</h3> <button>setting</button>
              </div>
            ) : (
              <button>탈퇴하기</button>
            )}
          </div>
        );
      })}

      {/* 페이징 버튼 만들기 */}
      <button
        disabled={currentPage === 1} // 처음 페이지에선 비활성화
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {"<"}
      </button>
      <button
        disabled={indexOfLastMeeting >= meetingList.length} // 마지막 페이지에선 비활성화
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
}

export default MyMeetingList;
