import Board from "./board";
import Layout from "layout/Layout";
import { meetingList } from "MeetigData";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "react-apexcharts";
import { Link, useParams } from "react-router-dom";

function MeetingInfo() {
  const { no } = useParams();
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

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={4}>
            <p>모임소개 페이지</p>
            <h2>모임명 #해시태그</h2>
            <p>소개글</p>
            <p>인원:n/정원</p>
            <p>모임장</p>
            <p>다음 모임 날짜</p>
            <p>지역</p>
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
