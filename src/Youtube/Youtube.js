  
import React, {Component} from 'react';

// import "./YouTubeButton.css"

const API = 'AIzaSyB43QXLkz9VsgWGp72AMPkgA-XDvIZDAhI'
const channelID = 'UC29ju8bIPH5as8OGnQzwJyA'
const result = 20;

 var finalURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10"

// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}



  render(){
    // console.log(finalURL);
    console.log(this.state.resultyt);

    return(
      <div>
<div>
  <h3>Click Me to see your Youtube Videos</h3>
</div>

        <button onClick={this.clicked}>Click Me!</button>
          {
            this.state.resultyt.map((link, i) => {
              // console.log(link);
              var frame = <div key={i} className="youtube">
                <iframe title="youtube" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                return frame;
              })
          }
          {this.frame}


    </div>
    );
  }
}

export default Youtube;