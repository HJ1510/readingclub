// import Board from "./board";
import NewBoard from "./newboard";
import Layout from "layout/Layout";

function MeetingInfo() {
  return (
    <Layout>
      <div>모임정보</div>
      <div>
        <NewBoard />
      </div>
    </Layout>
  );
}
export default MeetingInfo;
