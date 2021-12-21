import React, {useState, useEffect} from 'react';
import axios from 'axios';
const URL = 'https://gateway.marvel.com/v1/public/';
const hash = '3ad99dc2880ffe8f042447dc3e575296';
const KEY = `?ts=1&apikey=71e58e24df4647c4992cb660cd588571&hash=${hash}`;

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}${url}${KEY}`);
      setData(response.data.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, error, data};
};

export default useFetch;
