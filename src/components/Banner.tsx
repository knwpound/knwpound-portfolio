"use client"
import Image from "next/image";
import { useAOS } from "@/้hooks/useAos";

import { FlipText } from "./FlipText";
export function Banner() {
  useAOS(1500);
  return (
    <div className="h-[190vh] w-full overflow-hidden">
      <div
        className="absolute h-[180vh] inset-0 animate-pulseCircle1"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #EECE7B, transparent, transparent)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="absolute h-[200vh] inset-0 animate-pulseCircle2"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #FF8D4B, #ffff, #ffff)",
          zIndex: 0,
        }}
      ></div>
      <Image className="absolute top-30 end-0" src={"/pics/pound.png"} alt="" width={"700"} height={"700"}></Image>
      <div className="relative top-[60vh] start-[10%]">
        <div className="flex flex-row gap-3">
          <p className="font-serif italic text-3xl">
            Sawasdee ka, Your Favorite
          </p>
          <FlipText />
          <p className="font-serif italic text-3xl">is here</p>
        </div>
        <div className="h-[200px] overflow-hidden whitespace-nowrap animate-[reveal_3s_ease-out_forwards]">
          <h1 className="mt-8 text-8xl font-apple">Pound Kanokwan</h1>
        </div>
        <div data-aos="fade-up" className="mt-[30vh]">
          <h1 className="text-[48px] font-semibold">About Me</h1>
          <p>Hi, I'm Pound, a 4th-year Computer Engineering student.</p>
          <p>I love designing and creating interactive user experiences.</p>
          <p>I'm passionate about web development and UI/UX design.</p>
          <p>
            In my free time, I enjoy learning new technologies and improving my
            skills.
          </p>
        </div>
      </div>
    </div>
  );
}
