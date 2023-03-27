import { meetingList } from 'MeetigData';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateMemberStatus } from 'api';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';
import 'assets/css/component/meeting/Meeting.css';

function MyMeetingList(props) {
  const meeting = props.meeting;
  console.log(meeting);

  const [authUser, setAuthUser] = useState({});
  const dispatch = useDispatch();

  // const [currentPage, setCurrentPage] = useState(1);
  // const meetingsPerPage = 4; // 한 페이지에 보여줄 모임의 수
  // // 페이징된 데이터 가져오기
  // const indexOfLastMeeting = currentPage * meetingsPerPage;
  // const indexOfFirstMeeting = indexOfLastMeeting - meetingsPerPage;
  // // 페이지 이동 함수
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  const handleClick = async (no, memberId, status) => {
    console.log(no);
    console.log(memberId);
    console.log(status);
    try {
      const body = { status: status };
      await updateMemberStatus({ no, memberId }, body);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    dispatch(auth()).then((response) => {
      setAuthUser(response.payload);
    });
  }, []);

  return (
    <div>
      {/* 페이징 버튼 만들기
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
      </div> */}
      <div className='album py-5 bg-body-tertiary'>
        <div className='container'>
          <div className='row row-cols6 row-cols-sm-2 row-cols-md-3 g-5'>
            {meeting.map((item, idx) => (
              <div className='col' style={{ width: '30%' }} key={idx}>
                <div className='card shadow-sm'>
                  <div className='card-body'>
                    <img
                      src={`/${item.imgFile}`}
                      style={{ float: 'right', width: '170px' }}
                      alt='sample'
                    />
                    <p
                      className={`meetingStatus ${
                        item.meetingStatus === 'recruiting'
                          ? 'recruiting'
                          : item.meetingStatus === 'in_progress'
                          ? 'in-progress'
                          : 'completed'
                      }`}
                    >
                      {item.meetingStatus === 'recruiting'
                        ? '모집중'
                        : item.meetingStatus === 'in_progress'
                        ? '진행중'
                        : '모임완료'}
                    </p>
                    <p className='title'>{item.title}</p>
                    <p className='maxNum'>
                      {item.members.length}/{item.maxNum}
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        {item.members[0].role === 'host' ? (
                          <Link
                            to={`/meeting/admin/${item.autoIncrementField}`}
                          >
                            <button
                              type='button'
                              className='btn btn-sm btn-outline-secondary'
                            >
                              모임관리
                            </button>
                          </Link>
                        ) : (
                          <button
                            type='button'
                            className='btn btn-sm btn-outline-secondary'
                            onClick={() =>
                              handleClick(
                                item.autoIncrementField,
                                authUser._id,
                                'rejected_member'
                              )
                            }
                          >
                            탈퇴하기
                          </button>
                        )}
                      </div>
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
