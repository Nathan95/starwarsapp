
import axios from 'axios';

export const fetchData = async (num = 1, setter) => {
  try {
    const res = await axios.get(
      `https://swapi.dev/api/people/?page=${num}`
    );
    setter(res?.data.results);
    
  } catch (error) {
    console.log(error);
  }
}

