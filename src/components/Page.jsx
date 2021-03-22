import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import {fetchHomeWorld, fetchFirstFilmAppearance} from '../utils/utils';
import image from '../starwars-pics/noimage.png';
import '../css/Page.css';
import '../css/ListColours.css';
import { fetchData } from '../api/fetcher';
import queryString from 'query-string';


const Page = () => {
  const [response, setResponse] = useState([]); 
  const containerRef = useRef(null);

  const url = queryString.parse(window.location.search);
  
  //call data on page load
    useEffect(() => {
      if(url.page != 1) {
        fetchData(url.page, setResponse);
      } else {
        fetchData(1, setResponse);
      }
    }, [])


  // scroll to top on page click
  const scrollRef = () => {
    containerRef.current.scrollIntoView({ behavior: "smooth"});
  }

  const Pagination = () => {
    const pageNumbers = [1, 2, 3, 4, 5]
    return pageNumbers.map(number => (
      <span key={number}>
        <Link to={`/?page=${number}`} 
          id={number}
          className="pagination"
          onClick={() => {
            fetchData(number, setResponse)
            scrollRef();
          }}
        > 
          {number}
        </Link>
        </span> 
    ));
  }

  const mapData = () => {
    if(response && response.length > 0) {
       return (
         <div>
          {response.map(item => (
            <div className="itemContainer" key={item.name}>
              <div className="image"><img src={image} alt=""/></div>
              <div className="content">
                <ul>
                <li className="title">Name: <span className="name">{item.name}</span></li>
                <li className="title">Birthyear: <span className="name">{item.birth_year}</span></li>
                <li className="title">Homeworld: <span className="name">{fetchHomeWorld(item.homeworld)}</span></li>
                <li className="title">First film: <span className="name">{fetchFirstFilmAppearance(item.films[0])}</span></li>
                <li className="title">Height: <span className="name">{item.height}</span></li>
                <li className="title">Eye Colour: <span className="name">{item.eye_color}</span></li>
              </ul>
              </div>
            </div>
          ))}
          <Pagination />
        </div>
       )
    }
  }

 return (
    <div className="container" ref={containerRef}> 
       {mapData()}
    </div>
 );
}

export default Page;