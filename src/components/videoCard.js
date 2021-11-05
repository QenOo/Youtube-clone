import React, { Component } from 'react';

class Video extends Component {
    render () {
        const {image, title, channelTitle, publishTime, description} = this.props
        return (
            <div className="video">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="body">
                    <h3 className="title">{title}</h3>
                    <div className="info">
                        <span className="channelTitle">{channelTitle}</span>
                        <span className="publishTime">{publishTime}</span>
                    </div>
                    <p className="description">{description}</p>
                </div>
            </div>
        )
    }
}

export default Video;