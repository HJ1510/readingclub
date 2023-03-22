import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getUserMeetings } from 'api';

function UserForm() {
  const [meeting, setMeeting] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [user, setUser] = useState({});

  const handleNext = () => {
    setStartIndex(startIndex + 3);
    setEndIndex(endIndex + 3);
  };

  const handlePrev = () => {
    setStartIndex(startIndex - 3);
    setEndIndex(endIndex - 3);
  };

  const userData = useSelector((state) => state.user.userData);

  const listLoad = async (id) => {
    const loadMeetings = await getUserMeetings(id);

    const meetings = loadMeetings.map((meeting) => ({
      title: meeting.title,
      role: meeting.members[0].role,
      memberStatus: meeting.members[0].status,
      no: meeting.autoIncrementField,
    }));

    const sortedMeetings = meetings.sort((a, b) => b.no - a.no);
    setMeeting(sortedMeetings);
    // memberStatus가 'host', 'full_member'인 모임만 보이게
    // const filteredMeetings = sortedMeetings.filter(
    //   (meeting) =>
    //     meeting.memberStatus === 'host' ||
    //     meeting.memberStatus === 'full_member'
    // );
    // setMeeting(filteredMeetings);
  };

  useEffect(() => {
    if (userData) {
      listLoad(userData._id);
    }
  }, [userData]);

  return (
    <div className='user-form'>
      <div>
        
        {userData && <p>{userData.name}님 안녕하세요</p>}

        {meeting && (
          <>
            {meeting.slice(startIndex, endIndex).map((item, idx) => {
              return (
                <div className='bnt-user-meeting' key={idx}>
                  <a href={`http://localhost:3000/meeting/group/${item.no}`}>
                    <button>
                      {item.title}/{item.memberStatus}
                    </button>
                  </a>
                </div>
              );
            })}
            <button onClick={handlePrev} disabled={startIndex === 0}>
              &lt;
            </button>
            <button onClick={handleNext} disabled={endIndex >= meeting.length}>
              &gt;
            </button>
          </>
        )}
        <p>
          <Link to='/meeting/createmeeting'>
            <Button variant='outline-danger' size='lg'>
              모임개설
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserForm;
