import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './Heatmap.css'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
function Heatmap() {
  const today = new Date();
  const values = [
    { date: today, count: 1 },
    { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1), count: 4 },
    { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2), count: 3 },
    { date: new Date(2023, 1, 18), count: 1 },
    { date: new Date(2022, 12, 18), count: 3 },
    { date: new Date(2022, 11, 18), count: 11 },
  ];
 
  const classForValue = (value) => {
    if (!value) {
        return 'color-empty';
      }
      return `color-scale-${Math.floor(value.count / 4) * 4}`;
  };

  return (
    // <div className='dsds'>
    //   <div      style={{width:"500px"}}>
    //   <CalendarHeatmap
    //     values={values}
    //     showWeekdayLabels={true}
    //     showMonthLabels={true}
    //     classForValue={classForValue}
   
    //   />
    //   </div>
    //     <div className="legend" style={{margin:"50px",width:"200px"}}>
    //     <div className="legend-item">
    //       <span className="color-text">less</span>
    //     </div>
    //     <div className="legend-item">
    //     <span className="color-box color-scale-0" />
    //     <span className="color-box color-scale-4" />
    //     <span className="color-box color-scale-8" />
    //       <span className="color-box color-scale-12" />
    //       <span className="color-text">more</span>
    //       <span className="color-text"></span>
    //     </div>
    //     </div>
    // </div>
    <Row className='dsds'>
      <Col md={9}style={{height:"100px"}}>
        <div style={{height:"100px"}}>
        <CalendarHeatmap
            values={values}
            showWeekdayLabels={true}
            showMonthLabels={true}
            classForValue={classForValue}    
        />
        </div>
      </Col>
      
      <Col md={3}> 
        <span className="color-text">less</span>
        <span className="color-box color-scale-0" />
        <span className="color-box color-scale-4" />
        <span className="color-box color-scale-8" />
        <span className="color-box color-scale-12" />
        <span >more</span>
     </Col>
    </Row>
  );
}

export default Heatmap