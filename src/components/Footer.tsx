"use client";

import { useAOS } from "@/้hooks/useAos";

export function Footer() {
  useAOS(1000)
  return (
    <div className="h-[50vh] w-full flex flex-col justify-between items-center bg-black">
      <div className="w-full justify-between flex flex-row px-5 py-5">
        <h2 className="text-white font-light text-xl">
          Last modified Oct 2025
        </h2>
        <h2 className="text-white font-light text-xl">Hit me up</h2>
      </div>
      <div className="w-fit flex flex-col items-center space-y-[-60px]">
        <div
          className="w-full px-20 flex flex-row justify-between z-20"
        >
          <p
            className="inline-block px-7 py-1 text-xl text-black bg-[#D8DE99] rounded-full
        rotate-10">
            Email
          </p>
          <p
            className="inline-block px-7 py-1 text-xl text-black bg-[#F6CBBA] rounded-full
        -rotate-10"
          >
            Phone
          </p>
          <p
            className="inline-block px-7 py-1 text-xl text-black bg-[#FBCA58] rounded-full
        "
          >
            Address
          </p>
          <p
            className=" inline-block px-7 py-1 text-xl text-black bg-[#D07189] rounded-full
        rotate-15"
          >
            GitHub
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="inline-block h-[100px] text-white text-center font-semibold text-[150px] p-0 m-0 leading-none translate-y-10">
          GOOD BYE
        </p>
        </div>
        
      </div>
    </div>
  );
}
