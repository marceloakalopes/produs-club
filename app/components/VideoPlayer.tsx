import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url="/main.mp4"
        className="react-player"
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
      />
    </div>
  );
};

export default VideoPlayer;
