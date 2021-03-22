import React from 'react';
import '../css/Page.css';
import {Link} from 'react-router-dom';

const Pagination = ({onClicker}) => {
  const pageNumbers = [1, 2, 3, 4, 5];
  return pageNumbers.map(number => (
    <span key={number}>
      <Link to={`/?page=${number}`} 
        id={number}
        className="pagination"
        onClick={onClicker}
      > 
        {number}
      </Link>
      </span> 
  ));
}

  export default Pagination;