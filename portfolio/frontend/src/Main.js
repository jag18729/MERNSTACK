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
    <>
      <div class="container" >
        <img class="profilePicture" src={ProfilePicture} alt='' />
        <div class="intro">
          <h2 class='introtext' >Full-Stack Web Developer</h2>
          <h3 class='introtext'> Self Motivated, U.S. Marine Veteran with over 8 years in technical experience. </h3>
          <h3 class='introtext'>On a journey to become a professional Software Engineer. </h3>
        </div>
        <h2 class="glow">Rafael J. Garcia</h2>
        <h3 class="glow"> Los Angeles, California</h3>
      </div>

      <div class="about-me">
        hello

      </div>


    </>
  );
};

export default Main;

