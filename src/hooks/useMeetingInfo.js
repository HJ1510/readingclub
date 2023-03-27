import { useState, useEffect } from 'react';
import { getMeetingByNo } from 'api';

export function useMeetingInfo(no) {
  const [meetingInfo, setMeetingInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const meetingInfo = await getMeetingByNo(parseInt(no));
        // console.log(meetingInfo);
        setMeetingInfo(meetingInfo);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return meetingInfo;
}
