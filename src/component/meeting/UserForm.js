import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getUserMeetings } from 'api';

function UserForm() {
  const [authUser, setAuthUser] = useState({});
  const [meeting, setMeeting] = useState([]);
  const dispatch = useDispatch();

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
    dispatch(auth()).then((response) => {
      setAuthUser(response.payload);
      const { _id } = response.payload;
      listLoad(_id);
    });
  }, []);

  return (
    <div className='user-form'>
      {/* <div>
        <p>
          <input type={"text"} placeholder="ID"></input>
        </p>
        <p>
          <input type={"text"} placeholder="PASSWORD"></input>
        </p>
        <p>
          <button>회원가입</button>
          <button>로그인</button>
        </p>
      </div> */}
      <div>
        <p>{authUser.name}님 안녕하세요</p>
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
