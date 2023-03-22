import React from 'react'
import Container from "react-bootstrap/Container";
import Layout from './../../layout/Layout';
import { Col } from 'react-bootstrap/Col';
import { useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { auth } from 'actions/user_action';
export const Member = () => {
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        date:'',
        nickname:'',
        gender:"",
        imgpath:"",
      });
    
    const [date, setDate] = useState("");
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(auth())
        .then(response => {
          if (response.payload.isAuth) {
            setUser({
              ...user,
              name: response.payload.name,
              email: response.payload.email,
              date: response.payload.date,
              nickname: response.payload.nickname,
              gender: response.payload.gender,
              password: response.payload.password,
              imgpath:response.payload.imgpath
            });
          } else {
            // 로그인 하지 않은 경우 처리
          }
        });
    }, []);
      const handleInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({
          ...prevUser,
          [name]: value,
        }));
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        // 사용자 정보 수정 API 호출
        axios.put('/api/users/me', user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => {
            // 수정 성공 처리
            console.log('수정되었습니다.');
          })
          .catch(err => console.error(err));
      };
    
    return (
        <Layout>
            <Container>
      <form onSubmit={handleSubmit}>
      <form>
                <label htmlFor="image">프로필 이미지</label>
                <img src={`${user.imgpath.path}`} alt="프로필 이미지"/>
              
                </form>
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            value={user.nickname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="date">생년월일</label>
          <input
            type="date"
            id="date"
            value={user.date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">저장</button>
      </form>
      </Container>
      </Layout>
    );
  }
export default Member