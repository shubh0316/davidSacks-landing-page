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
import content2 from "@/assets/content2.svg";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setMoveUp(true), 1000);
    const timer2 = setTimeout(() => setLoading(false), 1500);

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
          <div className="flex flex-col justify-around space-y-8 items-center mt-20 md:mt-20">
            <Image src={profile} alt="profile" />
            <Image src={name} alt="name" />
            <Image src={content} alt="content" />
            <div className="flex space-x-2">
              <Image src={follow} alt="follow" width={130} />
              <a
                href="https://x.com/buysackscoin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt="twitter" width={140} />
              </a>
            </div>
            <Image src={button} alt="button" />
            <div className="text-xl text-center md:w-1/2">SACKS coin is a rally token to show support for the work of the White House Crypto and AI Czar and the advancement of crypto and AI policy. SACKS coin, DavidSacksCoin.com, and SacksCoin.com is a community driven initiative and is not directly endorsed by David Sacks or the U.S. Government.</div>
          </div>
        </div>
      )}
    </>
  );
}
