import axios from 'axios';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
// import '../../assets/css/component/note/Booknote.css';
import styles from '../../assets/css/component/note/Booknote.module.css';

function SearchBar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [notelist, setNoteList] = useState([]);
  let [countspan, setcountspan] = useState(5);
  const [categoryname, setcategoryname] = useState([]);

  useEffect(() => {
    axios.get('/api/category').then((response) => {
      setcategoryname(response.data);
    });
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault(); // 폼의 기본 동작 막기

    try {
      const response = await axios.get(`/search?keyword=${query}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setResults(response.data);
      // console.log(results)
    } catch (error) {
      console.error(error);
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    axios.get('/api/users/auth').then((response) => {
      if (response.data.isAuth) {
        axios.get('/api/notelist/user').then((response) => {
          setNoteList(response.data);
        });
      } else {
        navigate('/');
      }
    });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <select className='form-select' style={{ width: '300px' }}>
          {categoryname.map((category) => {
            return (
              <option key={category.category} value={category}>
                {category.category}
              </option>
            );
          })}
        </select>
        <div>
          <input
            className='asdfg'
            type='text'
            placeholder='Search'
            aria-label='Search'
            style={{ borderRadius: '10px' }}
            value={query}
            onChange={handleQueryChange}
          />
          <FaSearch onClick={handleSearch}></FaSearch>
        </div>
      </div>
      <div>
        {results.length > 0 ? (
          <div
            className='row row-cols-1 row-cols-sm-3 row-cols-md-2 g-5 '
            style={{ marginTop: '20px' }}
          >
            {results.map((book, index) => (
              <div key={index} className='row mb-1 '>
                <div className='col-md6 '>
                  <div className='row g-0 border rounded  flex-md-row mb-4  h-md-250 booknotelisttitle1 '>
                    <div className='col-auto d-none d-lg-block '>
                      <img
                        className='bd-placeholder-img'
                        width='200'
                        height='270'
                        src={book.thumbnail}
                      ></img>
                    </div>
                    <div className='col p-4 d-flex flex-column position-static '>
                      <strong className='d-inline-block mb-2 text-primary'>
                        {book.booktitle}
                      </strong>
                      <h3 className='mb-0'>{book.title}</h3>
                      <br />
                      <div className='mb-1 text-muted'></div>
                      <p className='card-text mb-auto'>
                        {' '}
                        {parse(
                          book.content.length > 15
                            ? book.content.substring(0, 15) + '..'
                            : book.content
                        )}
                      </p>

                      <div style={{ display: 'flex' }}>
                        <Link
                          to={`/booknote/${book._id}`}
                          style={{ marginRight: '20px' }}
                        >
                          View
                        </Link>
                        <a style={{ marginRight: '20px' }}>
                          조회수 : {book.hit}
                        </a>
                        <a>🧡 {book.likes}</a>
                      </div>
                      <a>{book.createdAt}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          query.length === 0 && (
            <div
              className='row row-cols-1 row-cols-sm-3 row-cols-md-2 g-5 '
              style={{ marginTop: '20px' }}
            >
              {notelist.map((book, index) => (
                <div key={index} className='row mb-1 '>
                  <div className='col-md6 '>
                    <div className='row g-0 border rounded  flex-md-row mb-4  h-md-250 booknotelisttitle1 '>
                      <div className='col-auto d-none d-lg-block '>
                        <img
                          className='bd-placeholder-img'
                          width='200'
                          height='270'
                          src={book.thumbnail}
                        ></img>
                      </div>
                      <div className='col p-4 d-flex flex-column position-static '>
                        <strong className='d-inline-block mb-2 text-primary'>
                          {book.booktitle}
                        </strong>
                        <strong className='mb-0' style={{ fontSize: '2em' }}>
                          {book.title}
                        </strong>
                        <br />
                        <div className='mb-1 text-muted'></div>
                        <p className='card-text mb-auto'>
                          {' '}
                          {parse(
                            book.content.length > 15
                              ? book.content.substring(0, 15) + '..'
                              : book.content
                          )}
                        </p>

                        <div style={{ display: 'flex' }}>
                          <a style={{ marginRight: '20px' }}>
                            조회수 : {book.hit}
                          </a>
                          <a>🧡 {book.likes}</a>
                          <Link
                            to={`/booknote/${book._id}`}
                            style={{ marginLeft: '160px' }}
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default SearchBar;
