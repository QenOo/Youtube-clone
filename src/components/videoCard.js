import React, { Component } from 'react';

class Video extends Component {
    render () {
        return (
            <div className="video">
                <div className="image">
                    <img src={this.props.image} />
                </div>
                <div className="body">
                    <h3 className="title">{this.props.title}</h3>
                    <div className="info">
                        <span className="channelTitle">{this.props.channelTitle}</span>
                        <span className="publishTime">{this.props.publishTime}</span>
                    </div>
                    <p className="description">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Video;