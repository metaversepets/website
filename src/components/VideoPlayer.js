import "../css/VideoPlayer.css"
import React, { Component } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    var teacherNotes = this.props.teacherInfos.map(function (i) {
        return (
          <li className="teacher-note">{i}</li>
        );
    });

    var videoContent = (<div className="video-content"></div>)
    if (this.props.needOgPass == false) {
        videoContent = (
          <div className="video-content">
            <button className="start-btn" onClick={this.toggleModal}>
              開始上課
            </button>

            <Modal
                isOpen={this.state.isOpen}
                onRequestClose={this.toggleModal}
                contentLabel={this.props.videoName}
            >
              <div className="modal">
                <iframe width="90%" height="90%" src={this.props.videoLink + "?autoplay=1&autohide=2&cc_load_policy=3&modestbranding=1&fs=0&showinfo=0&rel=0&iv_load_policy=3&mute=0&loop=1"} title={this.props.videoName} frameborder="0" allowfullscreen></iframe>
                <button className="close-btn" onClick={this.toggleModal}>關閉課程</button>
              </div>
            </Modal>
          </div>
        );
    } else {
        videoContent = (
          <button className="start-btn" disabled alt="須持有 OG Pass">
            開始上課
          </button>
        )
    }

    return (
      <div className="video-player-group">
        <div className="video-series">
          <p className="video-series-name">{this.props.seriesName}</p>
          <p className="video-date">直播日期：{this.props.date}</p>
        </div>
        <img src={this.props.imgSrc} />
        <div className="video-name">
          <p>{this.props.videoName}</p>
        </div>
        <div className="teacher-info">
          <p className="teacher-name">講師: {this.props.teacher}</p>
          <p className="teacher-background">講師簡介：</p>
          {teacherNotes}
        </div>
        {videoContent}
      </div>
    );
  }
}

export default VideoPlayer;
