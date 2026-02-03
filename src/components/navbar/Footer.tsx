"use client";

import { useAOS } from "@/้hooks/useAos";
import { ContactBadge } from "../ui/ContactBadge";

export function Footer() {
  useAOS(1000);

  return (
    <footer className="w-full flex flex-col justify-between items-center bg-black overflow-hidden pt-5 gap-20">
      {/* Header ส่วนบน */}
      <div className="w-full justify-between flex px-5 md:px-10">
        <h2 className="text-white/60 font-light text-md md:text-xl text-center md:text-left">
          Last modified Oct 2025
        </h2>
        <h2 className="text-white font-light text-md text-center md:text-right">Hit me up</h2>
      </div>

      {/* กลุ่มปุ่ม Contact */}
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-1 sm:gap-4 md:gap-8 z-20 relative -mb-9 md:-mb-18">
          <ContactBadge 
            label="Email" 
            value="kanokwan.somparn@gmail.com" 
            color="bg-[#D8DE99]" 
            rotate="rotate-6"
            isCopy 
          />
          <ContactBadge 
            label="Phone" 
            value="089-494-9486" 
            color="bg-[#F6CBBA]" 
            rotate="-rotate-6"
            isCopy 
          />
          <ContactBadge 
            label="Address" 
            link="https://maps.app.goo.gl/gTtwhucFNFafoSCZ9" 
            color="bg-[#FBCA58]" 
          />
          <ContactBadge 
            label="GitHub" 
            link="https://github.com/knwpound" 
            color="bg-[#D07189]" 
            rotate="rotate-12"
          />
        </div>

        {/* ข้อความขนาดยักษ์ด้านล่าง */}
        <div className="overflow-hidden z-10 relative">
          <p className="text-white font-semibold text-[18vw] lg:text-[150px] leading-none translate-y-6 md:translate-y-10">
            GOOD BYE
          </p>
        </div>
      </div>
    </footer>
  );
}