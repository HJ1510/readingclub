import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useMembers } from 'hooks/useMembers';
function AttendanceList(props) {
  const [orders, setOrders] = useState(props.orders);

  function handleAttendance(orderIndex, attendeeIndex) {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].attendance[attendeeIndex].check =
      !updatedOrders[orderIndex].attendance[attendeeIndex].check;
    setOrders(updatedOrders);
  }
  const { no } = useParams();
  const [meetinginfo, setMeetinginfo] = useState('');
  const members = useMembers(no);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          {members.map((order, orderIndex) => (
            <th key={orderIndex}>이름{order.no}</th>
         
          ))}
        </tr>
      </thead>
      {members.map((order, orderIndex) => (
      <tbody>
        <tr>
          <td>1</td>
          <td>{order.name}</td>
          <td>{order.role}</td>
          <td>{order.status}</td>
        </tr>
      </tbody>
       ))}
    </Table>
  
  );
}

export default AttendanceList;
