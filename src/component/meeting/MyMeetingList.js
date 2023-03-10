import { meetingList } from "MeetigData";
import { useState } from "react";

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
      {/* 현재 페이지에 해당하는 모임들 보여주기 */}
      {currentMeetings.map((item) => {
        return (
          <div key={item.no}>
            <h5>{item.title}</h5>

            {item.meetingStatus === "모집중" ? (
              <p>모집중</p>
            ) : item.meetingStatus === "진행중" ? (
              <p>진행중</p>
            ) : (
              <p>진행완료</p>
            )}

            {item.roll === "host" ? (
              <div>
                <p>host</p> <button>setting</button>
              </div>
            ) : (
              <button>탈퇴하기</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MyMeetingList;
