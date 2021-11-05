import React, { Component } from 'react';
import './assets/css/main.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import Video from './components/videoCard';
import {onSearch} from './Api';

class App extends Component {
    state = {
        videos: [],
        keyWord: 'AlAhly',
        resultsSearchNumber: null,
    }

    // Get the Api
    componentDidMount = () => {
        onSearch(this.state.keyWord).then( res => {
                const videos = res.data.items;
                const resultsSearchNumber = res.data.pageInfo.totalResults;
                this.setState({ videos, resultsSearchNumber });
            })
    }

    // Handel change in input
    handelChange = (e) => {
        this.setState({keyWord: e.target.value});
    }


    handelClick = () => {
        onSearch(this.state.keyWord).then( res => {
            const videos = res.data.items;
            const resultsSearchNumber = res.data.pageInfo.totalResults;
            this.setState({ videos, resultsSearchNumber });
        })
    }

    render() {
        const {keyWord, resultsSearchNumber} = this.state
        return (
            <div className="App">
                <Navbar handelChange={this.handelChange} keyWord={keyWord} handelClick={this.handelClick} />
                <div className="container">
                    <div className="filter">
                        <h1>About {resultsSearchNumber} Filter results</h1>
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
