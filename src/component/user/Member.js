import React from 'react'
import Container from "react-bootstrap/Container";
import Layout from './../../layout/Layout';
import { Col } from 'react-bootstrap/Col';
import { useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export const Member = () => {
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        date:'',
        nickname:'',
        gender:"",
      });
    
    const [date, setDate] = useState("");
    const dispatch = useDispatch();
  
   
    useEffect(() => {
        // 사용자 정보 가져오기
        axios.get('/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => {
            setUser({
                name: user.name,
                email: user.email,
                password: '',
                confirmPassword: '',
                dateOfBirth: user.dateOfBirth,
                nickname: user.nickname,
                gender: user.gender,
            });
          })
          .catch(err => console.error(err));
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
        <div>
          <label htmlFor="id">아이디</label>
          <input
            type="id"
            id="id"
            value={user.id}
            onChange={handleInputChange}
          />
        </div>
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
            type="password"
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
            value={date}
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