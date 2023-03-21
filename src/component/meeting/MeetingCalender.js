import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useState, useEffect } from 'react';
import 'assets/css/Calendar.css';

function renderEventContent(eventInfo) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function MeetingCalender({ apiFunction }) {
  const [events, setEvents] = useState([]);

  const listLoad = async (search) => {
    const orders = await apiFunction();
    const transformedData = orders.map((order) => ({
      autoIncrementField: order.autoIncrementField,
      title: order.title,
      date: order.order[0].date,
    }));

    console.log(transformedData);
    setEvents(transformedData);
  };

  const handleEventClick = (clickInfo) => {
    const meetingId = clickInfo.event._def.extendedProps.autoIncrementField;
    console.log(meetingId);
    console.log(clickInfo);
    window.location.href = 'http://localhost:3000/meeting/info/' + meetingId;
  };

  useEffect(() => {
    listLoad();
  }, []);

  return (
    <div className='Calender'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,listDay',
        }}
        buttonText={{
          listDay: 'day',
        }}
        initialView='dayGridMonth'
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={events}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        height='600px'
      />
    </div>
  );
}

export default MeetingCalender;
