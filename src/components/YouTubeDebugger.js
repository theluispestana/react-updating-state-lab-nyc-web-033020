import React from "react";

class YoutubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  changeBitrate = () => {
    this.setState((previousState) => {
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12,
        },
      };
    });
  };

  changeResolution = () => {
    this.setState((previousState) => {
      return {
        settings: {
          ...this.state.settings,
          video: {
            resolution: "720p",
          },
        },
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeBitrate} className="bitrate"></button>
        <button onClick={this.changeResolution} className="resolution"></button>
      </div>
    );
  }
}

export default YoutubeDebugger;
