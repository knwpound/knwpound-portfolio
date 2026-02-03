"use client";
import { useAOS } from "@/้hooks/useAos";
import PostIt from "../ui/PostIt";

export function Capstone() {
  useAOS(1000);
  
  return (
    <div data-aos="fade-up" className="w-full min-h-screen flex flex-col justify-center bg-yellow-400 px-[5%] py-20">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center md:text-left mb-10">
        I have experience in ...
      </h1>

      {/* Grid ที่ปรับตามจำนวนกล่องอัตโนมัติ */}
      <div className="grid grid-cols-3 gap-4 md:gap-10 lg:gap-20 justify-items-center">
        <PostIt 
          title="Research" 
          desc="User Interview, Related-product Auditing, User Persona & User Journey" 
          rotate="-rotate-3"
        />
        <PostIt 
          title="UI Skills" 
          desc="Wireframing (Low & High Fidelity), Design Systems, Basic Design Knowledge" 
          rotate="rotate-2"
        />
        <PostIt 
          title="Figma" 
          desc="Design System & Token, Interactive Prototyping: Auto Layout, Components" 
          rotate="-rotate-1"
        />
        <PostIt 
          title="Testing" 
          desc="Iterative design process including User Testing with Feedback" 
          rotate="rotate-3"
        />
        <PostIt 
          title="Coding" 
          desc="Intermediate Software Developer with internship experience" 
          rotate="-rotate-2"
        />
      </div>
    </div>
  );
}

// แยก Component Pin ไว้ใช้ซ้ำเพื่อความสะอาด
const Pin = () => (
  <div>
    <div className="bg-red-400 w-[20px] h-[20px] relative top-3.5 start-1 z-20 rounded-full"></div>
    <div className="bg-red-600 w-[20px] h-[20px] relative z-10 rounded-full"></div>
  </div>
);