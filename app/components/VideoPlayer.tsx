"use client";

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is mounted

    const timer = setTimeout(() => {
      setPlayVideo(true);
    }, 1000); // 1000ms = 1 second delay

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <div
      className="player-wrapper"
      style={{
        backgroundColor: playVideo ? 'transparent' : 'black',
        width: '100%',
        height: '100%',
      }}
    >
      {playVideo && (
        <ReactPlayer
          url="/main.mp4"
          className="react-player"
          playing
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          controls={false} // Hide default controls if not needed
        />
      )}
    </div>
  );
};

export default VideoPlayer;
