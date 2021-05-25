import React from 'react';
import YouTube from 'react-youtube';

class YtTemplate extends React.Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const {vidId} = this.props
    return (<YouTube videoId={vidId} opts={opts} onReady={this._onReady} />);
  }

 
}
export default YtTemplate