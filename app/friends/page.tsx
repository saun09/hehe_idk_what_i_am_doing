"use client";

import { useEffect, useRef, useState } from "react";

export default function FriendsPage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [clap, setClap] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const audio = audioRef.current;
    audio?.play().catch(() => {});

    /* ---------------- CLAP ANIMATION ---------------- */
    const firstDelay = setTimeout(() => {
      triggerClap();
      setInterval(triggerClap, 7000);
    }, 18000);

    function triggerClap() {
      setClap(true);
      setTimeout(() => setClap(false), 500);
    }

    /* ---------------- POPUP AUTO HIDE ---------------- */
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    /* ---------------- FLOATING HEARTS ---------------- */
    const heartInterval = setInterval(() => {
      setHearts((prev) => [...prev, Math.random()]);
    }, 900);

    return () => {
      clearTimeout(firstDelay);
      clearInterval(heartInterval);
    };
  }, []);

  return (
    <main className={`friendsContainer ${clap ? "clapFlash" : ""}`}>

     {/* ⭐ VOLUME POPUP + POPCAT */}
{showPopup && (
  <div className="popupWrapper">
    <img
      src="/gifs/popcat.gif"
      alt="popcat"
      className="popcat"
    />

    <div
      className="volumePopup"
      onClick={() => setShowPopup(false)}
    >
      🔊 VOLUME KAM KAR 
    </div>
  </div>
)}

      {/* FRIENDS TITLE */}
      <h1 className={`friendsTitle ${clap ? "pop" : ""}`}>
        F<span className="dot red"></span>
        U<span className="dot blue"></span>
        N<span className="dot yellow"></span>
        F<span className="dot red"></span>
        A<span className="dot blue"></span>
        C<span className="dot yellow"></span>
        T
      </h1>

      <p className="friendsText">
       i really like you 😎
      </p>

      {/* SOFA */}
      <div className={`sofa ${clap ? "sofaBounce" : ""}`}>
        🛋️
      </div>

      {/* FLOATING HEARTS */}
      {hearts.map((h, i) => (
        <div key={i} className="miniHeart" style={{ left: `${h * 100}%` }}>
          💖
        </div>
      ))}

      {/* MUSIC */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/friends-theme.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
}