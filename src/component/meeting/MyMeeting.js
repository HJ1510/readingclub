import Layout from 'layout/Layout';
import { Col, Row } from 'react-bootstrap';
import MeetingCalender from './MeetingCalender';
import { useEffect, useState } from 'react';
import MyMeetingList from './MyMeetingList';
// import styles from 'assets/css/component/meeting/Meeting.module.css';
import '../../assets/css/component/community/Community.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMeetings } from 'api';

function MyMeeting() {
  const [meeting, setMeeting] = useState([]);
  const userData = useSelector((state) => state.user.userData);

  const listLoad = async (id) => {
    const loadMeetings = await getUserMeetings(id);

    const meetings = loadMeetings.map((meeting) => ({
      title: meeting.title,
      role: meeting.members[0].role,
      memberStatus: meeting.members[0].status,
      no: meeting.autoIncrementField,
      membersLength: meeting.members.length,
      maxNum: meeting.maxNum,
      imgFile: meeting.imgFile,
      meetingStatus: meeting.meetingStatus,
    }));

    const sortedMeetings = meetings.sort((a, b) => b.no - a.no);
    setMeeting(sortedMeetings);
    // memberStatus가 'host', 'full_member'인 모임만 보이게
    // const filteredMeetings = sortedMeetings.filter(
    //   (meeting) =>
    //     meeting.memberStatus === 'host' ||
    //     meeting.memberStatus === 'full_member'
    // );
    // setMeeting(filteredMeetings);
  };

  useEffect(() => {
    if (userData && userData._id) {
      listLoad(userData._id);
    }
  }, [userData]);

  return (
    <Layout>
      <main>
        <section className='py-5 text-center container'>
          <div className='row py-lg-5'>
            <div className='col-lg-12 col-md-12 mx-auto'>
              {userData && (
                <MeetingCalender
                  apiFunction={getUserMeetings}
                  userId={userData._id}
                  title='joinedGroupScheduleCalendar'
                />
              )}
            </div>
          </div>
        </section>
        <MyMeetingList meeting={meeting} />
      </main>
    </Layout>
  );
}

export default MyMeeting;
