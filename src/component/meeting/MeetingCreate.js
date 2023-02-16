import Layout from "layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";
import { useState } from "react";

function MeetingCreate() {
  return (
    <Layout>
      <Row>
        <Col>
          <input type="text" placeholder="모임명"></input>
        </Col>
      </Row>
      <Row>
        <Col>글쓰기</Col>
        <Col>토론</Col>
      </Row>
      <Row>
        <Col>카테고리</Col>
      </Row>
      <Row>
        <Col>해시태크</Col>
      </Row>
      <Row>
        <Col>장소</Col>
      </Row>
      <Row>
        <Col>인원</Col>
      </Row>
      <Row>
        <Col>소개</Col>
      </Row>
      <Row>
        <Col>일정</Col>
      </Row>
      <Row>
        <Col>성별 공개 여부</Col>
      </Row>
      <Row>
        <Col>나이 공개 여부</Col>
      </Row>
      <Row>
        <Col>
          <button>모임개설</button>
        </Col>
      </Row>
    </Layout>
  );
}

export default MeetingCreate;
