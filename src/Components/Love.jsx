import React, { useEffect, useRef, useState } from "react";
import "./Love.css";

const images = [
  "../assets/img/Snapchat-1665262877.jpg",
  "../assets/img/IMG-20230530-WA0083.jpg",
  "../assets/img/IMG-20230905-WA0029.jpg",
  "../assets/img/IMG20240115124731.jpg",
  "../assets/img/IMG-20250719-WA0008.jpg",
  "../assets/img/Snapchat-1165477838.jpg",
  "../assets/img/Snapchat-149464514.jpg",
  "../assets/img/IMG-20231001-WA0095.jpg",
  "../assets/img/img1.jpg",
  "../assets/img/Snapchat-615571359.jpg",
  "../assets/img/IMG-20250719-WA0005.jpg",
  "../assets/img/IMG-20240107-WA0044.jpg",
];

const Love = () => {
  const [showButton, setShowButton] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const lastImageRef = useRef(null);
  const audioRef = useRef(null);
  useEffect(() => {
      audioRef.current.play();
  
      
      const audio = document.getElementById("loveSound");
        if (audio) {
          audio.volume = 0.3;
          audio.play().then(() => {
        audio.muted = false; 
      });
        }
  
  
      
    }, []);
  

  useEffect(() => {
    const last = lastImageRef.current;
    if (last) {
      const handleAnimationEnd = () => {
        setShowButton(true);
      };
      last.addEventListener("animationend", handleAnimationEnd);
      return () => {
        last.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, []);

  return (
    <div className="stamp-container">
      {!playVideo ? (
        <>
          <h1>Sweet Memories</h1>
          <div className="stamp-sheet">
            {images.map((src, index) => {
              const isLast = index === images.length - 1;
              return (
                <div
                  className="stamp"
                  key={index}
                  style={{ animationDelay: `${index * 0.3}s` }}
                  ref={isLast ? lastImageRef : null}
                >
                  <img src={src} alt={`Memory ${index + 1}`} />
                </div>
              );
            })}
          </div>
          {showButton && (
            <button className="start-button" onClick={() => setPlayVideo(true)}>
              Play Video
            </button>
          )}
        </>
      ) : (
        <div className="video-container">
          <video controls autoPlay className="love-video" loop>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <audio ref={audioRef} src="../../public/last.mp3"  />

    </div>
  );
};

export default Love;
