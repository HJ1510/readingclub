import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useState, useEffect } from 'react';
import 'assets/css/Calendar.css';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';

function renderEventContent(eventInfo) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function MeetingCalender({ apiFunction, title, no }) {
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();

  const listLoad = async (no) => {
    const orders = await apiFunction(no);
    // console.log(orders);

    let transformedData;
    if (title === 'allScheduleCalendar') {
      transformedData = orders.map((order) => ({
        meetingNo: order.meetingNo,
        title: order.title,
        date: order.order[0].date,
      }));
    } else if (title === 'groupScheduleCalendar') {
      transformedData = orders.map((order) => ({
        orderNo: order.orderNo,
        title: order.title,
        date: order.date,
      }));
    } else if (title === 'joinedGroupScheduleCalendar') {
      transformedData = orders.map((order) => ({
        meetingNo: order.autoIncrementField,
        orderNo: order.autoIncrementField,
        title: order.title,
        date: order.order[0].date,
      }));
    }

    setEvents(transformedData);
  };

  const handleEventClick = (clickInfo) => {
    if (title !== 'allScheduleCalendar') return;
    const meetingId = clickInfo.event._def.extendedProps.meetingNo;
    console.log(meetingId);
    console.log(clickInfo);
    window.location.href = `/meeting/info/${meetingId}`;
  };

  useEffect(() => {
    if (title === 'joinedGroupScheduleCalendar') {
      dispatch(auth()).then((response) => {
        const { _id } = response.payload;
        listLoad(_id);
      });
    } else if (title === 'groupScheduleCalendar') {
      listLoad(no);
    } else {
      listLoad();
    }
  }, [title, no]);

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
