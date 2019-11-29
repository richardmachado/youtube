import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';

const API = 'AIzaSyBqPoqTqTKap42sxau1ZbBrfUp7XSJjwgM'
//edit the channel ID that you want to get videos from 

const channelID = 'UCzS3-65Y91JhOxFiM7j6grg'
const result = 5;

const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`
console.log (finalURL)

function Youtube() {
  const [posts, setPosts] = useState()

  useEffect(() =>{
    axios
     .get(finalURL)
    .then(response => {
      setPosts(response.data.items)
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
      {posts.map(post => 
  
        <iframe className="youtube-video" title="youtube" width="560" height="315" 
        frameBorder="10" allowFullScreen src={`http://youtube.com/embed/${post.id.videoId}`}/>
      
      )}
       
   </div>
    </div>
  );
}

export default Youtube;