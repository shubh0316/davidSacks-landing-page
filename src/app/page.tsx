"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import sack from "@/assets/sack.svg";
import profile from "@/assets/profile.svg";
import name from "@/assets/name.svg";
import content from "@/assets/content.svg";
import button from "@/assets/button.svg";
import follow from "@/assets/follow.svg";
import twitter from "@/assets/twitter.svg";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    // Display the loader for 2000ms and then trigger the upward move
    const timer1 = setTimeout(() => setMoveUp(true), 1000);
    // After the upward move, remove loader from the DOM
    const timer2 = setTimeout(() => setLoading(false), 1500); // Add 500ms for the upward movement

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-transform duration-500 ${
            moveUp ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {/* Make the loader take full height and width of the screen */}
          <img
            src="/loader.svg"
            alt="Loading..."
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="overflow-hidden p-4 mt-10">
          <div className="flex justify-around items-center">
            <Image src={sack} alt="sack" />
          </div>
          <div className="flex flex-col justify-around space-y-8 items-center mt-40">
            <Image src={profile} alt="profile" />
            <Image src={name} alt="name" />
            <Image src={content} alt="content" />
            <div className="flex space-x-2">
              <Image src={follow} alt="follow" />
              <a
                href="https://x.com/davidsacks47"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt="twitter" />
              </a>
            </div>
            <Image src={button} alt="button" />
          </div>
        </div>
      )}
    </>
  );
}
