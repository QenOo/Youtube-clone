import React, { Component } from 'react';
import './assets/css/main.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import Video from './components/videoCard';

class App extends Component {
    state = {
        videos: []
    }

    componentDidMount() {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDP5y9xSN9lmKT4FZrmebkSL1W-eK8lIvk&type=video&q=spong&part=snippet&maxResults=20`)
            .then(res => {
                const videos = res.data.items;
                console.log(videos)
                this.setState({ videos });
            })
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <div className="filter">
                        <h1>About 13,000,000 Filtred results</h1>
                        <h1>Filter</h1>
                    </div>
                <hr />
                {this.state.videos.map((video, index) => <Video key={index} image={video.snippet.thumbnails.medium.url} title={video.snippet.title} channelTitle={video.snippet.channelTitle} publishTime={video.snippet.publishTime} description={video.snippet.description} />)}
                </div>
                
                
            </div>
        )
    };
}

export default App;
