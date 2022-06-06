import "../css/MvpStory.css"
import React, { Component } from "react";

class MvpStory extends Component {
  render(props) {
    return (
      <div className="mvp-story-item">
        <a><img src={this.props.imgSrc} className="mvp-story-img" /></a>
        <div className="mvp-story-content">
          <h4 className="mvp-story-title">{this.props.title}</h4>
          <p className="mvp-story-duration">{this.props.duration}</p>
          <p className="mvp-story-highlight">{this.props.note}</p>
          <p className="mvp-story-description">{this.props.description}</p>
        </div>
        <div className="mvp-story-link" style={ this.props.link != null ? {} : { display: 'none' } }>
          <a href={this.props.link} target="_blank">
            <button className="mvp-story-button">看更多</button>
          </a>
        </div>
      </div>
    );
  }
}

export default MvpStory;
