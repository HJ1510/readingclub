// import Board from "./board";
import Board from "./board";
import Layout from "layout/Layout";

function MeetingInfo() {
  return (
    <Layout>
      <div>
        <p>모임명</p>
        <p>달력</p>
        <p>소개글</p>
        <p>지역</p>
        <p>참여자</p>
      </div>
      <div>
        <Board />
      </div>
    </Layout>
  );
}
export default MeetingInfo;
