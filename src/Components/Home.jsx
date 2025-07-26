import React, { useEffect, useState, useRef } from "react";
import ConfettiGenerator from "confetti-js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showLove, setShowLove] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

    useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = "/first.mp3";
      audio.volume = 0.3;
      audio.play().catch((e) => {
        console.log("Autoplay failed:", e);
      });
    }
  }, []);


  useEffect(() => {
    if (showLove) {
      const confetti = new ConfettiGenerator({
        target: "confetti-canvas",
        max: 100,
        size: 1.2,
        animate: true,
        props: ["circle", "square", "triangle"],
        colors: [
          [255, 107, 129],
          [255, 195, 113],
          [255, 255, 255],
        ],
      });
      confetti.render();

      setTimeout(() => confetti.clear(), 6000);

      if (audioRef.current) {
        audioRef.current.src = "/second.mp3";
        audioRef.current.play();
      }
    }
  }, [showLove]);


  return (
    <div className="home-container">
      <canvas id="confetti-canvas"></canvas>

      {!showLove ? (
        <>
          <h1 className="home-title">🎂 Happy Birthday 🎂</h1>
          <h1 className="home-title"> 🎈 Fugga 🎈 </h1>
          <button className="home-button" onClick={() => setShowLove(true)}>
            Click to See the Magic ✨
          </button>
        </>
      ) : (
        <div className="card">
          <div className="heart pulse"></div>
          <h1>Love You Forever</h1>
          <p>This heart beats for you. You are the magic.</p>
          <button className="Wish-button" onClick={() => navigate("/wish")}>
            Click to See the Wish ✨
          </button>
        </div>
      )}

      <audio ref={audioRef} preload="auto" />
    </div>
  );
};

export default Home;
