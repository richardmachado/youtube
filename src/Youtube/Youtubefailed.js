import React, { Component } from 'react';
import axios from 'axios';

export default class YouTube extends Component {
constructor(props) {
    super(props);

    this.state = {video: []};
}

UNSAFE_componentWillMount() {
    setInterval(() => {
        this.VideoList();
    }, 2000)
}
VideoList() {
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUbW18JZRgko_mOGm5er8Yzg&key={AIzaSyBqPoqTqTKap42sxau1ZbBrfUp7XSJjwgM')
        .then((response) => {
            this.setState({video: response.headers});
        })
        .catch(function (error) {
            console.log(error);
        });
}
render() {
    return (
        <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">
                {this.state.video.map((item, i) =>{
                    return(
                        <h1>{item.items}</h1>

                    )
                })}
            </div>
        </div>
    )
}
}