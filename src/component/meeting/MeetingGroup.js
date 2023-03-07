// import Board from "./board";
// import Layout from "layout/Layout";
// import { meetingList } from "MeetigData";
// import MeetingCalender from "./MeetingCalender";
// import { Col, Container, Row, Card, ProgressBar } from "react-bootstrap";
// import profile from "assets/images/profile.png";
// import { useState, useEffect } from "react";
// import io from "socket.io-client";
// import { Button } from "react-bootstrap";
// import ChatModal from "./ChatModal";

// // const socket = io("http://localhost:3001");

// function MeetingGroup() {
//   const now = 60;

//   const [showModal, setShowModal] = useState(false);
//   const [messages, setMessages] = useState([]);


//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   return (
//     <Layout className="meeting">
//       <Container>
//         <h5>모임원들이 보는 모임페이지</h5>
//         <h2>모임명</h2>
//         <Button onClick={handleOpenModal}>채팅 열기</Button>
//         <ChatModal
//           show={showModal}
//           handleClose={handleCloseModal}
//           messages={messages}
//         />
//         <Row>
//           <Col>
//             <MeetingCalender />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Card>
//               <Card.Header>#... #...</Card.Header>
//               <Card.Body>
//                 <Card.Text></Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <p>지역</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <div className="member">
//               <img src={profile} />
//               참여자1
//               <ProgressBar
//                 className="attendanceBar"
//                 now={now}
//                 label={`${now}%`}
//               />
//             </div>
//             <div className="member">
//               <img src={profile} />
//               참여자2
//               <ProgressBar
//                 className="attendanceBar"
//                 now={now}
//                 label={`${now}%`}
//               />
//             </div>
//             <div className="member">
//               <img src={profile} />
//               참여자3
//               <ProgressBar
//                 className="attendanceBar"
//                 now={now}
//                 label={`${now}%`}
//               />
//             </div>
//             <div className="member">
//               <img src={profile} />
//               참여자4
//               <ProgressBar
//                 className="attendanceBar"
//                 now={now}
//                 label={`${now}%`}
//               />
//             </div>
//             <div className="member">
//               <img src={profile} />
//               참여자5
//               <ProgressBar
//                 className="attendanceBar"
//                 now={now}
//                 label={`${now}%`}
//               />
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Board title="모임원 게시판" />
//         </Row>
//       </Container>
//     </Layout>
//   );
// }
// export default MeetingGroup;
