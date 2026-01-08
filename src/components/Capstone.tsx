"use client";
import { useAOS } from "@/้hooks/useAos";

export function Capstone() {
  useAOS(1000)
  return (
    <div
      data-aos="fade-up"
      className="w-full h-screen flex flex-col justify-center bg-yellow-400 px-[5%]"
    >
      <h1 className="text-3xl font-semibold">I have experience in ...</h1>
      <div className="flex flex-row justify-center gap-40 mt-10">
        <div 
          className="flex flex-col items-center w-[200px] h-[200px] bg-white shadow-md py-4 px-2 gap-2 -rotate-5 
    hover:rotate-0 transition-transform duration-300"
        >
          <div>
            <div className="bg-red-400 w-[20px] h-[20px] relative top-3.5 start-1 z-20 rounded-full"></div>
            <div className="bg-red-600 w-[20px] h-[20px] relative z-10 rounded-full"></div>
          </div>
          <h1 className="text-center text-3xl font-semibold">Research</h1>
          <p className="w-full text-center text-sm font-light">
            User Interview , Related-product Auditing, User Persona & User Journey 
          </p>
        </div>
        <div
          className="flex flex-col items-center w-[200px] h-[200px] bg-white shadow-md py-4 px-2 gap-2 rotate-1.5 
    hover:rotate-5 transition-transform duration-300"
        >
          <div>
            <div className="bg-red-400 w-[20px] h-[20px] relative top-3.5 start-1 z-20 rounded-full"></div>
            <div className="bg-red-600 w-[20px] h-[20px] relative z-10 rounded-full"></div>
          </div>
          <h1 className="text-center text-3xl font-semibold">UI Skills</h1>
          <p className="w-full text-center text-sm font-light">
            Wireframing (Low & High Fidelity), Design Systems, Basic Design Knowledge
          </p>
        </div>
        <div
          className="flex flex-col items-center w-[200px] h-[200px] bg-white shadow-md py-4 px-2 gap-2
    hover:rotate-5 transition-transform duration-300"
        >
          <div>
            <div className="bg-red-400 w-[20px] h-[20px] relative top-3.5 start-1 z-20 rounded-full"></div>
            <div className="bg-red-600 w-[20px] h-[20px] relative z-10 rounded-full"></div>
          </div>
          <h1 className="text-center text-3xl font-semibold">Figma</h1>
          <p className="w-full text-center text-sm font-light">
            Design System & Design Token
Interactive Prototyping : Auto Layout, Components, Variants
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-40 mt-10">
        <div
          className="flex flex-col items-center w-[200px] h-[200px] bg-white shadow-md py-4 px-2 gap-2 rotate-5 
    hover:rotate-0 transition-transform duration-300"
        >
          <div>
            <div className="bg-red-400 w-[20px] h-[20px] relative top-3.5 start-1 z-20 rounded-full"></div>
            <div className="bg-red-600 w-[20px] h-[20px] relative z-10 rounded-full"></div>
          </div>
          <h1 className="text-center text-3xl font-semibold">Testing</h1>
          <p className="w-full text-center text-sm font-light">
            Iterative design process including User Testing with Feedback
          </p>
        </div>
        <div
          className="flex flex-col items-center w-[200px] h-[200px] bg-white shadow-md py-4 px-2 gap-2 -rotate-2 
    hover:-rotate-4 transition-transform duration-300"
        >
          <div>
            <div className="bg-red-400 w-[20px] h-[20px] relative top-3.5 start-1 z-20 rounded-full"></div>
            <div className="bg-red-600 w-[20px] h-[20px] relative z-10 rounded-full"></div>
          </div>
          <h1 className="text-center text-3xl font-semibold">Coding</h1>
          <p className="w-full text-center text-sm font-light">
            Intermediate Software Developer with internship experience
          </p>
        </div>
      </div>
    </div>
  );
}
