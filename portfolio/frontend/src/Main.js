import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import ProfilePicture from '../../frontend/src/images/profilePicture.JPG';

const Main = () => {
  const [message, setMessage] = useState('Message received!');

  useEffect(() => {
    axios.get('http://localhost:8000/api')
      .then(response => {
        setMessage(response.data.message);
      });
  }, []);


  return (
    <div class="container" >
      frfrfr
      <img class="profilePicture" src={ProfilePicture} alt='' />
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
};

export default Main;

