import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../assets/css/component/meeting/Meeting.css";

function MeetingCalender() {
  return (
    <div className="Calender">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "일정1", date: "2023-02-01" },
          { title: "모임2", date: "2023-02-07" },
        ]}
        weekends={true}
        height="500px"
      />
    </div>
  );
}

export default MeetingCalender;
