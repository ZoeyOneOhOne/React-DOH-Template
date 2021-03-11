import React, { Fragment, useState, useEffect, Image } from 'react';
import './Style.css';
import centerPic from "../../Assets/transportation.png";

function Home() {
  const [temp, setTemp] = useState("");
  const [randoName, setRandoName] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() =>{
    fetch('/api').then(response =>{
      if(response.ok){
        return response.json();
      }
    }).then(data => console.log(data?.Name));
  }, []);

  useEffect(() =>{
    fetch('/apiCall2').then(response =>{
      if(response.ok){
        return response.json();
      }
    }).then(data => setRandoName(data?.name));
  }, []);

  //Fetch data from the OpenWeatherMaps free api: https://openweathermap.org/api
  const fetchItems = async () => {
    const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Charleston&appid=4df7cfc15bfeb45b68bc24aeb62af934');
    const items = await data.json();
    setTemp(items.main.temp);
  }


  //The actual view
  return (
    <Fragment>
      <center>
      <img src={centerPic} alt="Logo"/>
        <h1>Landing Page</h1>
        <p>Temperature in Charleston WV (Kelvin): {temp}</p>
        <p>The rando name form python api was: {randoName}</p>
      </center>
    </Fragment>
  );
}

export default Home;
