import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function UserForm() {
  const [userId, setUserId] = useState();
  const [authUser, setAuthUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth()).then((response) => {
      setAuthUser(response.payload);
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
        <div className='bnt-user-meeting'>
          <button>모임1</button>
        </div>
        <p>
          <button>모임2</button>
        </p>
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
