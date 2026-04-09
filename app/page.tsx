"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hearts, setHearts] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev, Math.random()]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container">
      <h1 className="title">hi, i made you something?? </h1>

      <p className="subtitle">
        i should be studying instead   💗
      </p>

      {/* NEW BUTTON */}
      <button
        className="cuteBtn"
        onClick={() => router.push("/friends")}
      >
        CLICK CLICK
      </button>

      {hearts.map((h, i) => (
        <div
          key={i}
          className="heart"
          style={{ left: `${h * 100}%` }}
        >
          💖
        </div>
      ))}
    </main>
  );
}