import Board from "./board";
import Layout from "layout/Layout";
import { meetingList } from "MeetigData";
import { Col, Row } from "react-bootstrap";

function MeetingInfo() {
  return (
    <Layout>
      <Row>
        <Col>
          <p>모임소개 페이지</p>
          <h2>모임명 #해시태그</h2>
          <p>소개글</p>
          <p>인원:n/정원</p>
          <p>모임장</p>
          <p>달력</p>
          <p>지역</p>
        </Col>
        <Col>
          <p>모임원 성비</p>
          <p>모임원 연령비</p>
        </Col>
      </Row>
      <div>
        <Board title="FAQ" />
        <Board title="모임후기" />
        <Board title="" />
      </div>
    </Layout>
  );
}
export default MeetingInfo;
