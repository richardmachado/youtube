import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';



const API_KEY = process.env.REACT_APP_API_KEY;


function YouTubeSearch() {

  const [posts, setPosts] = useState()
  const [term, setTerm] = useState("obam    ")
  console.log (term)

  
 const handleSubmit = event => {
    setTerm(event.target.value);
  };

  useEffect(() =>{
    axios
     .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&key=${API_KEY}`)
    .then(response => {
      setPosts(response.data.items)
      console.log(response)
      // console.log (response)
      
    })
    .catch (err => {
      console.log(err)
    })
  }, [term])
  if (!posts) {
    return <div>Loading ... </div>
  }
 
  return (
    <div className="App">
      <h1> Search by Keyword</h1>


      <div className = "videosBox">
        Enter a keyword to search by {term}
      <input type="text" 
        
        placeholder="enter some words"
        name ="channelID"
        onChange={event => handleSubmit(event)}>

         
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

export default YouTubeSearch;