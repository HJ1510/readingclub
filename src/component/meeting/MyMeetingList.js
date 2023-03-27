import { meetingList } from 'MeetigData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import "assets/css/component/meeting/Meeting.css";

function MyMeetingList(props) {
  const meeting = props.meeting;
  console.log(meeting);
  const [currentPage, setCurrentPage] = useState(1);
  const meetingsPerPage = 4; // 한 페이지에 보여줄 모임의 수

  // 페이징된 데이터 가져오기
  const indexOfLastMeeting = currentPage * meetingsPerPage;
  const indexOfFirstMeeting = indexOfLastMeeting - meetingsPerPage;

  // 페이지 이동 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* 페이징 버튼 만들기 */}
      <div className='d-flex justify-content-between'>
        <button
          disabled={currentPage === 1} // 처음 페이지에선 비활성화
          onClick={() => handlePageChange(currentPage - 1)}
          className='btn btn-secondary'
        >
          {'<'} 이전
        </button>
        <button
          disabled={indexOfLastMeeting >= meetingList.length} // 마지막 페이지에선 비활성화
          onClick={() => handlePageChange(currentPage + 1)}
          className='btn btn-secondary'
        >
          다음 {'>'}
        </button>
      </div>
      <div className='album py-5 bg-body-tertiary'>
        <div className='container'>
          <div className='row row-cols6 row-cols-sm-2 row-cols-md-3 g-5'>
            {meeting.map((item, idx) => (
              <div className='col' key={idx}>
                <div className='card shadow-sm'>
                  <div className='card-body'>
                    <img src={`/${item.imgFile}`} alt='sample' />
                    <p className='card-text'>
                      {item.title} / {item.meetingStatus}
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        {item.members[0].role === 'host' ? (
                          <button
                            type='button'
                            className='btn btn-sm btn-outline-secondary'
                          >
                            모임관리
                          </button>
                        ) : (
                          <button
                            type='button'
                            className='btn btn-sm btn-outline-secondary'
                          >
                            탈퇴하기
                          </button>
                        )}
                      </div>
                      <small className='text-body-secondary'>9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMeetingList;
