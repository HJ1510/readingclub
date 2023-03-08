import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { INITIAL_EVENTS } from "mockevent-utils";
import axios from "axios";
import { useState, useEffect } from "react";
import "assets/css/Calendar.css";

function renderEventContent(eventInfo) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

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
  // return (
  //   <div className={className.className}>
  //     <FullCalendar
  //       plugins={[dayGridPlugin, interactionPlugin]}
  //       initialView="dayGridMonth"
  //       events={[
  //         { title: "일정1", date: "2023-02-01" },
  //         { title: "모임2", date: "2023-02-07" },
  //       ]}
  //       // events={events}
  //       weekends={true}
  //       height="500px"
  //     />
  //   </div>
  // );

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleEventClick = (clickInfo) => {
    window.location.href = "https://example.com/" + clickInfo.event.id;
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <div className={className.className}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listDay",
        }}
        buttonText={{
          listDay: "day",
        }}
        initialView="dayGridMonth"
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        // events={{ url: '/api/events', method: 'GET' }}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
        height="600px"
      />
    </div>
  );
}

export default MeetingCalender;
