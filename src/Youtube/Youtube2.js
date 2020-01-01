import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';

const API = 'AIzaSyB43QXLkz9VsgWGp72AMPkgA-XDvIZDAhI'


//edit the channel ID that you want to get videos from 
const channelID = 'AIzaSyAR0PL1uzkCOTVPhwWf2wsU3rp32r1BCjk'
const result = 5;

 const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


function Youtube() {

  const [posts, setPosts] = useState()

  useEffect(() =>{
    axios
     .get(finalURL)
    .then(response => {
      setPosts(response.data.items)
      console.log (response)
      
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
        
      {posts.map(post => 
        <div>
        <iframe className="youtube-video" title="youtube" width="560" height="315" 
        frameBorder="10" allowFullScreen src={`https://youtube.com/embed/${post.id.videoId}`}/>
        <p classname ="youtube-desc">{post.snippet.description}</p>
        </div>
      )}
       
   </div>
    </div>
  );
}

export default Youtube;