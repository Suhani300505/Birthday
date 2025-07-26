import React, { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useNavigate } from "react-router-dom";

const Wish = () => {
  const message = `🎉 Happy Birthday, My Pagal! 💖 Wishing you a day to the love of my life! You are my everything 🤗, and I am so grateful for your love. You are loved more than words can express. I'm so thankful for you being in my life every single day. Being able just to call you my Misterji 😍 puts the biggest smile on my face.
I hope your birthday is everything you want it to be, and so much more.
God has blessed me with so many things in life but the most beautiful blessing has been you. The love and care you have given me all these months, years is something that can only be compared with heaven.
Happy Birthday My Jaan, My Man, My Best Friend ,My Love
Hope you have the best day of your life Enjoy Your Day and Make so Many Beautyfull Memories.
Happiest birthday Sweetheart💘
Here's to your brightest year yet!
With love, Fugga 💌`;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const audioRef = useRef(null);
  const { width, height } = useWindowSize();
    const navigate = useNavigate();


  useEffect(() => {
    audioRef.current.play();

    let timer;
    if (index < message.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + message.charAt(index));
        setIndex((prev) => prev + 1);
      }, 40);
    }

    const audio = document.getElementById("loveSound");
      if (audio) {
        audio.volume = 0.3;
        audio.play().then(() => {
      audio.muted = false; 
    });
      }


    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="wish-container">
      <Confetti width={width} height={height} />
      <audio ref={audioRef} src="../../public/third.mp3" preload="auto" />
      

      <div className="wish-box">
        <p>{displayText}</p>
      </div>
      
      <div>
        <button className="Wish-button" onClick={() => navigate("/love")}>
        Click to See the Gift 🎁
      </button>
      </div>

      
    </div>
  );
};

export default Wish;
