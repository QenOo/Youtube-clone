import React, { Component } from 'react';
import './assets/css/main.css';
import Navbar from './components/Navbar';
import axios from 'axios';

class App extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAVNeTlBqMx89pciJK2Fxf_sID63XtDUOk&type=video&q=spongebob&part=snippet&maxResults=20`)
            .then(res => {
                const persons = res.data;
                console.log(persons)
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div className="App">
                <Navbar />
            </div>
        )
    };
}

export default App;
