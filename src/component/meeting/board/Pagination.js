function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const pageNumbers = [];
  for (let i = currentPage; i <= Math.min(currentPage + 2, totalPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {currentPage > 1 && (
          <li className='page-item'>
            <button
              className='page-link'
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &lt;
            </button>
          </li>
        )}
        {pageNumbers.map((page) => (
          <li key={page} className='page-item'>
            <button
              className={`page-link ${page === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className='page-item'>
            <button
              className='page-link'
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
