import MeetingCalender from "../component/MeetingCalender";
import "./Meeting.css";

function Meeting() {
  return (
    <div className="Meeting">
      <h1>meeting</h1>
      <p>모임</p>
      <div>
        <MeetingCalender />
      </div>
      <div className="LoginForm">
        <input value="ID"></input>
        <input value="password"></input>
      </div>
    </div>
  );
}

export default Meeting;
