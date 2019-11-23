import React, {Component} from 'react';

import "./YouTubeButton.css"

const API = 'AIzaSyBqPoqTqTKap42sxau1ZbBrfUp7XSJjwgM'
const channelID = 'UC29ju8bIPH5as8OGnQzwJyA'
const result = 20;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


// const [state, useState] = useState 

// setState (...state,video:obj.id.videoId , description: obj.item.snippet.description)




class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  let var1 ;
  let var2 ;
  fetch(finalURL)
      .then((response) => response.json())  
      .then((responseJson) => {
        console.log(responseJson);
        const resultyt = responseJson.items.map(obj =>
       this.setState(this.state.resultyt.concat
      ({video: "https://www.youtube.com/embed/"+obj.id.videoId,description:obj.snippet.description})));
      console.log({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    // console.log(finalURL);
    // console.log(this.state.resultyt);

    return(
      <div>
<div>
  <h3>Click Me to see your Youtube Videos</h3>
</div>

        <button onClick={this.clicked}>Click Me!</button>
          {
            this.state.resultyt.map((link, i) => {
              // console.log(link);
              var frame =
              <div>
                <div key={i} className="youtube">
                 <iframe title="youtube" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div>

                </div>
                </div>
              return frame;
            })
          }
          {this.frame}


    </div>
    );
  }
}

export default Youtube;