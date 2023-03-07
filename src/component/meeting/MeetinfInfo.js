import Board from "./board";
import Layout from "layout/Layout";
import { getMeetingByNo } from "MeetigData";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "react-apexcharts";
import { Link, useParams } from "react-router-dom";
import "assets/css/component/meeting/Meeting.css";
import { useEffect, useState } from "react";
import MeetingModal from "./MeetingModal";

function MeetingInfo() {
  const { no } = useParams();
  const [meetinginfo, setMeetinginfo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const meeting = getMeetingByNo(no);
  if (meeting !== null) {
    console.log(meeting.title); // "첫번째 모임입니다."
  }

  const genderData = {
    series: [70, 30],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Female", "Male"],
      colors: ["#F2CDA6", "#A6CAF0"],
      title: {
        text: "모임원 성비",
        align: "left",
        style: {
          fontSize: "20px",
          color: "#263238",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  const agesData = {
    series: [30, 40, 30],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["20", "30", "40"],
      colors: ["#F2CDA6", "#A6CAF0", "#80C080"],
      title: {
        text: "모임원 연령비",
        align: "left",
        style: {
          fontSize: "20px",
          color: "#263238",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  const GenderPieChart = () => {
    return (
      <Chart
        options={genderData.options}
        series={genderData.series}
        type="pie"
        width="400"
      />
    );
  };

  const AgesPieChart = () => {
    return (
      <Chart
        options={agesData.options}
        series={agesData.series}
        type="pie"
        width="400"
      />
    );
  };

  function handleClick() {
    
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  useEffect(() => {
    const meeting = getMeetingByNo(parseInt(no));
    setMeetinginfo(meeting);
  }, []);

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <h2>{meetinginfo.title}</h2>
            </div>
            <div>
              <h2>정원 : {meetinginfo.maxNum}</h2>
            </div>
          </Col>
          <Col md={4} style={{ display: "flex" }}>
            <GenderPieChart />
            <AgesPieChart />
          </Col>
        </Row>
        <Row>
          <Link to={`/meeting/group/${no}`}>
            <button>모임 게시판</button>
          </Link>

          <Link to={`/meeting/admin/${no}`}>
            <button>관리</button>
          </Link>
          <div>
            <button onClick={handleClick}>가입신청</button>
          </div>
          {showModal && (
            <MeetingModal
              message="가입 신청이 완료되었습니다."
              onClose={handleCloseModal}
            />
          )}
        </Row>
        <Row>
          <Board title="FAQ" />
          <Board title="모임후기" />
        </Row>
      </Container>
    </Layout>
  );
}
export default MeetingInfo;
