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
    setMeeting(loadMeetings);
  };

  useEffect(() => {
    if (userData && userData._id) {
      listLoad(userData._id);
    }
  }, [userData]);

  return (
    <Layout>
      <main>
        <section class='py-5 text-center container'>
          <div class='row py-lg-5'>
            <div class='col-lg-6 col-md-8 mx-auto'>
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
