import Image from "next/image";
import sack from "@/assets/sack.svg";
import profile from "@/assets/profile.svg";
import name from "@/assets/name.svg";
import content from "@/assets/content.svg";
import button from "@/assets/button.svg";
import follow from "@/assets/follow.svg";
import twitter from "@/assets/twitter.svg";

export default function Home() {
  return (
    <>
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
    </>
  );
}
