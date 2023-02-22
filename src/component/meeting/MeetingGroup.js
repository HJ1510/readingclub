import Board from "./board";
import Layout from "layout/Layout";
import { meetingList } from "MeetigData";

function MeetingGroup() {
  return (
    <Layout>
      <div>
        <p>모임원들이 보는 모임페이지</p>
        <h2>모임명</h2>
        <p>달력</p>
        <p>소개글</p>
        <p>지역</p>
        <p>참여자</p>
      </div>
      <div>
        <Board title="모임원 게시판" />
      </div>
    </Layout>
  );
}
export default MeetingGroup;
