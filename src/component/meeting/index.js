import Layout from "../../layout/Layout";
import Category from "./Category";
import MeetingCalender from "./MeetingCalender";
import LoginJoin from "./LoginJoin";
import "../../assets/css/component/meeting/Meeting.css";

function Meeting() {
  return (
    <div className="Meeting">
      <Layout>
        <h1>meeting</h1>
        <div>{<MeetingCalender />}</div>
        <div>{<LoginJoin />}</div>
        <div className="Catergory">
          <Category />
        </div>
      </Layout>
    </div>
  );
}

export default Meeting;
