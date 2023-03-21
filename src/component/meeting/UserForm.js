import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getUserMeetings } from 'api';

function UserForm() {
  const [meeting, setMeeting] = useState([]);

  const userData = useSelector((state) => state.user.userData);

  const listLoad = async (id) => {
    const loadMeetings = await getUserMeetings(id);

    const meetings = loadMeetings.map((meeting) => ({
      title: meeting.title,
      role: meeting.members[0].role,
      no: meeting.autoIncrementField,
    }));
    setMeeting(meetings);
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

        {meeting &&
          meeting.map((item, idx) => {
            return (
              <div className='bnt-user-meeting' key={idx}>
                <a href={`http://localhost:3000/meeting/group/${item.no}`}>
                  <button>{item.title}</button>
                </a>
              </div>
            );
          })}
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
