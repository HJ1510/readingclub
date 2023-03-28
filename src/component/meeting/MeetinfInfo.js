import Board from './board';
import Layout from 'layout/Layout';
import { insertMember, getMeetingByNo } from 'api';
import { Col, Container, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from 'actions/user_action';
import { useDispatch } from 'react-redux';
import MeetingModal from './MeetingModal';
import { useMembers } from 'hooks/useMembers';
import { useMeetingInfo } from 'hooks/useMeetingInfo';
import styles from 'assets/css/component/meeting/Meeting.module.css';

function MeetingInfo() {
  const { no } = useParams();
  const [meetinginfo, setMeetinginfo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [authUser, setAuthUser] = useState({});
  const dispatch = useDispatch();
  const members = useMembers(no);
  const meetingInfo = useMeetingInfo(no);
  // console.log(authUser);
  // console.log(members);
  console.log(meetingInfo);

  const isHost = members.some(
    (member) => member.userId === authUser._id && member.role === 'host'
  );

  const isMember = members.some((member) => member.userId === authUser._id);

  const totalMembers = members.length;

  // 객체 생성 시, 초기값 설정
  const genderCounts = { male: 0, female: 0 };
  const ageCounts = {
    under20: 0,
    twenties: 0,
    thirties: 0,
    forties: 0,
    over40: 0,
  };

  // 배열 순회 대신 for...of 구문 활용
  if (totalMembers > 0) {
    for (const member of members) {
      // 성별, 연령대 별로 count 증가
      if (member.gender === 'male' || member.gender === 'female') {
        genderCounts[member.gender]++;
      }

      if (member.age < 20) {
        ageCounts.under20++;
      } else if (member.age < 30) {
        ageCounts.twenties++;
      } else if (member.age < 40) {
        ageCounts.thirties++;
      } else if (member.age < 50) {
        ageCounts.forties++;
      } else {
        ageCounts.over40++;
      }
    }
  }

  // 각 퍼센트 값 계산
  const malePercentage = (genderCounts.male / totalMembers) * 100;
  const femalePercentage = (genderCounts.female / totalMembers) * 100;

  const under20Percentage = (ageCounts.under20 / totalMembers) * 100;
  const twentiesPercentage = (ageCounts.twenties / totalMembers) * 100;
  const thirtiesPercentage = (ageCounts.thirties / totalMembers) * 100;
  const fortiesPercentage = (ageCounts.forties / totalMembers) * 100;
  const over40Percentage = (ageCounts.over40 / totalMembers) * 100;

  const genderData = {
    series: [femalePercentage, malePercentage],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Female', 'Male'],
      colors: ['#F2CDA6', '#A6CAF0'],
      title: {
        align: 'left',
        style: {
          fontSize: '20px',
          color: '#263238',
        },
      },
      legend: {
        position: 'bottom',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  const agesData = {
    series: [
      under20Percentage,
      twentiesPercentage,
      thirtiesPercentage,
      fortiesPercentage,
      over40Percentage,
    ],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['under20', '20', '30', '40', 'over40'],
      colors: ['#F2CDA6', '#A6CAF0', '#80C080'],
      title: {
        align: 'left',
        style: {
          fontSize: '20px',
          color: '#263238',
        },
      },
      legend: {
        position: 'bottom',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  const PieChart = ({ options, series }) => {
    return <Chart options={options} series={series} type='pie' />;
  };

  const handleClick = async () => {
    try {
      const body = {
        userId: authUser._id,
      };
      const response = await insertMember(no, body);

      if (response.success === true) {
        setShowModal(true);
        setMessage('가입 신청이 완료되었습니다.');
      } else {
        setShowModal(true);
        setMessage('오류입니다');
      }
    } catch (error) {
      setShowModal(true);
      setMessage(error.message);
    }
  };

  function handleCloseModal() {
    setShowModal(false);
  }

  useEffect(() => {
    getMeetingByNo(parseInt(no)).then((meeting) => {
      setMeetinginfo(meeting);
    });
    dispatch(auth()).then((response) => {
      setAuthUser(response.payload);
    });
  }, []);

  return (
    <Layout className={styles.Meetinginfo}>
      <Container>
        <Row>
          <Col className='meeting-info'>
            <div className='meeting-title'>
              <h2>모임 이름 : {meetinginfo.title}</h2>
            </div>
            {meetinginfo.creator && (
              <div className='meeting-creator'>
                <h2>모임장 : {meetinginfo.creator.name}</h2>
              </div>
            )}
            <div className='meeting-max-num'>
              <h2>정원 : {meetinginfo.maxNum}</h2>
            </div>
          </Col>
          {totalMembers > 0 && (
            <Col md={6} className={styles.chartContainer}>
              <PieChart
                options={genderData.options}
                series={genderData.series}
              />
              <PieChart options={agesData.options} series={agesData.series} />
            </Col>
          )}
        </Row>
        <Row>
          <Col className={styles.MeetingInfoButtons}>
            <Link to={`/meeting/group/${no}`}>
              <p>모임 게시판</p>
            </Link>
            {isHost && (
              <Link to={`/meeting/admin/${no}`}>
                <p>관리</p>
              </Link>
            )}

            <div>
              {isMember ? (
                <p>가입신청완료</p>
              ) : (
                <p onClick={handleClick}>가입신청</p>
              )}
            </div>
            {showModal && (
              <MeetingModal message={message} onClose={handleCloseModal} />
            )}
          </Col>
        </Row>
        <Row>
          <Board title='FAQ' />
          <Board title='review' />
        </Row>
      </Container>
    </Layout>
  );
}
export default MeetingInfo;
