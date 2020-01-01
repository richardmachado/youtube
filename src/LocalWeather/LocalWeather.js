import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';

function LocalWeather() {

    const [posts, setPosts] = useState()
  
    useEffect(() =>{
        fetch("https://us-restaurant-menus.p.rapidapi.com/restaurant//menuitems?page=1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "7ed9b45f44msh7b54452dd3426d2p1a5846jsnb1fb80132277"
            }
        })
	
       .then(response => {
        setPosts(response)
        console.log(response)

        
      })
      .catch (err => {
        console.log(err)
      })
    }, [])
    if (!posts) {
      return <div>Loading ... </div>
    }
   
    return (
      <div className="App">
        <h1> Youtube Videos</h1>
  
  
        <div className = "videosBox">
          <h1>Enter a channelID</h1>
          
  
         
     </div>
      </div>
    );
  }
  
  export default LocalWeather;