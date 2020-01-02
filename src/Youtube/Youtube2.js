import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';



const API_KEY = process.env.REACT_APP_API_KEY;










function Youtube() {

  const [posts, setPosts] = useState()
  const [channel, setChannel] = useState("UC29ju8bIPH5as8OGnQzwJyA")

  const result = 5;

 
  
 const handleSubmit = event => {
    setChannel(event.target.value);
  };

  useEffect(() =>{
    axios
     .get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=${result}`)
    .then(response => {
      setPosts(response.data.items)
      // console.log (response)
      
    })
    .catch (err => {
      console.log(err)
    })
  }, [channel])
  if (!posts) {
    return <div>Loading ... </div>
  }
 
  return (
    <div className="App">
      <h1> Youtube Videos</h1>


      <div className = "videosBox">
        Enter a channelId
      <input type="text" 
        onChange={event => handleSubmit(event)}
        placeholder="channel"
        name ="channelID">
         
        </input>
        
      {posts.map(post => 
        <div key={post.snippet.description}>
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