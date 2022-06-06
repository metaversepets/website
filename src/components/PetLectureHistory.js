import "../css/PetLectureHistory.css"
import React, { Component } from "react";
import Discord from './Discord'

class PetLectureHistory extends Component {
  render(props) {
    return (
      <div className="pet-lecture-item">
        <a><img src={this.props.imgSrc} className="pet-lecture-img" /></a>
        <div className="pet-lecture-content">
          <h4 className="pet-lecture-title">{this.props.title}</h4>
          <p className="pet-lecture-duration">{this.props.duration}</p>
          <p className="pet-lecture-description">{this.props.description}</p>
          <p className="pet-lecture-notice">{this.props.notice}</p>
        </div>
        <div className="join-group">
          <Discord button={true} title="加入社群"/>
        </div>
      </div>
    );
  }
}

export default PetLectureHistory;
