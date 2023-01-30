import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../Meeting.css";

function MeetingCalender() {
  return (
    <div className="Calender">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "일정1", date: "2023-01-01" },
          { title: "모임2", date: "2023-01-07" },
        ]}
        height="700px"
      />
    </div>
  );
}

export default MeetingCalender;
