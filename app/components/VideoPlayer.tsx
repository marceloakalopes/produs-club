"use client";

import { useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setShowPlayButton(true); // Show play button if autoplay fails
          });
      }
    }, 1000); // 1-second delay

    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      });
    }
  };

  return (
    <div
      className="relative w-full h-full"
      style={{ backgroundColor: isPlaying ? "transparent" : "black" }}
    >
      <video
        ref={videoRef}
        className="w-full h-auto"
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showPlayButton && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
          style={{
            color: "white",
            fontSize: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Play
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
