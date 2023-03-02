import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../assets/css/component/meeting/Meeting.css";
import axios from "axios";
import { useState, useEffect } from "react";

function MeetingCalender(className) {
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   // 서버에서 이벤트를 가져와서 events state를 업데이트합니다.
  //   // 이 부분은 서버와의 통신 방법에 따라 다를 수 있습니다.
  //   fetchEvents();
  // }, []);

  // function fetchEvents() {
  //   // axios를 사용하여 서버에서 이벤트 목록을 가져옵니다.
  //   axios
  //     .get("/api/events")
  //     .then((response) => {
  //       setEvents(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  return (
    <div className={className.className}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "일정1", date: "2023-02-01" },
          { title: "모임2", date: "2023-02-07" },
        ]}
        // events={events}
        weekends={true}
        height="500px"
      />
    </div>
  );
}

export default MeetingCalender;
