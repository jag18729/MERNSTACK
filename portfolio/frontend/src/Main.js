import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [message, setMessage] = useState('Message received!');

  useEffect(() => {
    axios.get('http://localhost:8000/api')
      .then(response => {
        setMessage(response.data.message);
      });
  }, []);


  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Main;

