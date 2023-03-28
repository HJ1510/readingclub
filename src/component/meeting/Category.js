import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import "../../assets/css/component/meeting/Meeting.css";
import { Dropdown } from 'react-bootstrap';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { HiSearch } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { getSearchMeetingByKwd } from 'api';

function Category({ onMeetingsChange, onKeywordChange }) {
  const categorys = ['건강/취미', '경제경영', '공무원수험서', '과학', '달력'];
  const [keyword, setKeyword] = useState('');
  const [searchMeetings, setSearchMeetings] = useState([]);

  const handleKeywordChange = async (event) => {
    setKeyword(event.target.value);
    onKeywordChange(event.target.value);

    const data = await getSearchMeetingByKwd(event.target.value);
    setSearchMeetings(data);
    onMeetingsChange(data);
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();

    const data = await getSearchMeetingByKwd(keyword);
    console.log(data);
    setSearchMeetings(data);
    onMeetingsChange(data);
    console.log(searchMeetings);
  };

  return (
    <Row>
      <Col md={6}>
        {/* <Form>
          {["checkbox"].map((type) => (
            <div key={type}>
              {categorys.map(function (category) {
                return (
                  <Form.Check
                    inline
                    className={styles.cateItem}
                    label={category}
                    key={category}
                  />
                );
              })}
            </div>
          ))}
        </Form> */}
      </Col>
      <Col md={3}>
        <Form className={styles.meetingSearch}>
          <div>
            <input
              style={{marginLeft:"300px"}} placeholder='모임이름 :)'
              onChange={handleKeywordChange}
            ></input>
          </div>
          <div>
            <button onClick={handleSearchClick}>
              <HiSearch size='24' />
            </button>
          </div>
        </Form>
      </Col>
      <Col md={1}>
       
      </Col>
    </Row>
  );
}

export default Category;
