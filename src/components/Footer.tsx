"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="h-[50vh] w-full flex flex-col justify-between items-center bg-black">
      <div className="w-full justify-between flex flex-row px-5 py-5">
        <h2 className="text-white font-light text-xl">
          Last modified Oct 2025
        </h2>
        <h2 className="text-white font-light text-xl">Hit me up</h2>
      </div>
      <div className="relative w-fit flex flex-col items-center -space-y-15">
        <div
          className="w-full px-20 flex flex-row justify-between z-20"
          data-aos="fade-down"
        >
          <p
            className="inline-block px-7 py-1 text-xl text-black bg-[#D8DE99] rounded-full
        rotate-10"
          >
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
