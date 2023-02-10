import { Link } from "react-router-dom";
import { meetingList } from "MeetigData";
import { useEffect, useState } from "react";

function MeetingList() {
  const [mockList, setMockList] = useState([]);

  useEffect(() => {
    setMockList(meetingList);
  }, []);
  return (
    <>
      <div>모임목록</div>
      <div>
        {mockList
          ? mockList.map((item, idx) => {
              return (
                <div>
                  <Link to={`/meeting/${item.no}`}>
                    {item.title}/ 정원 {item.maxNum}
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
export default MeetingList;
