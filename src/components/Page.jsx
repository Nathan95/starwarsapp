import React, {useState, useEffect, useRef} from 'react';
import {fetchHomeWorld, fetchFirstFilmAppearance, scrollRef} from '../utils/utils';
import image from '../starwars-pics/download.png';
import '../css/Page.css';
import '../css/ListColours.css';
import { fetchData } from '../api/fetcher';
import queryString from 'query-string';
import Pagination from './Pagination';

const Page = () => {
  const [response, setResponse] = useState([]); 
  const containerRef = useRef(null);
  const url = queryString.parse(window.location.search);
  
  //call data on page load
    useEffect(() => {
      if(url.page !== 1) {
        fetchData(url.page, setResponse);
      } else {
        fetchData(1, setResponse);
      }
    }, [])
 
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
          <Pagination onClicker={(e) => {
            fetchData(e.target.id, setResponse)
            scrollRef(containerRef);
          }} />
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